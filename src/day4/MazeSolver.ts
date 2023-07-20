const dir = [
    { x: 0, y: -1 },
    { x: 1, y: 0 },
    { x: 0, y: 1 },
    { x: -1, y: 0 },
]
function step(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], history: Point[]): boolean {

    if (curr.x == end.x && curr.y == end.y) {
        history.push(curr);
        console.log("im the end");
        return true;
    }

    if (curr.x < 0 || curr.x >= maze[0].length || 
        curr.y < 0 || curr.y >= maze.length) {
        return false;
    }

    if (maze[curr.y][curr.x] === wall) {
        return false;
    }

    if (seen[curr.y][curr.x]) {
        return false;
    }
    seen[curr.y][curr.x] = true;

    for (let i = 0; i < dir.length; i++) {
        let { x, y } = dir[i];
        if (step(maze, wall, { x: curr.x + x, y: curr.y + y }, end, seen, history)) {
            history.push(curr);
            return true;
        }
    }

    return false;
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    let history: Point[] = [];
    let seen: boolean[][] = [];
    for (let i = 0; i < maze.length; i++) {
        seen[i] = new Array(maze[0].length).fill(false, 0, maze[0].length);
    }
    step(maze, wall, start, end, seen, history);

    return history;
}
