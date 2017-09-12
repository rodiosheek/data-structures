import {_l} from '../lib/_utl.js';
import {LinkedList} from '../lib/data-structure/linked-list/Linked_List.js';
import {Stack} from '../lib/data-structure/stack/Stack.js';
import {Queue} from '../lib/data-structure/queue/Queue.js';
import {Set} from '../lib/data-structure/set/Set.js';
import {AAMap} from '../lib/data-structure/Map/AAMap.js';

let aaMap = new AAMap();

aaMap.set('rodion', {name: 'rodion'})
aaMap.set('one', 'one');
aaMap.set('two', 'two');

_l('old', aaMap.get('one'));

aaMap.change('one', 'three');

let newVal = aaMap.get('one');

_l('new',newVal);

let newNew = aaMap.change('one', 'four', 'four');

_l(aaMap.get('one'));

_l(aaMap);



