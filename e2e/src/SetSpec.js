import {Set} from '../../src/lib/data-structure/set/Set.js';

var assert = require('assert');

export class SetSpec {
    static run(_test){
        return actions[_test]();
    }
}

var actions = {
    init: init,
    add: add,
    remove: remove,
    union: union,
    intersection: intersection,
    difference: difference,
    subset: subset,
    has: has,
    size: size,
    toArray: toArray,
    isEmpty: isEmpty,
    clean: clean,
};

function init() {

    let set = new Set();

    describe('Init Set:', () => {
        it('instance of Set.',() => {
            assert.equal(true, set instanceof Set);
        })
    });

};

function add() {

    let set = new Set();
    set.add(1);
    set.add(2);
    set.add(2);

    describe('Set add method:', () => {
        it('added element to Set.',() => {
            assert.equal(2, set.size());
        });
        it('elements not repeat in Set.',() => {
            assert.equal(true, set.has(2));
        });
    });

};

function remove() {

    let set = new Set(),
        data = [1,2,3,4];

    data.map(el=>set.add(el));

    set.remove(4);

    describe('Set remove method:', () => {
        it('delete element from Set.',() => {
            assert.equal(3, set.size());
        });
        it('deleted element not exist into Set.',() => {
            assert.equal(false, set.has(4));
        });
    });

};

function union() {

    let set_1 = new Set(),
        set_2 = new Set(),
        data_1 = [1, 2, 3, 4, 5],
        data_2 = [4, 5, 6, 7];

    data_1.map(el=>set_1.add(el));
    data_2.map(el=>set_2.add(el));

    let union = set_1.union(set_2);

    describe('Set union method (union of First and Second Sets):', () => {
        set_1.toArray().map(el=>{
            it('union Set contents all element of First Set',() => {
                assert.equal(true, union.has(el));
            });
        });
        set_2.toArray().map(el=>{
            it('union Set contents all element of Second Set',() => {
                assert.equal(true, union.has(el));
            });
        });
    });
};

function intersection() {

    let set_1 = new Set(),
        set_2 = new Set(),
        data_1 = [1, 2, 3, 4, 5,6],
        data_2 = [4, 5, 6, 7];

    data_1.map(el=>set_1.add(el));
    data_2.map(el=>set_2.add(el));

    let intersection = set_1.intersection(set_2);

    describe('Set intersection (intersection of First and Second Sets):', () => {
        intersection.toArray().map(el=>{
            it('intersection Set contents element from First Set.',() => {
                assert.equal(true, set_1.has(el));
            });
        });
        intersection.toArray().map(el=>{
            it('intersection Set contents element from Second Set.',() => {
                assert.equal(true, set_2.has(el));
            });
        });
    });
};

function difference() {

    let set_1 = new Set(),
        set_2 = new Set(),
        data_1 = [1, 2, 3, 4, 5,6],
        data_2 = [4, 5, 6, 7];

    data_1.map(el=>set_1.add(el));
    data_2.map(el=>set_2.add(el));

    let difference = set_1.difference(set_2);

    describe('Set difference (difference of First and Second Sets):', () => {
        difference.toArray().map(el=>{
            it('difference Set contents element from First Set.',() => {
                assert.equal(true, set_1.has(el));
            });
        });
        difference.toArray().map(el=>{
            it('difference Set not contents element from Second Set.',() => {
                assert.equal(false, set_2.has(el));
            });
        });
    });
};

function subset() {

    let set_1 = new Set(),
        set_2 = new Set(),
        data_1 = [1, 2, 3, 4, 5, 6],
        data_2 = [4, 5, 6];

    data_1.map(el=>set_1.add(el));
    data_2.map(el=>set_2.add(el));

    let subset = set_1.subset(set_2);

    describe('Set subset method:', () => {
        it('if First Set contents all element of Second Set.',() => {
            assert.equal(true, subset);
        });
    });
};

function has() {

    let set = new Set(),
        data = [1, 2, 3];

    data.map(el=>set.add(el));

    describe('Set has method:', () => {
        it('return true if element exist in Set.',() => {
            assert.equal(true, set.has(2));
        });
        it('return false if element not exist in Set.',() => {
            assert.equal(false, set.has(77));
        });
    });
};

function size() {

    let set = new Set(),
        data = [1, 2, 3];

    data.map(el=>set.add(el));

    describe('Set size method:', () => {
        it('return count of Set elements.',() => {
            assert.equal(3, set.size());
        });
    });
};

function toArray() {

    let set = new Set(),
        data = [1, 2, 3];

    data.map(el=>set.add(el));

    let arr = set.toArray();

    describe('Set toArray method:', () => {
        it('return Array representation of Set.',() => {
            assert.equal(true, arr instanceof Array);
        });
        it('array length equal to Set size.',() => {
            assert.equal(arr.length, set.size());
        });
        arr.map(el=>{
            it('array contents all elements of Set.',() => {
                assert.equal(true, set.has(el));
            });
        })
    });
};

function isEmpty() {

    let set = new Set();

    describe('Set isEmpty method:', () => {
        it('return true if Set not have any elements.',() => {
            assert.equal(true, set.isEmpty());
        });
        it('Set size equal to 0.',() => {
            assert.equal(0, set.size());
        });
    });
};

function clean() {

    let set = new Set(),
        data = [1, 2, 3];

    data.map(el=>set.add(el));

    set.clean(true);

    describe('Set clean method (deleted all elements from Set):', () => {
        it('Set isEmpty method return true',() => {
            assert.equal(true, set.isEmpty());
        });
        it('Set size equal to 0.',() => {
            assert.equal(0, set.size());
        });
    });
};