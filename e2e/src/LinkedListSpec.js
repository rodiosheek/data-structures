import {LinkedList, ListItem} from '../../src/lib/data-structure/Linked_List.js';

var assert = require('assert');

export class LinkedListSpec {
    static run(_test){
        return actions[_test]();
    }
}

var actions = {
    init: init,
    append: append,
    prepend: prepend,
    deleteByVal: deleteByVal,
    contains: contains,
    clean: clean,
    length: length,
    lastItem: lastItem,
    toArray: toArray,
};

function init() {

    describe('Init LinkedList', () => {
        it('Instance of LinkedList',() => {

            let list = new LinkedList();

            assert.equal(true, list instanceof LinkedList)
        })
    });

};

function append() {

    describe('LinkedList append() method', () => {
        it('Added element to end of Linked List',() => {

            let list = new LinkedList(),
                data = [1,2];
            data.map(el=>list.append(el));

            list.append(3);

            assert.equal(3, list.head.next.next.data)
        })
    });

};

function prepend() {

    describe('LinkedList prepend() method', () => {
        it('Added element to start of Linked List',() => {

            let list = new LinkedList(),
                data = [1,2];
            data.map(el=>list.append(el));

            list.prepend('start');

            assert.equal('start', list.head.data)
        })
    });

};

function deleteByVal() {

    describe('LinkedList deleteByVal() method', () => {
        it('Delete element of LinkedList by value',() => {

            let list = new LinkedList(),
                data = [1,2,3,4];
            data.map(el=>list.append(el));

            list.deleteByVal(3);

            assert.equal(false, list.contains(3))
        })
    });

};

function contains() {

    describe('LinkedList contains() method', () => {
        it('If value contains in LinkedList',() => {

            let list = new LinkedList(),
                data = [1,2,3,4];
            data.map(el=>list.append(el));

            assert.equal(true, list.contains(3))
        })
    });

};

function clean() {

    describe('LinkedList clean() method', () => {
        it('Clear out LinkedList',() => {

            let list = new LinkedList(),
                data = [1,2,3,4];
            data.map(el=>list.append(el));

            list.clean(true);

            assert.equal(0, list.length())
        })
    });

};

function length() {

    describe('LinkedList length() method', () => {
        it('Return length of LikedList elements',() => {

            let list = new LinkedList(),
                data = [1,2,3,4];
            data.map(el=>list.append(el));

            assert.equal(4, list.length())
        })
    });

};

function lastItem() {

    let list = new LinkedList(),
        data = [1,2,3,4];
    data.map(el=>list.append(el));

    let lastItem = list.lastItem();

    describe('LinkedList lastItem() method', () => {

        it('Return last element of LinkedList',() => {
            assert.equal(4, lastItem.data);
        });
        it('Last element instance of ListItem (LinkedList consists of ListItem elements)', () => {
            assert.equal(true, lastItem instanceof ListItem);
        });
    });

};

function toArray() {

    describe('LinkedList toArray() method', () => {

        let list = new LinkedList(),
            data = [1,2,3,4];
        data.map(el=>list.append(el));

        let array = list.toArray();

        it('Retrieve all the elements of LinkedList to array',() => {
            assert.equal([1,2,3,4].join(''), array.join(''));
        });
    });

};



