type Node<T> = {
    value: T,
    prev?: Node<T>,
    next?: Node<T>,
}

export default class DoublyLinkedList<T> {
    public length: number;

    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    private debug() {
        let curr = this.head;
        let out = "";
        for (let i = 0; curr && i < this.length; i++) {
            out += `${i} => ${curr.value} `;
            curr = curr.next;
        }
        console.log(out);
    }

    prepend(item: T): void {
        this.length++;
        let node = { value: item } as Node<T>;
        if (!this.head) {
            this.head = this.tail = node;
            return;
        }

        node.next = this.head;
        this.head = node;
    }
    insertAt(item: T, idx: number): void {
        let node = { value: item } as Node<T>;
        let curr = this.head;
        let i = 0;

        while (curr && i < idx) {
            curr = curr.next
        }

        if (!curr) {
            throw "index undefined";
        } 

        this.length++;

        if (!curr.prev) {
            this.prepend(node.value);
            return;
        } 

        node.prev = curr.prev;
        node.next = curr;
        curr.prev.next = node;
        curr.prev = node;
    }
    append(item: T): void {
        this.length++;
        let node = { value: item } as Node<T>;
        if (!this.tail) {
            this.head = this.tail = node;
            return;
        }

        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
    }
    remove(item: T): T | undefined {
        let curr = this.head;
        this.debug();

        for (let i = 0; i < this.length && curr; i++) {
            if (curr.value === item) {
                break;
            }
            curr = curr.next;
        }

        if (!curr) {
            return undefined;
        }

        if (curr.prev) {
            curr.prev.next = curr.next
        }

        if (curr.next) {
            curr.next.prev = curr.prev;
        }

        if (this.head === curr) {
            this.head = curr.next;
        }

        if (this.tail === curr) {
            this.tail = curr.prev;
        }

        curr.prev = curr.next = undefined;
        this.length--;
        this.debug();
        return curr.value;
    }

    get(idx: number): T | undefined {
        let curr = this.head;

        for (let i = 0; i < idx && curr; i++) {
            curr = curr.next;
        }

        if (!curr) {
            return undefined;
        }

        return curr.value;
    }
    removeAt(idx: number): T | undefined {
        // this.debug();
        let curr = this.head;
        this.length--;
        if (this.length === 0) {
            const out = this.head?.value;
            this.head = this.tail = undefined;
            return out;
        }

        for (let i = 0; i < idx && curr; i++) {
            curr = curr.next;
        }

        if (!curr) {
            return undefined;
        }


        if (curr.prev) {
            curr.prev.next = curr.next
        }
        if (curr.next) {
            curr.next.prev = curr.prev;
        }

        if (this.head === curr) {
            this.head = curr.next;
        }

        if (this.tail === curr) {
            this.tail = curr.prev;
        }

        curr.prev = curr.next = undefined;
        return curr.value;
    }
}
