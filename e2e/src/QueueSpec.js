import {Queue} from '../../src/lib/data-structure/queue/Queue.js';

var assert = require('assert');

export class QueueSpec {
    static run(_test) {
        return actions[_test]();
    }
}

var actions = {
    init: init,
    store: store,
    access: access,
    peek: peek,
    isEmpty: isEmpty,
    length: length,
};

function init() {

    let queue = new Queue();

    describe('Init Queue', () => {
        it('Instance of Queue', () => {
            assert.equal(true, queue instanceof Queue);
        });
    });

};

function store() {

    let queue = new Queue(),
        data = ['first', 2, 3, 4, 5, 'last'];

    data.map(el=>queue.store(el));

    describe('Queue store method', () => {
        it('Add element to end of Queue', () => {
            assert.equal('first', queue.queue[5]);
        });
    });

};

function access() {

    let queue = new Queue(),
        data = ['first', 2, 3, 4, 5, 'last'];

    data.map(el=>queue.store(el));

    let lastElement = queue.access();

    let elementExist = queue.queue.find(
        el=>el == lastElement
    );

    describe('Queue access method', () => {
        it('Return element value from end of Queue', () => {
            assert.equal('first', lastElement);
        });
        it('Remove element from end of Queue', () => {
            assert.equal(undefined, elementExist);
        });
    });

};

function peek() {

    let queue = new Queue(),
        data = ['first', 2, 3, 4, 5, 'last'];

    data.map(el=>queue.store(el));

    let lastElement = queue.peek();

    let elementExist = queue.queue.find(
        el=>el == lastElement
    );

    describe('Queue peek method', () => {
        it('Return element value from end of Queue', () => {
            assert.equal('first', lastElement);
        });
        it("Don't remove element from end of Queue", () => {
            assert.equal('first', elementExist);
        });
    });

};

function isEmpty() {

    let queue = new Queue(),
        data = ['first', 2, 3, 4, 5, 'last'];

    data.map(el=>queue.store(el));

    let anotherQueue = new Queue();

    describe('Queue isEmpty method', () => {
        it('Return false if Queue is not empty', () => {
            assert.equal(false, queue.isEmpty());
        });
        it('Return true if Queue is empty', () => {
            assert.equal(true, anotherQueue.isEmpty());
        });
    });

};

function length() {

    let queue = new Queue(),
        data = ['first', 2, 3, 4, 5, 'last'],
        dataLength = data.length;

    data.map(el=>queue.store(el));

    describe('Queue length method', () => {
        it('Return Queue length', () => {
            assert.equal(dataLength, queue.length());
        });
    });

};