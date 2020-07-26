mod utils;
use wasm_bindgen::prelude::*;
use std::sync::Mutex;
use gif::{Decoder, ColorOutput, SetParameter, Reader};
use lazy_static::lazy_static;

// A macro to provide `println!(..)`-style syntax for `console.log` logging.
macro_rules! log {
    ( $( $t:tt )* ) => {
        web_sys::console::log_1(&format!( $( $t )* ).into());
    }
}

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

lazy_static! {
    static ref FRAME_HOLDER: Mutex<Vec<GifFrame>> = Mutex::new(vec![]);
}

struct GifFrame {
    buffer: Box<[u8]>,
    info: Box<[u16]>,
}

fn get_buffer_size(reader: &mut Reader<&[u8]>) -> usize {
    reader.buffer_size()
}

fn get_info(reader: &mut Reader<&[u8]>) -> Option<Box<[u16]>> {
    match reader.next_frame_info() {
        Ok(info) => match info {
            Some(frame) => Some(vec![frame.width, frame.height, frame.delay].into_boxed_slice()),
            None => None
        },
        Err(_) => {
            None
        }
    }
}

fn deinterlace_gif(gif: &[u8]) -> Vec<GifFrame> {
    let mut decoder = Decoder::new(gif);
    decoder.set(ColorOutput::RGBA);
    let mut reader = decoder.read_info().unwrap();
    let mut frames = vec![];
    while let Some(gif_info) = get_info(&mut reader) {
        let mut buffer = vec![0; get_buffer_size(&mut reader)];
        match reader.read_into_buffer(&mut buffer) {
            Ok(_) => {},
            Err(_) => {
                break;
            }
        }
        let gif_frame = GifFrame{ buffer: buffer.into_boxed_slice(), info: gif_info };
        frames.push(gif_frame);
    }
    frames
}

fn create_stutter_transition(mut new_frames: Vec<GifFrame>, mut old_frames: Vec<GifFrame>) -> Vec<GifFrame> {
    old_frames
        .drain(..) 
        .zip(new_frames.drain(..))
        .map(|t| vec![t.0, t.1])
        .flatten()
        .collect()

}

// fn create_fade_transition(new_frames: Vec<GifFrame>, old_frames: Vec<GifFrame>) {

//     old_frames
//         .drain(..) 
//         .zip(new_frames.drain(..))
//         .enumerate()
//         .map(|(i,t)| {
            
//         })
//         .collect()
// }

// fn create_image_in_image_transition(new_frames: Vec<GifFrame>, old_frames: Vec<GifFrame>) {}

// fn create_two_up_transition(new_frames: Vec<GifFrame>, old_frames: Vec<GifFrame>) {}

// fn created_disintegration_transition(new_frames: Vec<GifFrame>, old_frames: Vec<GifFrame>) {}

#[wasm_bindgen]
pub fn process_gif(gif: &[u8]) {
    let mut frames = deinterlace_gif(gif);
    let new_frames_len = frames.len();
    let transition_frames_count = new_frames_len/4;
    let mut current_frames = FRAME_HOLDER.lock().unwrap();
    let current_frames_len = current_frames.len();
    if current_frames_len > transition_frames_count {
        let mut new_frames_end = frames.split_off(transition_frames_count);
        let current_frames_end = current_frames.split_off(current_frames_len - transition_frames_count);
        let mut current_frames_end = create_stutter_transition(frames, current_frames_end);
        current_frames.append(&mut current_frames_end);
        current_frames.append(&mut new_frames_end);
    } else {
        current_frames.append(&mut frames);
    }
}

#[wasm_bindgen]
pub fn get_current_frame_buffer() -> Box<[u8]> {
    let frames = FRAME_HOLDER.lock().unwrap();
    if frames.len() > 0 {
        return frames[0].buffer.clone()
    }
    return Box::new([])
}

#[wasm_bindgen]
pub fn get_current_frame_info() -> Box<[u16]> {
    let frames = FRAME_HOLDER.lock().unwrap();
    if frames.len() > 0 {
        return frames[0].info.clone()
    }
    return Box::new([0, 0, 500])
}

#[wasm_bindgen]
pub fn next_frame() {
    let mut frames = FRAME_HOLDER.lock().unwrap();
    frames.remove(0);
}

#[wasm_bindgen]
pub fn get_frame_count() -> usize {
    let frames = FRAME_HOLDER.lock().unwrap();
    frames.len()
}

