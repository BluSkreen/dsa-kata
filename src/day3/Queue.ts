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

    enqueue(item: T): void {
        let node = { value: item } as Node<T>;
        this.length++;
        if (!this.tail) {
            this.tail = this.head = node;
            return;
        }
        this.tail.next = node;
        this.tail = this.tail.next;
    }
    deque(): T | undefined {
        if (this.head) {
            this.length--;
            const head = this.head;
            this.head = this.head.next;

            // free 
            head.next = undefined;

            if (this.length === 0) {
                this.tail = undefined;
            }

            return head.value;
        } 
        return undefined;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
