export default function two_crystal_balls(breaks: boolean[]): number {
    let index = 0;
    let sqrt = Math.sqrt(breaks.length);
    while (index < breaks.length) {
        if (breaks[index] === true) {
            index -= sqrt;
            break;
        }
        index += sqrt;
    }
    index -= sqrt;
    while (index < breaks.length) {
        index++;
        if (breaks[index] === true) {
            return index;
        }
    }
    return -1;
}
