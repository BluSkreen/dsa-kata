type Node<T> = {
    value: T,
    prev?: Node<T>,
    next?: Node<T>,
}

export default class Stack<T> {
    public length: number;
    
    private head?: Node<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        this.length++;
        let node = { value: item } as Node<T>;
        if (!this.head) {
            this.head = node;
            return;
        }
        this.head.prev = node;
        this.head.prev.next = this.head;
        this.head = this.head.prev;
    }
    
    pop(): T | undefined {
        if (!this.head) {
            return undefined;
        }
        this.length--;
        let head = this.head;
        //head.next = undefined; // free
        this.head = this.head.next;
        head.next = undefined;
        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
