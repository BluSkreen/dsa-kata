
function qs(arr: number[], lo: number, hi: number): void {
    if (lo >= hi) {
        return;
    }
    
    const pivotIdx = partition(arr, lo, hi);

    qs(arr, lo, pivotIdx - 1);
    qs(arr, pivotIdx + 1, hi);
}

function partition(arr: number[], lo: number, hi: number): number {
    const pivot = arr[hi];

    let idx = lo - 1;

    for (let i = lo; i < hi; ++i) {
        if (arr[i] <= pivot) {
            idx++;
            const tmp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = tmp;
        }
    }

    idx++;
    arr[hi] = arr[idx];
    arr[idx] = pivot;

    return idx;
}

/* function partition(arr: number[], lo: number, hi: number): number {
    const mid = (Math.ceil((lo + hi) / 2));
    console.log(`${lo}  ${hi}`);
    console.log(arr);
    console.log(mid);
    const pivot = arr[mid];
    console.log(pivot);

    let past = false;
    let idx = lo - 1;

    for (let i = lo; i < hi + 1; i++) {
        if (arr[i] <= pivot && !(i === mid)) {
            idx++;
            if (idx === mid){
                idx++;
                past = true;
            }
            const tmp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = tmp;
        }
    }

    if (!past) {
        idx++;
    }
    arr[mid] = arr[idx];
    arr[idx] = pivot;
    console.log(arr);
    console.log(idx);

    return idx;
}*/

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}
