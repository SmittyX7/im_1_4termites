// When the user shakes the micro:bit, a frown face appears.
input.onGesture(Gesture.Shake, function () {
	
})
// When the micro:bit isn't shaking, a smiley face appears.
basic.forever(function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
