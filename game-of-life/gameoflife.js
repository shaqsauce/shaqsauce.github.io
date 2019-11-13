class GameOfLife{
  constructor() {
    next(shape);

  }
}
class Canvas{
  constructor(container){
    let canvasElement = document.creatElement('canvas');
    this.obj = canvasElement;
    this.pixelWidth = 803;
    this.pixelHeight = 506;
    container.appendChild(canvasElement);
    this.ctx = this.obj.getContext("2d");
    this.setGridSize(11);
    draw();
    click(fn);
    getDimension();
    getGridSize();
    setGridSize(gridSize);
    }
}
class Shape {
  constructor(canvas){
    this.canvas = canvas;
    this.current = [];
    this.collection = {};
    get();
    set(shape);
    copy(shape);
    redraw();
    center();
    offset(dx, dy);
    toggle(cell);

  }
}
class Controls {
  controls(GameOfLife, Canvas, Shape){
    this.gameoflife = GameOfLife;
    this.canvas = Canvas;
    this.shape = Shape;
    this.started = false;
    this.timer = null;
    this.generate = 0;
    init(shape);
    setGeneration(gen);
    animate();
    next();
  }
}
let canvasDiv = document.getElementById("canvas-div")
var canvas = new Canvas(canvasDiv)
var shape = new Shape(canvas)
var gameoflife = new GameOfLife(canvas)
var controls = new Controls(canvas, shape, gameoflife)


// //eate an instance of Canvas, which takes in the canvasElement (from Step 1)
// Create an instance of Shape, which takes in the Canvas instance created in Step 2
// Create an instance of GameOfLife, which takes in the Canvas instance created in Step 2
// Create an instance of Controls, which takes in the Canvas instance (Step 2), Shape instance (Step 3), and GameOfLife instance (Step 4)
