[Data structure](https://github.com/rodiosheek/data-structures)->Queue

### Queue
![Queue](https://github.com/rodiosheek/data-structures/blob/master/src/lib/data-structure/queue/queue.png)

#### Init Queue
```
let queue = new Queue();
```
#### Queue methods:
##### * store() - Add element to start of Queue
```
queue.store('element');
```
##### * access() - Return and remove element value from end of Queue
```
let lastElement = queue.access();
```
##### * peek() - Returns, but does not delete element form end of Queue
```
let lastElement = queue.peek();
```
##### * isEmpty() - Return true if Queue is empty, otherwise false
```
queue.isEmpty();
```
##### * length() - Return Queue length
```
queue.length();
```



