[Data structure](https://github.com/rodiosheek/data-structures/tree/Unit_test_linked_list)->
[Singly-linked list](https://github.com/rodiosheek/data-structures/blob/master/src/lib/data-structure/Linked_List.js)

### Singly-linked list
![Singly-linked list](https://github.com/rodiosheek/data-structures/blob/Unit_test_linked_list/src/lib/data-structure/linked-list/images.png)

#### Init linked list
```
let list = new LinkedList();
```
#### Methods of linked list:
##### * append() - added element to and of linked list
```
list.append('last element');
```
##### * prepend() - added element to start of linked list
```
list.prepend('fist element');
```
##### * deleteByVal() - delete element of linked list by elements value
```
list.deleteByVal(3);
list.deleteByVal('delete value');
```
##### * contains() - if linked list contains element with exist value
```
list.contains(3); // true - exist, false - not
```
##### * clean() - clear out linked list
```
list.clean(); // 
```
##### * length() - return count of elements in linked list 
```
list.length(); // 3
```
##### * lastItem() - return last item of linked list 
```
list.lastItem(); // {data: 3} 
```
##### * toArray() - convert linked list elements to array
```
list.toArray();
```