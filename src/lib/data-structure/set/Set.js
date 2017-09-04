import {_l} from '../../_utl.js';

export class Set {
    constructor() {
        this.store = [];
    }

    /**
     * Added element to set
     * @param element
     * @returns {boolean} true if added, otherwise false
     */
    add(element) {
        return true;
    }

    /**
     * Delete element from Set and return it
     * @param element
     * @returns {*} element from Set
     */
    remove(element) {
        return element;
    }

    /**
     * Check if element exist in Set
     * @param element
     * @returns {boolean} true if element exist, otherwise false
     */
    has(element) {
        return true;
    }

    /**
     * Return new Set of elements which are in current Set and in union Set
     * @param set
     * @returns {Set}
     */
    union(set) {
        return new Set();
    }

    /**
     * Return new Set of elements which is both an element of current Set  and an element of intersection Set.
     * @param set
     * @returns {Set}
     */
    intersection(set) {
        return new Set();
    }

    /**
     * Return new Set of element which are in current Set, but not in different Set.
     * @param set
     * @returns {Set}
     */
    difference(set) {
        return new Set();
    }

    /**
     * Return true if all elements of current Set are in different Set
     * @param set
     * @returns {boolean}
     */
    subset(set) {
        return true;
    }

    /**
     * Return count of Set elements
     * @returns {float}
     */
    size() {

    }

    /**
     * Return true if Set is empty (haven't elements)
     * @returns {boolean}
     */
    isEmpty() {
        return true;
    }

    /**
     * Clear out Set
     * @param confirm {boolean} Protection against deletion (true if you sure)
     */
    clean(confirm = false) {

    }
}