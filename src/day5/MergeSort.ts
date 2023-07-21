function mergeSort(arr: number[], left: number, right: number): void {
    if (left >= right) {
        return;
    }
    let mid = left + Math.floor((right - left)/2);
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    merge(arr, left, mid, right);
}

function merge(arr: number[], left: number, mid: number, right: number): void {
    // temp subarrays
    
    let tempL = arr.slice(left, mid + 1);
    let tempR = arr.slice(mid + 1, right + 1);

    console.log(`${left}  ${right}`);
    console.log(tempL);
    console.log(tempR);

    // campare and replace items in array
    let i = left, l = 0, r = 0;
    while (l < tempL.length && r < tempR.length) {
        if (tempL[l] <= tempR[r]) {
            arr[i] = tempL[l];
            l++;
        } else {
            arr[i] = tempR[r];
            r++;
        }
        i++;
    }
    // left overs from arrays
    while (l < tempL.length) {
        arr[i] = tempL[l];
        i++;
        l++;
    }
    while (r < tempR.length) {
        arr[i] = tempR[r];
        i++;
        r++;
    }
}

export default function merge_sort(arr: number[]): void {
    mergeSort(arr, 0, arr.length);
}


/* 
    // campare and replace items in array
    let i = 0, l = 0, r = 0;
    while (i < right - left) {
        if (tempL[l] <= tempR[r]) {
            arr[left + i] = tempL[l];
            l++;
        } else {
            arr[left + i] = tempR[r];
            r++;
        }
        i++;

        // left overs from arrays
        if (l == tempL.length) {
            for (r; r < tempR.length; r++, i++) {
                arr[left + i] = tempR[r];
            }
            break;
        } else if (r == tempR.length) {
            for (l; l < tempL.length; l++, i++) {
                arr[left + i] = tempL[l];
            }
            break;
        }
    }
*/
