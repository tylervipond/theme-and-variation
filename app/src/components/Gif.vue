<template>
  <canvas :height="height" :width="width" ref="canvas"></canvas>
</template>
<script>
let frames = [];

function getImageSize(imageWidth, imageHeight, canvasWidth, canvasHeight) {
  if (imageWidth > imageHeight) {
    const delta = canvasWidth - imageWidth;
    const newHeight = imageHeight + (delta * imageHeight) / imageWidth;
    return [imageWidth + delta, newHeight];
  }
  const delta = canvasHeight - imageHeight;
  const newWidth = imageWidth + (delta * imageWidth) / imageHeight;
  return [newWidth, imageHeight + delta];
}

function animate(canvas) {
  let fps = 60;
  const context = canvas.getContext("2d");
  const newCanvas = document.createElement("canvas");
  const newContext = newCanvas.getContext("2d");
  let complete = false;
  const endLoop = () => complete = true;
  const loop = () => {
    if (frames.length > 0) {
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const frame = frames.shift();
      const clampedData = Uint8ClampedArray.from(frame.buffer);
      const frameWidth = frame.info[0];
      const frameHeight = frame.info[1];
      const imageData = new ImageData(clampedData, frameWidth, frameHeight);
      newCanvas.width = frameWidth;
      newCanvas.height = frameHeight;
      newContext.putImageData(imageData, 0, 0);
      const [imageWidth, imageHeight] = getImageSize(
        frameWidth,
        frameHeight,
        canvasWidth,
        canvasHeight
      );
      const xPos = (canvasWidth - imageWidth) / 2;
      const yPos = (canvasHeight - imageHeight) / 2;
      context.drawImage(newCanvas, xPos, yPos, imageWidth, imageHeight);
      fps = frame.info[2];
    }
    setTimeout(() => {
      if (!complete) {
        window.requestAnimationFrame(() => loop());
      }
    }, 1000 / fps);
  };
  loop();
  return endLoop;
}

export default {
  props: {
    urls: Array,
  },
  data() {
    return {
      height: window.innerHeight,
      width: window.innerWidth,
      worker: null,
      completeAnimationCallback: null
    };
  },
  mounted() {
    window.addEventListener("resize", this.updateSize, 250);
    this.worker = new Worker("populate-frames.js");
    this.worker.postMessage([...this.urls]);
    this.worker.addEventListener("message", (e) => {
      frames.push(e.data);
    });
    this.completeAnimationCallback = animate(this.$refs.canvas);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateSize);
    this.worker.terminate();
    this.completeAnimationCallback();
    frames = [];
  },
  methods: {
    updateSize() {
      this.height = window.innerHeight;
      this.width = window.innerWidth;
    },
  },
};
</script>