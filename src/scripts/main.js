import {_l} from '../lib/_utl.js';
import {LinkedList} from '../lib/data-structure/linked-list/Linked_List.js';
import {Stack} from '../lib/data-structure/stack/Stack.js';
import {Queue} from '../lib/data-structure/queue/Queue.js';
import {Set} from '../lib/data-structure/set/Set.js';
import {AAMap} from '../lib/data-structure/Map/AAMap.js';

Array.prototype.shuffle = function (b) {
    var i = this.length, j, t;
    while (i) {
        j = Math.floor(( i-- ) * Math.random());

        t = (b && typeof this[i].shuffle !== 'undefined')
            ? this[i].shuffle()
            : this[i];

        this[i] = this[j];
        this[j] = t;
    }
    return this;
};

Array.prototype.randomAdd = function (end) {
    let start = 0;
    while (start < end) {
        this.push(start++);
    }
};

function quickSort(arr) {
    //Recursive base
    if (arr.length < 2) return arr;
    //Recursive case
    let index = Math.round((arr.length - 1) / 2),
        pivot = arr[index],
        less = [],
        greater = [];
    arr.map(el=> {
        if(el < pivot) less.push(el);
        if(el > pivot) greater.push(el);
    });
    return quickSort(less).concat(pivot, quickSort(greater));
}








