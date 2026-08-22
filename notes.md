# Notes
## Hud
A Head-Up Display was created to provide the following:
- Level indicator
- Timer
- Pause button
- Restart button
- Exit button
The timer was created and updated with datetimes to prevent callback inconsistencies.
The pause button halts and resumes the timer.

## Race condition hud vs game
Race condition was found between hud and game. This was fixed by enclosing the hud code into a class and composing under game. As a consequence, gameState, hud and game are now too tightly coupled -- need to plan out a better separation of responsibility.

# Todo

## Feature
- Exit button
- Restart button
## Fix
- figure out font sizes
- solve board residue - redraw board.