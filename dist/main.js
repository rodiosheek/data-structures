(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports._l = _l;


function _l(...args) {
    console.log(...args);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvZXMtNi1kYXRhLXN0cnVjdHVyZS9zcmMvbGliL191dGwuanMiXSwibmFtZXMiOlsiX2wiLCJhcmdzIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFBUUEsRSxHQUFBQSxFOzs7QUFFUixTQUFTQSxFQUFULENBQVksR0FBR0MsSUFBZixFQUFxQjtBQUNqQkMsWUFBUUMsR0FBUixDQUFZLEdBQUdGLElBQWY7QUFDSCIsImZpbGUiOiJfdXRsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHtfbH07XG5cbmZ1bmN0aW9uIF9sKC4uLmFyZ3MpIHtcbiAgICBjb25zb2xlLmxvZyguLi5hcmdzKTtcbn1cbiJdfQ==
},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LinkedList = undefined;

var _utl = require('../_utl.js');

let LinkedList = exports.LinkedList = class LinkedList {
    append(data) {
        if (!this._exist(this.head)) {
            this.head = new ListItem(data);
            return;
        }
        let current = this.head;
        while (this._exist(current.next)) {
            current = current.next;
        }
        current.next = new ListItem(data);
    }
    prepend(data) {
        let newFirst = new ListItem(data);
        newFirst.next = this.head;
        this.head = newFirst;
    }
    deleteByVal(value) {
        if (!this._exist(this.head)) return;
        //For first item (head)
        if (this.head.data == value) {
            this.head = this.head.next;
        }
        let current = this.head;
        while (this._exist(current.next)) {
            if (current.next.data == value) {
                current.next = current.next.next;
                return true;
            }
            current = current.next;
        }
        return false;
    }
    contains(value) {
        let current = this.head;
        while (this._exist(current)) {
            if (current.data == value) return true;
            current = current.next;
        }
        return false;
    }
    clean(confirm = false) {
        if (!confirm) return;
        this.head = null;
    }
    length() {
        let count = 0,
            current = this.head;
        while (this._exist(current)) {
            count++;
            current = current.next;
        }
        return count;
    }
    lastItem() {
        let current = this.head;
        while (this._exist(current.next)) {
            current = current.next;
        }
        return current;
    }
    toArray() {
        let res = [],
            current = this.head;
        if (current == null) return res;
        while (this._exist(current)) {
            res.push(current.data);
            current = current.next;
        }
        return res;
    }

    /**
     * If type of item not equal undefined
     * @param item
     * @returns {boolean}
     * @private
     */
    _exist(item) {
        return typeof item != 'undefined';
    }
};
let ListItem = class ListItem {
    constructor(data) {
        this.data = data;
    }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvZXMtNi1kYXRhLXN0cnVjdHVyZS9zcmMvbGliL2RhdGEtc3RydWN0dXJlL0xpbmtlZF9MaXN0LmpzIl0sIm5hbWVzIjpbIkxpbmtlZExpc3QiLCJhcHBlbmQiLCJkYXRhIiwiX2V4aXN0IiwiaGVhZCIsIkxpc3RJdGVtIiwiY3VycmVudCIsIm5leHQiLCJwcmVwZW5kIiwibmV3Rmlyc3QiLCJkZWxldGVCeVZhbCIsInZhbHVlIiwiY29udGFpbnMiLCJjbGVhbiIsImNvbmZpcm0iLCJsZW5ndGgiLCJjb3VudCIsImxhc3RJdGVtIiwidG9BcnJheSIsInJlcyIsInB1c2giLCJpdGVtIiwiY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7SUFDYUEsVSxXQUFBQSxVLEdBQU4sTUFBTUEsVUFBTixDQUFpQjtBQUNwQkMsV0FBT0MsSUFBUCxFQUFhO0FBQ1QsWUFBRyxDQUFDLEtBQUtDLE1BQUwsQ0FBWSxLQUFLQyxJQUFqQixDQUFKLEVBQTRCO0FBQ3hCLGlCQUFLQSxJQUFMLEdBQVksSUFBSUMsUUFBSixDQUFhSCxJQUFiLENBQVo7QUFDQTtBQUNIO0FBQ0QsWUFBSUksVUFBVSxLQUFLRixJQUFuQjtBQUNBLGVBQU0sS0FBS0QsTUFBTCxDQUFZRyxRQUFRQyxJQUFwQixDQUFOLEVBQWlDO0FBQzdCRCxzQkFBVUEsUUFBUUMsSUFBbEI7QUFDSDtBQUNERCxnQkFBUUMsSUFBUixHQUFlLElBQUlGLFFBQUosQ0FBYUgsSUFBYixDQUFmO0FBQ0g7QUFDRE0sWUFBUU4sSUFBUixFQUFjO0FBQ1YsWUFBSU8sV0FBVyxJQUFJSixRQUFKLENBQWFILElBQWIsQ0FBZjtBQUNBTyxpQkFBU0YsSUFBVCxHQUFnQixLQUFLSCxJQUFyQjtBQUNBLGFBQUtBLElBQUwsR0FBWUssUUFBWjtBQUNIO0FBQ0RDLGdCQUFZQyxLQUFaLEVBQW1CO0FBQ2YsWUFBRyxDQUFDLEtBQUtSLE1BQUwsQ0FBWSxLQUFLQyxJQUFqQixDQUFKLEVBQTRCO0FBQzVCO0FBQ0EsWUFBRyxLQUFLQSxJQUFMLENBQVVGLElBQVYsSUFBa0JTLEtBQXJCLEVBQTRCO0FBQ3hCLGlCQUFLUCxJQUFMLEdBQVksS0FBS0EsSUFBTCxDQUFVRyxJQUF0QjtBQUNIO0FBQ0QsWUFBSUQsVUFBVSxLQUFLRixJQUFuQjtBQUNBLGVBQU0sS0FBS0QsTUFBTCxDQUFZRyxRQUFRQyxJQUFwQixDQUFOLEVBQWlDO0FBQzdCLGdCQUFHRCxRQUFRQyxJQUFSLENBQWFMLElBQWIsSUFBcUJTLEtBQXhCLEVBQStCO0FBQzNCTCx3QkFBUUMsSUFBUixHQUFlRCxRQUFRQyxJQUFSLENBQWFBLElBQTVCO0FBQ0EsdUJBQU8sSUFBUDtBQUNIO0FBQ0RELHNCQUFVQSxRQUFRQyxJQUFsQjtBQUNIO0FBQ0QsZUFBTyxLQUFQO0FBQ0g7QUFDREssYUFBU0QsS0FBVCxFQUFnQjtBQUNaLFlBQUlMLFVBQVUsS0FBS0YsSUFBbkI7QUFDQSxlQUFNLEtBQUtELE1BQUwsQ0FBWUcsT0FBWixDQUFOLEVBQTJCO0FBQ3ZCLGdCQUFHQSxRQUFRSixJQUFSLElBQWdCUyxLQUFuQixFQUEwQixPQUFPLElBQVA7QUFDMUJMLHNCQUFVQSxRQUFRQyxJQUFsQjtBQUNIO0FBQ0QsZUFBTyxLQUFQO0FBQ0g7QUFDRE0sVUFBTUMsVUFBVSxLQUFoQixFQUF1QjtBQUNuQixZQUFHLENBQUNBLE9BQUosRUFBYTtBQUNiLGFBQUtWLElBQUwsR0FBWSxJQUFaO0FBQ0g7QUFDRFcsYUFBUTtBQUNKLFlBQUlDLFFBQVEsQ0FBWjtBQUFBLFlBQ0lWLFVBQVUsS0FBS0YsSUFEbkI7QUFFQSxlQUFNLEtBQUtELE1BQUwsQ0FBWUcsT0FBWixDQUFOLEVBQTRCO0FBQ3hCVTtBQUNBVixzQkFBVUEsUUFBUUMsSUFBbEI7QUFDSDtBQUNELGVBQU9TLEtBQVA7QUFDSDtBQUNEQyxlQUFXO0FBQ1AsWUFBSVgsVUFBVSxLQUFLRixJQUFuQjtBQUNBLGVBQU0sS0FBS0QsTUFBTCxDQUFZRyxRQUFRQyxJQUFwQixDQUFOLEVBQWlDO0FBQzdCRCxzQkFBVUEsUUFBUUMsSUFBbEI7QUFDSDtBQUNELGVBQU9ELE9BQVA7QUFDSDtBQUNEWSxjQUFVO0FBQ04sWUFBSUMsTUFBTSxFQUFWO0FBQUEsWUFDSWIsVUFBVSxLQUFLRixJQURuQjtBQUVBLFlBQUdFLFdBQVcsSUFBZCxFQUFvQixPQUFPYSxHQUFQO0FBQ3BCLGVBQU0sS0FBS2hCLE1BQUwsQ0FBWUcsT0FBWixDQUFOLEVBQTJCO0FBQ3ZCYSxnQkFBSUMsSUFBSixDQUFTZCxRQUFRSixJQUFqQjtBQUNBSSxzQkFBVUEsUUFBUUMsSUFBbEI7QUFDSDtBQUNELGVBQU9ZLEdBQVA7QUFDSDs7QUFFRDs7Ozs7O0FBTUFoQixXQUFPa0IsSUFBUCxFQUFhO0FBQ1QsZUFBTyxPQUFPQSxJQUFQLElBQWUsV0FBdEI7QUFDSDtBQWhGbUIsQztJQW1GbEJoQixRLEdBQU4sTUFBTUEsUUFBTixDQUFlO0FBQ1hpQixnQkFBWXBCLElBQVosRUFBa0I7QUFDZCxhQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDSDtBQUhVLEMiLCJmaWxlIjoiTGlua2VkX0xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge19sfSBmcm9tICcuLi9fdXRsLmpzJztcbmV4cG9ydCBjbGFzcyBMaW5rZWRMaXN0IHtcbiAgICBhcHBlbmQoZGF0YSkge1xuICAgICAgICBpZighdGhpcy5fZXhpc3QodGhpcy5oZWFkKSkge1xuICAgICAgICAgICAgdGhpcy5oZWFkID0gbmV3IExpc3RJdGVtKGRhdGEpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xuICAgICAgICB3aGlsZSh0aGlzLl9leGlzdChjdXJyZW50Lm5leHQpKSB7XG4gICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnQubmV4dCA9IG5ldyBMaXN0SXRlbShkYXRhKTtcbiAgICB9XG4gICAgcHJlcGVuZChkYXRhKSB7XG4gICAgICAgIGxldCBuZXdGaXJzdCA9IG5ldyBMaXN0SXRlbShkYXRhKTtcbiAgICAgICAgbmV3Rmlyc3QubmV4dCA9IHRoaXMuaGVhZDtcbiAgICAgICAgdGhpcy5oZWFkID0gbmV3Rmlyc3Q7XG4gICAgfVxuICAgIGRlbGV0ZUJ5VmFsKHZhbHVlKSB7XG4gICAgICAgIGlmKCF0aGlzLl9leGlzdCh0aGlzLmhlYWQpKSByZXR1cm47XG4gICAgICAgIC8vRm9yIGZpcnN0IGl0ZW0gKGhlYWQpXG4gICAgICAgIGlmKHRoaXMuaGVhZC5kYXRhID09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmhlYWQgPSB0aGlzLmhlYWQubmV4dDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcbiAgICAgICAgd2hpbGUodGhpcy5fZXhpc3QoY3VycmVudC5uZXh0KSkge1xuICAgICAgICAgICAgaWYoY3VycmVudC5uZXh0LmRhdGEgPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50Lm5leHQgPSBjdXJyZW50Lm5leHQubmV4dDtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb250YWlucyh2YWx1ZSkge1xuICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcbiAgICAgICAgd2hpbGUodGhpcy5fZXhpc3QoY3VycmVudCkpe1xuICAgICAgICAgICAgaWYoY3VycmVudC5kYXRhID09IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjbGVhbihjb25maXJtID0gZmFsc2UpIHtcbiAgICAgICAgaWYoIWNvbmZpcm0pIHJldHVybjtcbiAgICAgICAgdGhpcy5oZWFkID0gbnVsbDtcbiAgICB9XG4gICAgbGVuZ3RoKCl7XG4gICAgICAgIGxldCBjb3VudCA9IDAsXG4gICAgICAgICAgICBjdXJyZW50ID0gdGhpcy5oZWFkO1xuICAgICAgICB3aGlsZSh0aGlzLl9leGlzdChjdXJyZW50KSkge1xuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvdW50O1xuICAgIH1cbiAgICBsYXN0SXRlbSgpIHtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG4gICAgICAgIHdoaWxlKHRoaXMuX2V4aXN0KGN1cnJlbnQubmV4dCkpIHtcbiAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGN1cnJlbnQ7XG4gICAgfVxuICAgIHRvQXJyYXkoKSB7XG4gICAgICAgIGxldCByZXMgPSBbXSxcbiAgICAgICAgICAgIGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG4gICAgICAgIGlmKGN1cnJlbnQgPT0gbnVsbCkgcmV0dXJuIHJlcztcbiAgICAgICAgd2hpbGUodGhpcy5fZXhpc3QoY3VycmVudCkpe1xuICAgICAgICAgICAgcmVzLnB1c2goY3VycmVudC5kYXRhKTtcbiAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJZiB0eXBlIG9mIGl0ZW0gbm90IGVxdWFsIHVuZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpdGVtXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfZXhpc3QoaXRlbSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIGl0ZW0gIT0gJ3VuZGVmaW5lZCc7XG4gICAgfVxufVxuXG5jbGFzcyBMaXN0SXRlbSB7XG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIH1cbn1cblxuXG4iXX0=
},{"../_utl.js":1}],3:[function(require,module,exports){
'use strict';

var _utl = require('../lib/_utl.js');

var _Linked_List = require('../lib/data-structure/Linked_List.js');

var list = new _Linked_List.LinkedList();

(0, _utl._l)(`clean list`, list);

var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'last'];

data.map(el => list.append(el));

(0, _utl._l)('append', list);

list.prepend(0);

(0, _utl._l)('prepend', list);

(0, _utl._l)('->>del', list.deleteByVal(5));

(0, _utl._l)('delete', list);

(0, _utl._l)('count', list.length(), list);

(0, _utl._l)('if 3', list.contains(2));

(0, _utl._l)('last', list.lastItem());

list.clean(true);
(0, _utl._l)('clean', list);

var arr = list.toArray();
(0, _utl._l)('toArray', arr);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvZXMtNi1kYXRhLXN0cnVjdHVyZS9zcmMvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbImxpc3QiLCJkYXRhIiwibWFwIiwiZWwiLCJhcHBlbmQiLCJwcmVwZW5kIiwiZGVsZXRlQnlWYWwiLCJsZW5ndGgiLCJjb250YWlucyIsImxhc3RJdGVtIiwiY2xlYW4iLCJhcnIiLCJ0b0FycmF5Il0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUVBLElBQUlBLE9BQU8sNkJBQVg7O0FBRUEsYUFBSSxZQUFKLEVBQWlCQSxJQUFqQjs7QUFFQSxJQUFJQyxPQUFPLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsRUFBaUIsQ0FBakIsRUFBbUIsTUFBbkIsQ0FBWDs7QUFFQUEsS0FBS0MsR0FBTCxDQUFTQyxNQUFJSCxLQUFLSSxNQUFMLENBQVlELEVBQVosQ0FBYjs7QUFFQSxhQUFHLFFBQUgsRUFBYUgsSUFBYjs7QUFFQUEsS0FBS0ssT0FBTCxDQUFhLENBQWI7O0FBRUEsYUFBRyxTQUFILEVBQWNMLElBQWQ7O0FBRUEsYUFBRyxRQUFILEVBQWFBLEtBQUtNLFdBQUwsQ0FBaUIsQ0FBakIsQ0FBYjs7QUFFQSxhQUFHLFFBQUgsRUFBYU4sSUFBYjs7QUFFQSxhQUFHLE9BQUgsRUFBWUEsS0FBS08sTUFBTCxFQUFaLEVBQTJCUCxJQUEzQjs7QUFFQSxhQUFHLE1BQUgsRUFBV0EsS0FBS1EsUUFBTCxDQUFjLENBQWQsQ0FBWDs7QUFFQSxhQUFHLE1BQUgsRUFBV1IsS0FBS1MsUUFBTCxFQUFYOztBQUVBVCxLQUFLVSxLQUFMLENBQVcsSUFBWDtBQUNBLGFBQUcsT0FBSCxFQUFZVixJQUFaOztBQUVBLElBQUlXLE1BQU1YLEtBQUtZLE9BQUwsRUFBVjtBQUNBLGFBQUcsU0FBSCxFQUFjRCxHQUFkIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge19sfSBmcm9tICcuLi9saWIvX3V0bC5qcyc7XG5pbXBvcnQge0xpbmtlZExpc3R9IGZyb20gJy4uL2xpYi9kYXRhLXN0cnVjdHVyZS9MaW5rZWRfTGlzdC5qcyc7XG5cbnZhciBsaXN0ID0gbmV3IExpbmtlZExpc3QoKTtcblxuX2woYGNsZWFuIGxpc3RgLCBsaXN0KTtcblxudmFyIGRhdGEgPSBbMSwyLDMsNCw1LDYsNyw4LDksJ2xhc3QnXTtcblxuZGF0YS5tYXAoZWw9Pmxpc3QuYXBwZW5kKGVsKSk7XG5cbl9sKCdhcHBlbmQnLCBsaXN0KTtcblxubGlzdC5wcmVwZW5kKDApO1xuXG5fbCgncHJlcGVuZCcsIGxpc3QpO1xuXG5fbCgnLT4+ZGVsJywgbGlzdC5kZWxldGVCeVZhbCg1KSk7XG5cbl9sKCdkZWxldGUnLCBsaXN0KTtcblxuX2woJ2NvdW50JywgbGlzdC5sZW5ndGgoKSwgbGlzdCk7XG5cbl9sKCdpZiAzJywgbGlzdC5jb250YWlucygyKSk7XG5cbl9sKCdsYXN0JywgbGlzdC5sYXN0SXRlbSgpKVxuXG5saXN0LmNsZWFuKHRydWUpO1xuX2woJ2NsZWFuJywgbGlzdCk7XG5cbnZhciBhcnIgPSBsaXN0LnRvQXJyYXkoKTtcbl9sKCd0b0FycmF5JywgYXJyKTsiXX0=
},{"../lib/_utl.js":1,"../lib/data-structure/Linked_List.js":2}]},{},[3])