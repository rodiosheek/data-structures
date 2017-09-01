import {_l} from '../lib/_utl.js';
import {LinkedList} from '../lib/data-structure/linked-list/Linked_List.js';
import {Stack} from '../lib/data-structure/stack/Stack.js';
import {Queue} from '../lib/data-structure/queue/Queue.js';

let queue = new Queue();

let data = ['first', 'second', 'third', 'fourth'];
data.map(el=>queue.store(el));

_l(queue.peek());
_l(queue.peek());
_l(queue.length());
_l(queue.access());
_l(queue.access());
_l(queue.access());
_l(queue.access());
_l(queue.access());
_l(queue.length());

_l('queue', queue);

