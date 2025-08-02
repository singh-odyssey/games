# Drum Kit 🥁

An interactive virtual drum kit that you can play using your keyboard or by clicking on the drum buttons.

## How to Play

1. Open `index.html` in your web browser
2. Either click on the drum buttons or press the corresponding keys on your keyboard
3. Each button/key produces a different drum sound with visual feedback

## Controls

| Key | Sound |
|-----|--------|
| **W** | Tom 1 |
| **A** | Kick Bass |
| **S** | Tom 2 |
| **D** | Snare |
| **J** | Tom 3 |
| **K** | Crash |
| **L** | Tom 4 |

## Features

- **Dual Input**: Play using mouse clicks or keyboard presses
- **Visual Feedback**: Buttons show pressed animation when activated
- **Authentic Sounds**: High-quality drum sound samples
- **Responsive Design**: Works on both desktop and mobile devices
- **Real-time Audio**: Instant sound playback with no delay

## Technical Details

The drum kit uses:
- **Event Listeners**: For both click and keydown events
- **Audio API**: For playing sound files
- **CSS Animations**: For button press effects
- **Switch Statements**: For mapping keys to sounds

## Files Structure

- `index.html` - Main interface with drum buttons
- `index.js` - Game logic, event handling, and audio playback
- `styles.css` - Visual styling and animations
- `sounds/` - Audio files for each drum sound
  - `tom-1.mp3`, `tom-2.mp3`, `tom-3.mp3`, `tom-4.mp3`
  - `kick-bass.mp3`
  - `snare.mp3`
  - `crash.mp3`
- `images/` - Visual assets for drum kit design

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- Web Audio API
- Google Fonts (Arvo)

## How to Run

Open the `index.html` file in any modern web browser and start drumming!

