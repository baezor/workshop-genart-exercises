const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 2048, 2048 ]
};

const sketch = () => {
  const createGrid = () => {
    const points = [];
    const count  = 5;
    
  }

  return ({ context, width, height }) => {
    
    // Drawing the main canvas.
    context.fillStyle = '#333';
    context.fillRect(0, 0, width, height);

    

  };
};

canvasSketch(sketch, settings);
