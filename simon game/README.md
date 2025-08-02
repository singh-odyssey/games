# Simon Game 🔴🔵🟢🟡

A classic memory game where you must repeat an increasingly complex sequence of colored button presses.

## How to Play

1. Open `index.html` in your web browser
2. Press any key or touch the screen to start
3. Watch the sequence of colored buttons that light up
4. Repeat the sequence by clicking the buttons in the same order
5. Each level adds one more step to the sequence
6. Continue as long as you can remember the pattern!

## Game Rules

- **Starting**: Press any key or touch to begin
- **Memory Challenge**: Simon shows a sequence, you repeat it
- **Progressive Difficulty**: Each level adds one more color to the sequence
- **Time Limit**: You have 5 seconds to repeat each signal
- **Game Over**: Incorrect sequence or timeout ends the game
- **Restart**: Press any key after game over to play again

## Features

- **Progressive Levels**: Unlimited levels with increasing difficulty
- **Visual Feedback**: Buttons light up and animate when pressed
- **Audio Cues**: Each color has a unique sound
- **Touch Support**: Works on both desktop and mobile devices
- **Game Over Effects**: Visual and audio feedback when you lose
- **Level Counter**: Shows your current level progress

## Controls

- **Desktop**: Use keyboard (any key to start) + mouse clicks
- **Mobile**: Touch to start and tap buttons

## Color Buttons

- 🔴 **Red** - Top right
- 🔵 **Blue** - Bottom right  
- 🟢 **Green** - Top left
- 🟡 **Yellow** - Bottom left

## Files Structure

- `index.html` - Game interface and instructions
- `game.js` - Main game logic and event handling
- `styles.css` - Visual styling and animations
- `sounds/` - Audio files for each color
  - `red.mp3`, `blue.mp3`, `green.mp3`, `yellow.mp3`
  - `wrong.mp3` - Game over sound

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- jQuery
- Web Audio API
- Google Fonts (Press Start 2P)

## Game Logic

The game uses arrays to track:
- `gamePattern[]` - Simon's sequence
- `userClickedPattern[]` - Player's input
- Pattern matching and level progression

## How to Run

Open the `index.html` file in any modern web browser and test your memory skills!

---

