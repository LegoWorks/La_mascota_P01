music.playTone(262, music.beat(BeatFraction.Whole))
basic.forever(function () {
    basic.showIcon(IconNames.Happy)
    basic.pause(2000)
    basic.showLeds(`
        # # # # #
        # . # . #
        # # # # #
        # . . . #
        # . # . #
        `)
})
