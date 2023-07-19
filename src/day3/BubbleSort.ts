export default function bubble_sort(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; ++j) {
            if (arr[j] < arr[j - 1]) {
                let t = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = t;
            }
        }
    }
}
