import {_l} from '../../_utl.js';


/**
 * Linked list data structure
 */
export class LinkedList {
    /**
     * Added element fo end of list.
     * @param data {Any} Element data
     */
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
    /**
     * Added element fo start of list.
     * @param data {Any} Element data
     */
    prepend(data) {
        let newFirst = new ListItem(data);
        newFirst.next = this.head;
        this.head = newFirst;
    }

    /**
     * Delete list element by exist value
     * @param value {Any} Element value
     * @returns {boolean} True if deleted False if not
     */
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

    /**
     * If value contains in list
     * @param value {Any} Element value
     * @returns {boolean} True if contains False if not
     */
    contains(value) {
        let current = this.head;
        while(this._exist(current)){
            if(current.data == value) return true;
            current = current.next;
        }
        return false;
    }

    /**
     * Clear out list
     * @param confirm {boolean} Protection against deletion (true if you sure)
     */
    clean(confirm = false) {
        if(!confirm) return;
        this.head = null;
    }

    /**
     * Return count of list elements
     * @returns {number} Count
     */
    length(){
        let count = 0,
            current = this.head;
        if(current == null) return count;
        while(this._exist(current)) {
            count++;
            current = current.next;
        }
        return count;
    }

    /**
     * Return last list element
     * @returns {null|ListItem|*} Instance of ListItem
     */
    lastItem() {
        let current = this.head;
        while(this._exist(current.next)) {
            current = current.next;
        }
        return current;
    }

    /**
     * Return array representation of list
     * @returns {Array}
     */
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
     * If type of item not equal to undefined
     * @param item
     * @returns {boolean}
     * @private
     */
    _exist(item) {
        return typeof item != 'undefined';
    }
}

/**
 * ListItem
 * Element of LinkedList
 */
export class ListItem {
    constructor(data) {
        this.data = data;
    }
}


