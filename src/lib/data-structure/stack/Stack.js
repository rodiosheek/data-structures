import {_l} from '../../_utl.js';

export class Stack {
    constructor(){
        this._stack = [];
        this._length = 0;
    }
    push(data) {
        let item = new StackItem(data);
        this._stack.push(item);
        this._length++;
    }
    pop(){
        if(this.length == 0) false;
        this._length--;
        let res = this._stack[this._length];
        this._stack.length = this._length;
        return res.data;
    }
    pip(){
        let res = [];
        this._stack.map((el, key)=>{
            res[key] = el.data;
        });
        this._length--;
        return res;
    }
    length() {
        return this._length;
    }
    isEmpty() {
        return this._length === 0;
    }
    clean(confirm = false) {
        if(!confirm) return;
        this._length = 0;
        this._stack.length = this._length;
    }
}

class StackItem {
    constructor(data) {
        this.data = data;
    }
}