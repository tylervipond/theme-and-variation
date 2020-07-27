function populateFrames(wasm) {
  setTimeout(() => populateFrames(wasm), 100)
  const buffer = wasm.get_current_frame_buffer();
  if (buffer.length) {
    const info = wasm.get_current_frame_info();
    const frame = {
      buffer,
      info
    };
    self.postMessage(frame);
    wasm.next_frame();
  }
}

async function loadGif(wasm, urls) {
  setTimeout(() => { loadGif(wasm, urls) }, 1000);
  if (wasm.get_frame_count() < 500) {
    const url = urls[Math.floor(Math.random() * urls.length)]
    const response = await fetch(url);
    const gifData = await response.arrayBuffer();
    if (gifData) {
      wasm.process_gif(new Uint8Array(gifData));
    }
  }
}

onmessage = async function (e) {
  const wasm = await import('./wasm');
  loadGif(wasm.default, e.data);
  populateFrames(wasm.default);
}