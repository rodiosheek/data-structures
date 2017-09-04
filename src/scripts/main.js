import {_l} from '../lib/_utl.js';
import {LinkedList} from '../lib/data-structure/linked-list/Linked_List.js';
import {Stack} from '../lib/data-structure/stack/Stack.js';
import {Queue} from '../lib/data-structure/queue/Queue.js';
import {Set} from '../lib/data-structure/set/Set.js';

var set1 = new Set();
var set2 = new Set();
var set3 = new Set();
var set4 = new Set();

var obj = {name: 'name'};

var data1 = [1,2,3,4,5,6, obj];
var data2 = [4,5,6,7,8,9];
var data3 = [4,5, obj];

data1.map(el=>set1.add(el));
data2.map(el=>set2.add(el));
data3.map(el=>set3.add(el));

var union  = set1.union(set2);
var intersection  = set1.intersection(set2);
var difference  = set1.difference(set2);
var subset = set1.subset(set3);

_l('union', union);
_l('intersection', intersection);
_l('difference', difference);
_l('union size', union.size());
_l('subset', subset);
_l('isEmpty', set4.isEmpty());
_l('clean set3', set3.clean(true));
_l(' set3', set3);



