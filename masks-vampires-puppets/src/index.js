import { startGif, makeCanvasFullScreen } from './main';

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('fumbler');
  makeCanvasFullScreen(canvas);
  startGif(canvas, [
    'masks/mask1.gif',
    'masks/mask3.gif',
    'masks/mask4.gif',
    'masks/mask5.gif',
    'masks/mask6.gif',
    'masks/mask7.gif',
    'masks/mask8.gif',
    'masks/mask9.gif',
    'masks/puppet1.gif',
    'masks/puppet2.gif',
    'masks/puppet3.gif',
    'masks/puppet4.gif',
    'masks/vampire1.gif',
    'masks/vampire2.gif',
    'masks/vampire3.gif',
    'masks/vampire4.gif',
    'masks/vampire6.gif',
  ]);
});