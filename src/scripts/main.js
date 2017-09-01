import {_l} from '../lib/_utl.js';
import {LinkedList} from '../lib/data-structure/linked-list/Linked_List.js';
import {Stack} from '../lib/data-structure/stack/Stack.js';
import {Queue} from '../lib/data-structure/queue/Queue.js';

var queue = new Queue(),
    data = [1,2,3,4,5];
queue.store(1);
_l(queue.isEmpty());

