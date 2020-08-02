const frames = [];

function getImageSize(imageWidth, imageHeight, canvasWidth, canvasHeight) {
    if (imageWidth > imageHeight) {
        const delta = canvasWidth - imageWidth;
        const newHeight = imageHeight + (delta * imageHeight / imageWidth);
        return [imageWidth + delta, newHeight];
    }
    const delta = canvasHeight - imageHeight;
    const newWidth = imageWidth + (delta * imageWidth / imageHeight)
    return [newWidth, imageHeight + delta];
}

function animate(canvas) {
    let fps = 60;
    const context = canvas.getContext('2d');
    const newCanvas = document.createElement('canvas');
    const newContext = newCanvas.getContext('2d');
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
            const [imageWidth, imageHeight] = getImageSize(frameWidth, frameHeight, canvasWidth, canvasHeight);
            const xPos = (canvasWidth - imageWidth) / 2;
            const yPos = (canvasHeight - imageHeight) / 2;
            context.drawImage(newCanvas, xPos, yPos, imageWidth, imageHeight);
            fps = frame.info[2];
        }
        setTimeout(() => {
            window.requestAnimationFrame(() => loop());
        }, 1000 / fps);
    };
    loop();
}

export function startGif(canvas, gifs) {
    const worker = new Worker('populate-frames.js');
    worker.postMessage(gifs);
    worker.addEventListener('message', (e) => {
        frames.push(e.data);
    });
    animate(canvas);
}

export function makeCanvasFullScreen(canvas) {
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;
    window.addEventListener('resize', () => {
        canvas.width = document.body.clientWidth;
        canvas.height = document.body.clientHeight;
    });
}
