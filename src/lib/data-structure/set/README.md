[Data structure](https://github.com/rodiosheek/data-structures)->Set

### Set
![Set](https://github.com/rodiosheek/data-structures/blob/master/src/lib/data-structure/set/Set.png)

#### Init Set
```
let set = new Set();
```
#### Set methods: 
##### * add() - Added element to set
```
set.add('element'); // true
```
##### * remove() - Delete element from Set and return it
```
set.remove(); // return element
```
##### * union() - Return new Set of elements which are in current Set and in union Set
```
let union = set_1.union(set_2);
```
##### * intersection() - Return new Set of elements which is both an element of current Set  and an element of intersection Set
```
let intersection = set_1.intersection(set_2);
```
##### * difference() - Return new Set of element which are in current Set, but not in different Set
```
let difference = set_1.difference(set_2);
```
##### * subset() - Return true if all elements of current Set are in different Set
```
let subset = set_1.subset(set_2);
```
##### * has() - Check if element exist in Set
```
set.has('elenets');
```
##### * size() - Return count of Set elements
```
let size = set.size();
```
##### * toArray() -  Return Array representation of Set
```
let arr = set.toArray();
```
##### * isEmpty() - Return true if Set is empty (haven't elements)
```
set.isEmpty();
```
##### * clean() - Clear out Set
```
set.clean(true);
```
