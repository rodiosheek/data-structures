import {_l} from '../../_utl.js';

/**
 * Stack
 */
export class Stack {
    constructor(){
        this._stack = [];
        this._length = 0;
    }

    /**
     * Added element to end of Stack
     * @param data {Any} stack element value
     */
    push(data) {
        let item = new StackItem(data);
        this._stack.push(item);
        this._length++;
    }

    /**
     * Return value of last element of Stack
     * @returns {StackItem} stack element value
     */
    pop(){
        if(this.length == 0) false;
        this._length--;
        let res = this._stack[this._length];
        this._stack.length = this._length;
        return res;
    }

    /**
     * Return array representation of Stack
     * @returns {Array} array representation of Stack
     */
    pip(){
        let res = [];
        this._stack.map((el, key)=>{
            res[key] = el.data;
        });
        this._length--;
        return res;
    }

    /**
     * Return counts of Stack elements
     * @returns {number} Stack length
     */
    length() {
        return this._length;
    }

    /**
     * If stack is empty
     * @returns {boolean} true if Stack is empty, otherwise false
     */
    isEmpty() {
        return this._length === 0;
    }

    /**
     * Clear out Stack
     * @param confirm {boolean} Protection against deletion (true if you sure)
     */
    clean(confirm = false) {
        if(!confirm) return;
        this._length = 0;
        this._stack.length = this._length;
    }
}

/**
 * StackItem
 * Element of stack
 */
export class StackItem {
    constructor(data) {
        this.data = data;
    }
}