# Tic Tac Toe ⭕❌

A classic two-player Tic Tac Toe game built with HTML, CSS, and JavaScript.

## How to Play

1. Open `index.html` in your web browser
2. Player 1 starts with "O" and Player 2 plays with "X"
3. Players take turns clicking on empty squares
4. First player to get 3 in a row (horizontally, vertically, or diagonally) wins!
5. If all squares are filled without a winner, it's a draw

## Game Rules

- **Player 1**: Uses "O" symbol
- **Player 2**: Uses "X" symbol
- **Turn-based**: Players alternate turns automatically
- **Win Conditions**: 3 in a row in any direction
- **Draw**: All squares filled with no winner
- **Auto Reset**: Game resets after win/draw

## Features

- **Two Player Local Multiplayer**: Play against a friend
- **Automatic Turn Management**: Game tracks whose turn it is
- **Win Detection**: Instantly detects winning combinations
- **Draw Detection**: Recognizes when the board is full
- **Visual Feedback**: Clear display of X's and O's
- **Reset Functionality**: Reset button to start a new game
- **Responsive Design**: Works on desktop and mobile

## Winning Patterns

The game checks for wins in 8 possible combinations:
- **Rows**: Top, Middle, Bottom
- **Columns**: Left, Middle, Right  
- **Diagonals**: Top-left to bottom-right, Top-right to bottom-left

## Game Grid Layout

```
[1] [2] [3]
[4] [5] [6]
[7] [8] [9]
```

## Files Structure

- `index.html` - Game board and user interface
- `script.js` - Game logic, win detection, and event handling
- `styles.css` - Visual styling and responsive layout

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- CSS Grid/Flexbox for layout

## Game Logic Features

- **Turn Management**: Boolean flag tracks current player
- **Win Pattern Array**: Predefined winning combinations
- **Dynamic Checking**: Real-time win/draw detection
- **Button Disabling**: Prevents clicking on used squares
- **Auto Reset**: Automatic game restart after completion

## How to Run

Open the `index.html` file in any modern web browser and challenge a friend!

---
