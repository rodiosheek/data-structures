import {_l} from '../../_utl.js';

export class Stack {
    constructor(){
        this.stack = [];
    }
    push(data) {
        let item = new StackItem(data);
        this.stack.push(item);
    }
    pop(){
        let stack = this.stack,
            length = stack.length;
        if(length == 0) return false;
        let res = stack[length - 1].data;
        this.stack.length = length - 1;
        return res;
    }
    pip(){
        let res = [];
        this.stack.map((el, key)=>{
            res[key] = el.data;
        });
        return res;
    }
}

class StackItem {
    constructor(data) {
        this.data = data;
    }
}