input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(1, 6))
})
input.onButtonPressed(Button.AB, function () {
    if (Math.randomBoolean()) {
        basic.showString("poep")
    } else {
        basic.showIcon(IconNames.Heart)
    }
})
loops.everyInterval(1000, function () {
    basic.clearScreen()
})
