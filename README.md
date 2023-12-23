# Conway's Game of Life

Conway's Game of Life is a cellular automaton devised by the British mathematician John Horton Conway. The game is a zero-player game, meaning that its evolution is determined by its initial state, with no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves.

## Overview

This project is an implementation of Conway's Game of Life using HTML5 canvas and JavaScript. It creates a grid of cells, each with its own state, and evolves the state of each cell based on a set of rules.

## Rules

The rules for the evolution of each cell are as follows:

1. Any live cell with fewer than two live neighbors dies, as if by underpopulation.
2. Any live cell with two or three live neighbors lives on to the next generation.
3. Any live cell with more than three live neighbors dies, as if by overpopulation.
4. Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

## Demo

Check out the live demo [here](https://mohammedgayaz.github.io/Game-of-Life/).

## Usage

1. Open the `index.html` file in a web browser.
2. The canvas will display a grid of cells, where each cell is initially in a random alive or dead state.
3. The game will automatically evolve based on the rules of Conway's Game of Life.
4. You can customize the grid dimensions and initial state by modifying the script in `script.js`.

## Code Structure

- `index.html`: The HTML file defining the structure of the webpage.
- `script.js`: The JavaScript file containing the logic for the Game of Life, including the `Cell` class and the animation loop.

## References

- [Conway's Game of Life on Wikipedia](https://en.wikipedia.org/wiki/Conway's_Game_of_Life)
- [Create Game of Life with React in One Hour](https://www.freecodecamp.org/news/create-gameoflife-with-react-in-one-hour-8e686a410174)
- [Conway's Game of Life on a Canvas](https://dev.to/thormeier/it-s-alive-conway-s-game-of-life-on-a-canvas-25ja)
