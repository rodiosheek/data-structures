import {_l} from '../../_utl.js';


export class Set {
    constructor() {
        this._store = [];
    }

    /**
     * Added element to set
     * @param element
     * @returns {boolean} true if added, otherwise false
     */
    add(element) {
        if(this.has(element)) return false;
        this._store.push(element);
        return true;
    }

    /**
     * Delete element from Set and return it
     * @param element
     * @returns {*} element from Set
     */
    remove(element) {
        if (!this.has(element)) return false;
        return this._store.find(
            (el, index, arr) => {
                if (el === element) {
                    arr.splice(index, 1);
                    return true;
                }
            }
        );
    }

    /**
     * Return new Set of elements which are in current Set and in union Set
     * @param set
     * @returns {Set}
     */
    union(set) {
        let union = new Set();
        let secondSet = set.toArray();
        this._store.forEach(e=>union.add(e));
        secondSet.forEach(e=>union.add(e));
        return union;
    }

    /**
     * Return new Set of elements which is both an element of current Set  and an element of intersection Set.
     * @param set
     * @returns {Set}
     */
    intersection(set) {
        let intersection = new Set();
        this._store.map(el=>{
            if(set.has(el)) {
                intersection.add(el);
            }
        });
        return intersection;
    }

    /**
     * Return new Set of element which are in current Set, but not in different Set.
     * @param set
     * @returns {Set}
     */
    difference(set) {
        let difference = new Set();
        this._store.map(el=>{
            if(!set.has(el)) {
                difference.add(el);
            }
        });
        return difference;
    }

    /**
     * Return true if all elements of current Set are in different Set
     * @param set
     * @returns {boolean}
     */
    subset(set) {
        let union = this.union(set);
        let intersection = this.intersection(set);
        return (union.size() === this.size() && intersection.size() === set.size());
    }

    /**
     * Check if element exist in Set
     * @param element
     * @returns {boolean} true if element exist, otherwise false
     */
    has(element) {
        return (~this._store.indexOf(element)) ? true : false;
    }

    /**
     * Return count of Set elements
     * @returns {int}
     */
    size() {
        return this._store.length;
    }

    /**
     * Return Set elements like array
     * @returns {Array}
     */
    toArray() {
        return this._store;
    }

    /**
     * Return true if Set is empty (haven't elements)
     * @returns {boolean}
     */
    isEmpty() {
        return this.size() === 0;
    }

    /**
     * Clear out Set
     * @param confirm {boolean} Protection against deletion (true if you sure)
     */
    clean(confirm = false) {
        if(confirm) {
            this._store = [];
            return true;
        }
        return false;
    }
}