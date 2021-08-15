function mazeRunner(maze, directions) {

    let curX, curY;

    for (let i = 0; i < maze.length; i++) {
        for (let j = 0; j < maze[i].length; j++) {
            if (maze[i][j] == 2) {
                curX = j;
                curY = i;
            }
        }
    }

    for (let i = 0; i < directions.length; i++) {

        if (directions[i] == 'N') curY--;
        if (directions[i] == 'S') curY++;
        if (directions[i] == 'W') curX--;
        if (directions[i] == 'E') curX++;

        if (!maze[curY]) return 'Dead';
        if (maze[curY][curX] == 3) return 'Finish';
        if (maze[curY][curX] == undefined || maze[curY][curX] == 1) return 'Dead';

    }

    return "Lost";
}
const MAZE = [[1, 1, 1, 1, 1, 1, 1],
[1, 0, 0, 0, 0, 0, 3],
[1, 0, 1, 0, 1, 0, 1],
[0, 0, 1, 0, 0, 0, 1],
[1, 0, 1, 0, 1, 0, 1],
[1, 0, 0, 0, 0, 0, 1],
[1, 2, 1, 0, 1, 0, 1]];

const DIRECTION = ["N", "N", "N", "N", "N", "E", "E", "E", "E", "E"];

const result = mazeRunner(MAZE, DIRECTION);
console.log(result);