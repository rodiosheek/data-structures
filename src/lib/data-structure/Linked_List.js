import {_l} from '../_utl.js';
export class LinkedList {
    append(data) {
        if(!this._exist(this.head)) {
            this.head = new ListItem(data);
            return;
        }
        let current = this.head;
        while(this._exist(current.next)) {
            current = current.next;
        }
        current.next = new ListItem(data);
    }
    prepend(data) {
        let newFirst = new ListItem(data);
        newFirst.next = this.head;
        this.head = newFirst;
    }
    deleteByVal(value) {
        if(!this._exist(this.head)) return;
        //For first item (head)
        if(this.head.data == value) {
            this.head = this.head.next;
        }
        let current = this.head;
        while(this._exist(current.next)) {
            if(current.next.data == value) {
                current.next = current.next.next;
                return true;
            }
            current = current.next;
        }
        return false;
    }
    contains(value) {
        let current = this.head;
        while(this._exist(current)){
            if(current.data == value) return true;
            current = current.next;
        }
        return false;
    }
    clean(confirm = false) {
        if(!confirm) return;
        this.head = null;
    }
    length(){
        let count = 0,
            current = this.head;
        while(this._exist(current)) {
            count++;
            current = current.next;
        }
        return count;
    }
    lastItem() {
        let current = this.head;
        while(this._exist(current.next)) {
            current = current.next;
        }
        return current;
    }
    toArray() {
        let res = [],
            current = this.head;
        if(current == null) return res;
        while(this._exist(current)){
            res.push(current.data);
            current = current.next;
        }
        return res;
    }

    /**
     * If type of item not equal undefined
     * @param item
     * @returns {boolean}
     * @private
     */
    _exist(item) {
        return typeof item != 'undefined';
    }
}

class ListItem {
    constructor(data) {
        this.data = data;
    }
}


