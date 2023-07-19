type Node<T> = {
    value: T,
    next?: Node<T>,
}

export default class SinglyLinkedList<T> {
    public length: number;

    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    prepend(item: T): void {
        this.length++;
        let node = { value: item } as Node<T>;
        if (!this.head) {
            this.head = this.tail = node;
            return;
        }
        let head = this.head;
        this.head = node;
        node.next = head;
    }
    insertAt(item: T, idx: number): void {
        let curr = this.head;
        let node = { value: item } as Node<T>;
        if (!curr && idx === 0) {
            this.head = this.tail = node;
        } else if (idx === 0) {
            node.next = this.head;
            this.head = node;
            // omg singlylinked suuuuuuuucks... moving on
            return;
        }
        for (let i = 0; i < idx - 1 && curr; i++) {
            curr = curr.next;
        }

    }
    append(item: T): void {
        this.length++;
        let node = { value: item } as Node<T>;
        if (!this.tail) {
            this.head = this.tail = node;
            return;
        }
        this.tail.next = node;
        this.tail = this.tail.next;
    }
    remove(item: T): T | undefined {
        this.length--;
        let node = this.head;
        let out: Node<T>;
        // check head
        if (node && node.value === item) {
            this.removeHead();
            node.next = undefined;
            return node.value;
        }
        for (let i = 0; i < this.length && node && node.next; i++) {
            if (node.next.value === item) {
                out = node.next;
                node.next = out.next;
                out.next = undefined;
                return out.value;
            }
            node = node.next;
        }
        return undefined;
    }
    get(idx: number): T | undefined {
        let node = this.head;
        for (let i = 0; i < idx && node; i++) {
            node = node.next;
        }
        if (!node) {
            return undefined;
        }
        return node.value;
    }
    removeAt(idx: number): T | undefined {
        this.length--;
        let node = this.head;
        let out: Node<T>;
        if (node && idx === 0) {
            this.removeHead();
            return node.value;
        }
        for (let i = 0; i < idx - 1 && node; i++) {
            node = node.next;
        }
        if (node && node.next && node.next.next) {
            out = node.next;
            node.next = node.next.next;
            out.next = undefined;
            return out.value;
        } else if (node && node.next) {
            out = node.next;
            node.next = undefined;
            this.tail = node;
            out.next = undefined;
            return out.value;
        }
        return undefined;
    }
    private removeHead(): void {
        if (this.head && this.head.next) {
            let head = this.head;
            this.head = this.head.next;
            head.next = undefined;
            return;
        }
        this.head = this.tail = undefined;
    }
}
