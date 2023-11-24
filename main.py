def on_gesture_shake():
    basic.show_number(randint(1, 6))
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_button_pressed_ab():
    if Math.random_boolean():
        basic.show_string("poep")
    else:
        basic.show_icon(IconNames.HEART)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_every_interval():
    basic.clear_screen()
loops.every_interval(10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, on_every_interval)
