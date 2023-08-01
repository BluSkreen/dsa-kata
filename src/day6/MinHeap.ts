export default class MinHeap {
    public length: number;

    private heap: number[];
    

    constructor() {
        this.length = 0;
        this.heap = [];
    }

    insert(value: number): void {
        this.heap[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }

    delete(): number {
        if (this.length === 0) {
            return -1;
        }
        
        const out = this.heap[0];
        this.length--;
        if (this.length === 0) {
            const out = this.heap[0];
            this.heap = [];
            return out;
        }

        this.heap[0] = this.heap[this.length];
        this.heapifyDown(0);
        return out;
    }

    /*
    insert(value: number): void {
        this.length++;
        this.heap.push(value);
        let curr = this.length - 1;
        let parent = this.parent(curr);

        while (value < this.heap[parent]) {
            const t = this.heap[parent];
            this.heap[parent] = value;
            this.heap[curr] = t;
            curr = this.parent(curr);
            parent = this.parent(parent);
        }
    }

    delete(): number {
        this.length--;
        let swap = this.heap.pop();
        if (this.length == 0 && swap) {
            return swap;
        }
        if (!swap) {
            return -1;
        }
        const value = this.heap[0];
        this.heap[0] = swap;
        let idx = 0;
        if(swap) {
            this.heap[0] = swap;
        }
        while (idx < this.length) {
            let left = this.leftChild(idx);
            let right = this.rightChild(idx);
            if (this.heap[right] < this.heap[left] && 
                swap > this.heap[right]) {
                this.heap[idx] = this.heap[right];
                this.heap[right] = swap;
                idx = right;
                continue;
            }
            if (swap > this.heap[left]) {
                this.heap[idx] = this.heap[left];
                this.heap[left] = swap;
                idx = left;
                continue;
            }
            break;
        }

        return value;
    }
    */

    private heapifyDown(idx: number): void {
        const leftIdx = this.leftChild(idx);
        const rightIdx = this.rightChild(idx);

        if (idx >= this.length || leftIdx >= this.length) {
            return;
        }

        const leftValue = this.heap[leftIdx];
        const rightValue = this.heap[rightIdx];
        const value = this.heap[idx];

        if (leftValue > rightValue && value > rightValue) {
            this.heap[rightIdx] = this.heap[idx];
            this.heap[idx] = rightValue;
            this.heapifyDown(rightIdx);
        } else if (value > leftValue) {
            this.heap[leftIdx] = this.heap[idx];
            this.heap[idx] = leftValue;
            this.heapifyDown(leftIdx);
        }
    }

    private heapifyUp(idx: number): void { 
       if (idx === 0) {
           return;
       }

       const p = this.parent(idx);
       const parentV = this.heap[p];
       const v = this.heap[idx];

       if (parentV > v) {
           this.heap[p] = v;
           this.heap[idx] = parentV;
           this.heapifyUp(p);
       }
    }

    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }

    private leftChild(idx: number): number {
        return idx * 2 + 1;
    }

    private rightChild(idx: number): number {
        return idx * 2 + 2;
    }
}
