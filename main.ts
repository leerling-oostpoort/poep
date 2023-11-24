let _1 = 0
let _2 = 0
input.onButtonPressed(Button.A, function () {
    _1 = randint(1, 6)
    _2 = randint(1, 6)
    basic.clearScreen()
    basic.showNumber(_1 + _2)
})
input.onButtonPressed(Button.AB, function () {
    if (Math.randomBoolean()) {
        basic.showString("poep")
    } else {
        basic.showIcon(IconNames.Heart)
        music.play(music.stringPlayable("B F G - E G A C5 ", 135), music.PlaybackMode.UntilDone)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(randint(1, 6))
})
