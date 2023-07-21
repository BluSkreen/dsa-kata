function qs(arr: number[], lo: number, hi: number): void {
    if (lo >= hi || lo < 0 ) {
        return;
    }

    // partition to get pitvot index
    let p = partition(arr, lo, hi);

    // sort each side of the pivot
    // left
    qs(arr, lo, p - 1);
    // right
    qs(arr, p + 1, hi);
}

function partition(arr: number[], lo: number, hi: number): number {
    let index = lo;
    let pivot = index - 1;

    while (index < hi) {
        if (arr[index] < arr[hi]) {
            pivot++;
            let t = arr[index];
            arr[index] = arr[pivot];
            arr[pivot] = t;
        }
        index++;
    }
    pivot++;
    let t = arr[hi];
    arr[hi] = arr[pivot];
    arr[pivot] = t;

    return pivot;

}

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
    console.log(arr);
}
