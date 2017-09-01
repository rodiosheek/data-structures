/**
 * Queue
 */
export class Queue {
    constructor(){
        this.queue = [];
        this._length = 0;
    }
    /**
     * Add element to start of Queue
     * @param data {Any} queue element value
     */
    store(data) {
        this.queue.unshift(data);
        this._length++;
    }
    /**
     * Return and remove element value from end of Queue
     * @returns {Any}
     */
    access() {
        if(this._length == 0) return false;
        let res = this.queue.pop();
        this._length--;
        return res;
    }
    /**
     * Returns, but does not delete element form end of Queue
     * @returns {*}
     */
    peek() {
        if(this._length == 0) return false;
        return this.queue[this._length - 1];
    }
    /**
     * Return true if Queue is empty, otherwise false
     * @returns {boolean}
     */
    isEmpty() {
        return this._length === 0;
    }
    /**
     * Return Queue length
     * @returns {number} Queue length
     */
    length() {
        return this._length;
    }
}