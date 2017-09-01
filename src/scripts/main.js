import {_l} from '../lib/_utl.js';
import {LinkedList} from '../lib/data-structure/linked-list/Linked_List.js';
import {Stack} from '../lib/data-structure/stack/Stack.js';
import {Queue} from '../lib/data-structure/queue/Queue.js';

let queue = new Queue(),
    data = ['first', 2, 3, 4, 5, 'last'];

data.map(el=>queue.store(el));

data.map(()=>queue.access());
_l(queue.access());
_l(queue);

