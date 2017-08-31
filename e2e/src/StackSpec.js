import {Stack, StackItem} from '../../src/lib/data-structure/stack/Stack.js';

var assert = require('assert');

export class StackSpec {
    static run(_test){
        return actions[_test]();
    }
}

var actions = {
    init: init,
    push: push,
    pop: pop,
    pip: pip,
    length: length,
    isEmpty: isEmpty,
    clean: clean,
};

function init() {

    let stack = new Stack();

    describe('Init Stack', () => {
        it('Instance of Stack',() => {
            assert.equal(true, stack instanceof Stack);
        })
    });

};

function push() {

    let stack = new Stack(),
        data = [1,2,3,'end'];

    data.map(el=>stack.push(el));

    describe('Stack push method.', () => {
        it('Added element to Stack',() => {
            assert.equal('end', stack.pop().data);
        })
    });

};

function pop() {

    let stack = new Stack(),
        data = [1,2,3,'end'];

    data.map(el=>stack.push(el));

    let lastPop = stack.pop();

    describe('Stack pop method.', () => {
        it('Return last element',() => {
            assert.equal(true, lastPop instanceof StackItem);
        })
    });

};

function pip() {

    let stack = new Stack(),
        data = [1,2,3,'end'];

    data.map(el=>stack.push(el));

    let content = stack.pip();

    describe('Stack pip method.', () => {
        it('Return content of Stack',() => {
            assert.equal(data.join(''), content.join(''));
        })
    });

};

function length() {

    let stack = new Stack(),
        data = [1,2,3,'end'];
    data.map(el=>stack.push(el));

    describe('Stack length method.', () => {
        it('Return length of Stack',() => {
            assert.equal(4, stack.length());
        })
    });

};

function isEmpty() {

    let stack = new Stack();

    describe('Stack isEmpty method.', () => {
        it('Return true if stack is empty, otherwise false',() => {
            assert.equal(true, stack.isEmpty());
        })
    });

};

function clean() {

    let stack = new Stack(),
        data = [1,2,3,'end'];
    data.map(el=>stack.push(el));
    stack.clean(true)

    describe('Stack clean method.', () => {
        it('Clear out stack',() => {
            assert.equal(0, stack.length());
        })
    });

};