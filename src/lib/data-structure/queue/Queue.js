/**
 * Queue
 */

const _queue = new WeakMap;
const _length = new WeakMap;

export class Queue {
    constructor(){
        _queue.set(this, []);
        _length.set(this, 0);
    }
    /**
     * Add element to start of Queue
     * @param data {Any} queue element value
     */
    store(data) {
        let newEl = _queue.get(this);
        newEl.unshift(data);
        _queue.set(this, newEl);
        let length = _length.get(this);
        length++;
        _length.set(this, length);
        return length;
    }
    /**
     * Return and remove element value from end of Queue
     * @returns {Any}
     */
    access() {
        if(_length.get(this) == 0) return false;
        let end = _queue.get(this);
        let res = end.pop();
        _queue.set(this, end);
        let length = _length.get(this);
        _length.set(this, --length);
        return res;
    }
    /**
     * Returns, but does not delete element form end of Queue
     * @returns {*}
     */
    peek() {
        if(_length.get(this) == 0) return false;
        return _queue.get(this)[_length.get(this) - 1];
    }
    /**
     * Return true if Queue is empty, otherwise false
     * @returns {boolean}
     */
    isEmpty() {
        return _length.get(this) === 0;
    }
    /**
     * Return Queue length
     * @returns {number} Queue length
     */
    length() {
        return _length.get(this);
    }
}