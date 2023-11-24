let _1 = 0
let _2 = 0
input.onButtonPressed(Button.A, function () {
    _1 = randint(1, 6)
    _2 = randint(1, 6)
    basic.showNumber(_1 + _2)
})
input.onButtonPressed(Button.AB, function () {
    if (Math.randomBoolean()) {
        basic.showString("poep")
    } else {
        basic.showIcon(IconNames.Heart)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(randint(1, 6))
})
