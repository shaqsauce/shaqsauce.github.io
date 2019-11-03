# Week 5

## Exercise 1: Implement `drawShapes`

In [script.js](/music-animator/script.js) there's an empty method called `drawShapes`.
In this method we'll want to call our draw functions from Exercise 1 with randomly
generated values. To create random values there are three methods you'll need:

*  `generateRandomValue(min, max)` 
*  `generateRandomColor()`
*  `generateRandomPoint()`

## Exercise 2: Add animations when the music plays

In [script.js](/music-animator/script.js) there's a callback function passed
into `requestAudio`. We want to start animations when the music starts playing.
1.  Instantiate `MyVisualizer` and call `startVisual`.
2.  In `updateVisual` we'll want to call our `drawShapes` function.

## Exercise 3: Animate to **the beat** of the music

In [script.js](/music-animator/script.js) MyVisualizer class has a method called
`updateVisual` which changes **when the visuals should be drawn**.
*  In `updateVisual`, we'll want to call our `drawShapes` function **when the
    audioEl's `currentTime` is greater or equal to the peak's `timeOfPeak` (see
    NOTE below for more details)

Using this information you should be able to animate your shapes to
the beat of the music. This is meant to be a challenge so if you found this confusing...
Then use the chrome debugger and your teammates to figure out what's going on.

NOTE: There's a field on `MyVisualizer` named `peaks` and it contain an array 
of `Peak`. Peak has a field called `timeOfPeak`. `audioEl` has a field called
`currentTime`. 
