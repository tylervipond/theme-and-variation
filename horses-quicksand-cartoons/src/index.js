import { startGif, makeCanvasFullScreen } from './main';

function run(canvas) {
  makeCanvasFullScreen(canvas);
  startGif(canvas, [
    'gifs/horse01.gif',
    'gifs/horse02.gif',
    'gifs/horse03.gif',
    'gifs/horse04.gif',
    'gifs/horse05.gif',
    'gifs/quicksand01.gif',
    'gifs/quicksand02.gif',
    'gifs/quicksand03.gif',
    'gifs/quicksand04.gif',
    'gifs/quicksand05.gif',
    'gifs/quicksand06.gif',
    'gifs/sleep01.gif',
    'gifs/sleep02.gif',
    'gifs/sleep03.gif',
    'gifs/sleep04.gif',
    'gifs/sleep05.gif',
  ]);
}

document.addEventListener('DOMContentLoaded', () => {
  const introWrapper = document.getElementById('intro-content');
  const okButton = document.getElementById('ok-button');
  const canvas = document.getElementById('fumbler');
  okButton.addEventListener('click', () => {
    introWrapper.style.display = 'none';
    canvas.style.display = 'block';
    run(canvas)
  })
});
