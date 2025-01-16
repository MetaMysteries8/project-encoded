music.play(music.createSong(assets.song`MenuLoop`), music.PlaybackMode.LoopingInBackground)
scene.setBackgroundColor(8)
let mySprite = sprites.create(assets.image`EncodedLogo`, SpriteKind.Player)
mySprite.scale = 4
story.printText("Project Encoded Coming Soon... Keep an eye out for updates!", 75, 0, 15, 1, story.TextSpeed.VerySlow)
