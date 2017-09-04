import {_l} from '../lib/_utl.js';
import {LinkedList} from '../lib/data-structure/linked-list/Linked_List.js';
import {Stack} from '../lib/data-structure/stack/Stack.js';
import {Queue} from '../lib/data-structure/queue/Queue.js';
import {Set} from '../lib/data-structure/set/Set.js';

let set_1 = new Set(),
    set_2 = new Set(),
    data_1 = [1, 2, 3, 4, 5],
    data_2 = [4, 5];

data_1.map(el=>set_1.add(el));
data_2.map(el=>set_2.add(el));

let subset = set_1.subset(set_2);

_l(subset);




