# Week 7

## Exercise 0

This part was missed last week. In`Cavas`'s constructor set `canvasElement`'s
`width` and `height` properties to `this.pixelWidth` and `this.pixelHeight`
respectively.

## Exercise 1: Draw Canvas grid

First thing we'll want to do is draw the canvas grid so that it looks like this:

![picture of canvas grid](/exercises/canvas_grid.png)

To do this we'll need to make changes to `Canvas`'s `draw(cels)` function. In
`draw(cells)` we'll set `this.ctx`'s `lineWidth` property to 1. This will set
the width of your lines to 1 pixel. Will then want to set the `strokeStyle`
property to '#999' This will give the stroke style a light gray color.

Then from `this.cellSize` to `this.pixelHeight` with a step size of `this.cellSize`
we'll want to draw vertical lines in `this.ctx` from `(index + 0.5, 0)` to
`(index + 0.5, this.pixelHeight).` To do this you'll need to use 4 methods on
`this.ctx`:

* `beginPath()` - starts the path [documentation](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/beginPath)
* `lineTo(x, y)` - draws a line to a point [documentation](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineTo)
* `moveTo(x, y)` - moves to a start point [documentation](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/moveTo)
* `stroke()` - finishes a line [documentation](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/stroke)

Now once you've draw the vertical lines, you'll need to do the same thing for
the horizontal.

HINT: horizontal lines are vertical lines where x and y have been swapped.


## Exercise 2: Click handler

In `Controls.init(shapes)` add:

```
this.canvas.click((event) => {
});
```

In `Canvas`'s click function we'll need to add a click handler, that calls a
function with a clickEvent object that has a `cellX` propety and a `cellY`
property with the x and y cell index of the click event. To add a click handler
we'll need to call `addEventListener` on `this.obj`. (addEventListern)[https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener]
we'll want to listen for `'click'`. Click event return a object with 2 important
fields `clientX` and `clientY` these are the X and Y cordinates of the click. The
x and y cordinates are relative to you're browser window and not the game of life
grid. So we'll need that to determine the x and y cell indexes. There's going to
be a couple of otehr important fields `getBoudningClientRect()` will return an
object with a `left` and `top` property that represent the x cordinate and y cordinate
of the left and top of the object. The final thing you'll need is `Math.floor`
will truncate to the next integer value.

Once you've calculated your values call the `fn` function with clickEvent as the
only argument.

To test your solution use `console.log` or the Chrome debugger.

HINT: This part is a visual math problem so try getting some paper and drawing it
out.



## Exercise 3: Yellow squares

Inside the click function your call back function in `Control.init` call
toggle with an array where the first value is `event.cellX` and the second value
is `event.cellY`.

`toggle` should push `cell` onto `this.current` by calling `this.current.push(cell)`

`toggle` should then call it's `redraw()` method.

In `Toggle.rdeaw` we'll want to call `this.canvas.draw(this.current)`.

At the bottom of `Canvas.draw` we'll need to set the `fillStyle` of our context
object to `'yellow'`. Then use `fillRect` for every cell in cells to draw a square
given the cells first and second index values, which represent x and y.
[fillRect documentation](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillRect)


## Challenge

If you can add yellow square to the board by pushing them on to `this.current`
how would you remove yellow squares? Use the answer to this question to implement
finish `toggle`.
