import {_l} from '../lib/_utl.js';
import {LinkedList} from '../lib/data-structure/linked-list/Linked_List.js';
import {Stack} from '../lib/data-structure/stack/Stack.js';

var stack = new Stack();

_l(stack.isEmpty());

var data = [1,2,3,4,5,6,7];

data.map(el=>stack.push(el));

_l(stack.pop());
_l(stack.length());

stack.clean(true);
_l(stack);