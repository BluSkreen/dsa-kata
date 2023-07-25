export default class MinHeap {
    public length: number;

    private heap: number[];
    

    constructor() {
        this.length = 0;
        this.heap = [];
    }

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
