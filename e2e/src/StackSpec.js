import {Stack} from '../../src/lib/data-structure/stack/Stack.js';

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
};

function init() {

    let stack = new Stack();

    describe('Init Stack', () => {
        it('Instance of Stack',() => {
            assert.equal(true, stack instanceof Stack)
        })
    });

};

function push() {

    let stack = new Stack(),
        data = [1,2,3,'end'];

    data.map(el=>stack.push(el));

    describe('Stack push method.', () => {
        it('Added element to Stack',() => {
            assert.equal('end', stack.pop())
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
            assert.equal('end', lastPop)
        })
        //TODO: check exist element 
        // it('And delete it from Stack',() => {
        //     assert.equal(3, stack.stack[2].data)
        // })
    });

};

function pip() {

    let stack = new Stack(),
        data = [1,2,3,'end'];

    data.map(el=>stack.push(el));

    let content = stack.pip();

    describe('Stack pip method.', () => {
        it('Return content of Stack',() => {
            assert.equal(data.join(''), content.join(''))
        })
    });

};