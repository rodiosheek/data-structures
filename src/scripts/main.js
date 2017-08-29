import {_l} from '../lib/_utl.js';
import {LinkedList} from '../lib/data-structure/Linked_List.js';

var list = new LinkedList();

_l(`clean list`, list);

var data = [1,2,3,4,5,6,7,8,9,'last'];

data.map(el=>list.append(el));

_l('append', list);

list.prepend(0);

_l('prepend', list);

_l('->>del', list.deleteByVal(5));

_l('delete', list);

_l('count', list.length(), list);

_l('if 3', list.contains(2));

_l('last', list.lastItem())

list.clean(true);
_l('clean', list);

var arr = list.toArray();
_l('toArray', arr);