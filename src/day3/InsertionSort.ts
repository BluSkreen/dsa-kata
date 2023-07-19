export default function insertion_sort(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; ++j) {
            if (arr[j] < arr[i]) {
                let t = arr[i];
                arr[i] = arr[j];
                arr[j] = t;
            }
        }
    }
}
