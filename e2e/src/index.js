import {LinkedListSpec} from './LinkedListSpec.js';
import {StackSpec} from './StackSpec.js';
import {QueueSpec} from './QueueSpec.js';

LinkedListSpec.run('init');
LinkedListSpec.run('append');
LinkedListSpec.run('prepend');
LinkedListSpec.run('deleteByVal');
LinkedListSpec.run('contains');
LinkedListSpec.run('clean');
LinkedListSpec.run('length');
LinkedListSpec.run('lastItem');
LinkedListSpec.run('toArray');

StackSpec.run('init');
StackSpec.run('push');
StackSpec.run('pop');
StackSpec.run('pip');
StackSpec.run('length');
StackSpec.run('isEmpty');
StackSpec.run('clean');

QueueSpec.run('init');
QueueSpec.run('store');
QueueSpec.run('access');
QueueSpec.run('peek');
QueueSpec.run('isEmpty');
QueueSpec.run('length');
