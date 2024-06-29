type Node = {
    value: string, 
    isWord?: boolean, 
    head?: Node, 
    children?: Node[],
}

export default class Trie {
    
    private wordCount: number;
    private root?: Node;
    

    constructor() {
        this.wordCount = 0;
        this.root = undefined;
    }

    insert(item: string): void {
        if (!this.root) {
            const root  = { value: "", children: [] } as Node;
            this.root = root;
        }
        let curr = this.root;
        for (let i = 0; i < item.length; i++) {
            let cIdx = this.idx(item[i]);
            if (curr.children && curr.children[cIdx]) {
                curr = curr.children[cIdx];
                continue;
            }
            curr.children = [];
            curr.children[cIdx] = { value: item[i] } as Node;
            curr = curr.children[cIdx];
        }
        curr.isWord = true;
    }

    delete(item: string): void {
    }

    find(partial: string): string[] {
        let out: string[] = [];
        if (!this.root) {
            return [];
        }

        let curr = this.root;
        for (let i = 0; i < partial.length; i++) {
            let cIdx = this.idx(partial[i]);
            if (curr.isWord) {
                out.push(partial.slice(0, i + 1));
            }
            if (curr.children && curr.children[cIdx]) {
                curr = curr.children[cIdx];
                continue;
            }
            console.log(out);
            return out;
        }


        console.log(out);
        return out;
    }


    private idx(str: string): number { 
        const zero = "a".charCodeAt(0);
        return str.charCodeAt(0) - zero;
    }
}
