# Week 8

## Exercise 1: Add Next click handler

First thing we'll want to do is add a click handler to the next button inside of
`Controls.init`. This click handler should control the `Controls.next` method.

Inside of the `next` method we'll need to:

*  Get the shape data from `this.shape` (hint use `Shape.get`)
*  Call `this.gameOfLife`'s `next` method with the shape data
*  Set the result of calling `GameOfLife.next`as Shape's data (hint use `Shape.set`)
*  Redraw the shape using `Shape.redraw`


## Exercise 2: Game of Life

For this exercise we'll implement `GameOfLife.next`. This method is where all of
the replication logic exist and is the most important part of the Game of Life.
This exercise has 2 parts. Part 1 is counting the number of neighbor that each
cell has. Part 2 is applying [The Rules](https://bitstorm.org/gameoflife/).


### Part 1: Count neighbors

*  Create a neighbours object for storing neighbor data.
   *  neighbor data should contain 3 fields
      1.  `n` - number of neighbors
      2.  `cell` - An array with the indecies of the cell the first value should
          be the x-index and the second value should be the y-index.
      3.  `populated` - a boolean that's set to true when the cell is already
          populated
   *  The key for neighbor should be a string that's strucuted like
      `'c' + <cell x value> + ',' + <cell y-value>`
*  Construct a for-loop to iterate through every cell in `shape`
   *  `shape` is an array of cells. Each cell is an array with the first element
      being the x-index and the second elemnet being the y-index.
   *  Example: `[[0,0], [2, 3]]` would correlate to a cell at (0, 0) and (2, 3)
*  For every cell in for `shape` add one to the `n` value if the neighbour data
   has already been defined. If not create a new neighbour object with `n` set to 1
*  Once you have the neighbour data defined loop through the shape and set the
   populated fields to true for all the cells with a neighbour entry.

### Part 3: Enforce rules

*  Now that you have all the neighbour data create a new array called `newShape`
*  loop through the neighbors and add cell the cell value on neighbour to `newShape`
   for cells that pass [The Rules](https://bitstorm.org/gameoflife/)
*  return `newShape`


HINT:

You can loop through an object using for-in. Example:

```
let obj = {myKey: 'foo'};
for (let key in obj) {
  let val = obj[key];
}
```

[documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
