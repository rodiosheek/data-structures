import {_l} from '../../_utl.js';

/**
 * Map( key, value)
 * key- string
 * value -Any
 */

export class AAMap {
    constructor(){
        this._store = {};
        this._count = 0;
    }

    set(key, value) {
        this._store[key] = value;
        this._count++;
        return true;
    }

    get(key) {
        if(this._count == 0) return false;
        return this._store[key];
    }

    size() {
        return this._count;
    }

    del(key) {
        if(this._count == 0) return false;
        if(key in this._store) {
            let _el = this._store[key];
            delete this._store[key];
            this._count--;
            return _el;
        }
    }

    clean(confirm = false) {
        if(!confirm) return false;
        this._store = {};
        this._count = 0;
    }

    change(oldKey, newValue, newKey = false) {
        if(this._count == 0) return false;
        if(newKey) {
            if(oldKey in this._store) {
                delete this._store[oldKey];
                this._store[newKey] = newValue;
                return true;
            }
        }
        if(oldKey in this._store) {
            this._store[oldKey] = newValue;
            return true;
        }
        return false;
    }
}
