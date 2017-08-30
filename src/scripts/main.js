import {_l} from '../lib/_utl.js';
import {LinkedList} from '../lib/data-structure/linked-list/Linked_List.js';


var list = new LinkedList(),
    data = [1,2,3,4];
data.map(el=>list.append(el));

_l(list);
var last = list.lastItem();

_l(last);
_l(last instanceof LinkedList);

_l(list.toArray());

_l([1,2,3,4].join('') == list.toArray().join(''))
_l([1,2,3,4] === list.toArray())

