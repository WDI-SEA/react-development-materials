# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Lab: Tic-Tac-Toe

Let's practice from an existing codebase.

This repository contains the code for existing tic-tac-toe game programming in JavaScript using React. You can see it running [here](https://susiremondi.github.io/tictacReact/).

You'll be adding a feature to this game.

This tic-tac-toe game currently:

* Lets you play tic-tac-toe.
* Indicates when one player has won the game.
* Stores the history of moves made throughout the game.

### Setting Up

* Fork and clone this repository.

* You can run this with `npm install` and then `npm start` from inside the directory.

* The code that's running is in the `src` directory — that's what you need to change!

### Task

Your job is to allow players to jump back in time to see older versions of the game board.

Each move in the move list should be a link to jump back to that move. If you click any move link, the board should immediately update to show what the game looked like at that time.

Also, update `handleClick` so that, when you go back in time, you can then click in the board to create a new entry.

**You can see the desired solution [here](https://susiremondi.github.io/tictacSolution/).**

Note that the moves past the one you jump to do not need to disappear off the list. That is to say, from a board that looks like this:

![board](assets/board.png)

Clicking on `Move #1` causes the board to jump back in time to Move #1, but the move list has not changed.

![board 2](assets/board2.png)

However, from there, the game can be played and new moves can then be overwritten in its history.

![board 3](assets/board3.png)

Try it yourself in the solution link above.


### Hints

- In the code, a "move" is also referred to as a "step."

- In this repository, there's a file called `hints.rtf` that includes a breakdown (in plain English) of what needs to be done.


## Solution

Solution code is provided in the `solution` branch of this repository. Please give this your best go before looking! A change list is also provided with a brief explanation.

This project was based off of [this Facebook tutorial](https://facebook.github.io/react/tutorial/tutorial.html
). Click inside the link to see a thorough step-by-step breakdown of building out this tic-tac-toe app. Notice that the tutorial doesn't split the components into different files.

**Note:** The walk-through for this question is also included in this tutorial (near the end), so don't look until you've given it a thorough try!
