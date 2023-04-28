type Node<T> = {
    value: T,
    next?: Node<T>,
}
export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    // push to back
    enqueue(item: T): void {
        const node = {value: item} as Node<T>;

        this.length++;

        // if 0 nodes in queue 
        if(!this.tail) {
            this.tail = this.head = node;
        }

        this.tail.next = node;
        this.tail = node;
    }

    // pop from front
    deque(): T | undefined {
        if(!this.head) {
            return undefined;
        }

        this.length--;

        const head = this.head;
        this.head = this.head.next;

        // free
        head.next = undefined;

        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
