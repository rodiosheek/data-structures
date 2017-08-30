(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._l = _l;

/**
 * Just console.log )
 * @param args
 * @private
 */

function _l(...args) {
  console.log(...args);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvZXMtNi1kYXRhLXN0cnVjdHVyZS9zcmMvbGliL191dGwuanMiXSwibmFtZXMiOlsiX2wiLCJhcmdzIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFBUUEsRSxHQUFBQSxFOztBQUVSOzs7Ozs7QUFLQSxTQUFTQSxFQUFULENBQVksR0FBR0MsSUFBZixFQUFxQjtBQUNqQkMsVUFBUUMsR0FBUixDQUFZLEdBQUdGLElBQWY7QUFDSCIsImZpbGUiOiJfdXRsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHtfbH07XG5cbi8qKlxuICogSnVzdCBjb25zb2xlLmxvZyApXG4gKiBAcGFyYW0gYXJnc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gX2woLi4uYXJncykge1xuICAgIGNvbnNvbGUubG9nKC4uLmFyZ3MpO1xufVxuIl19
},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ListItem = exports.LinkedList = undefined;

var _utl = require('../../_utl.js');

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
        if (current == null) return count;
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
     * If type of item not equal to undefined
     * @param item
     * @returns {boolean}
     * @private
     */
    _exist(item) {
        return typeof item != 'undefined';
    }
};
let ListItem = exports.ListItem = class ListItem {
    constructor(data) {
        this.data = data;
    }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvZXMtNi1kYXRhLXN0cnVjdHVyZS9zcmMvbGliL2RhdGEtc3RydWN0dXJlL2xpbmtlZC1saXN0L0xpbmtlZF9MaXN0LmpzIl0sIm5hbWVzIjpbIkxpbmtlZExpc3QiLCJhcHBlbmQiLCJkYXRhIiwiX2V4aXN0IiwiaGVhZCIsIkxpc3RJdGVtIiwiY3VycmVudCIsIm5leHQiLCJwcmVwZW5kIiwibmV3Rmlyc3QiLCJkZWxldGVCeVZhbCIsInZhbHVlIiwiY29udGFpbnMiLCJjbGVhbiIsImNvbmZpcm0iLCJsZW5ndGgiLCJjb3VudCIsImxhc3RJdGVtIiwidG9BcnJheSIsInJlcyIsInB1c2giLCJpdGVtIiwiY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7SUFFYUEsVSxXQUFBQSxVLEdBQU4sTUFBTUEsVUFBTixDQUFpQjtBQUNwQkMsV0FBT0MsSUFBUCxFQUFhO0FBQ1QsWUFBRyxDQUFDLEtBQUtDLE1BQUwsQ0FBWSxLQUFLQyxJQUFqQixDQUFKLEVBQTRCO0FBQ3hCLGlCQUFLQSxJQUFMLEdBQVksSUFBSUMsUUFBSixDQUFhSCxJQUFiLENBQVo7QUFDQTtBQUNIO0FBQ0QsWUFBSUksVUFBVSxLQUFLRixJQUFuQjtBQUNBLGVBQU0sS0FBS0QsTUFBTCxDQUFZRyxRQUFRQyxJQUFwQixDQUFOLEVBQWlDO0FBQzdCRCxzQkFBVUEsUUFBUUMsSUFBbEI7QUFDSDtBQUNERCxnQkFBUUMsSUFBUixHQUFlLElBQUlGLFFBQUosQ0FBYUgsSUFBYixDQUFmO0FBQ0g7QUFDRE0sWUFBUU4sSUFBUixFQUFjO0FBQ1YsWUFBSU8sV0FBVyxJQUFJSixRQUFKLENBQWFILElBQWIsQ0FBZjtBQUNBTyxpQkFBU0YsSUFBVCxHQUFnQixLQUFLSCxJQUFyQjtBQUNBLGFBQUtBLElBQUwsR0FBWUssUUFBWjtBQUNIO0FBQ0RDLGdCQUFZQyxLQUFaLEVBQW1CO0FBQ2YsWUFBRyxDQUFDLEtBQUtSLE1BQUwsQ0FBWSxLQUFLQyxJQUFqQixDQUFKLEVBQTRCO0FBQzVCO0FBQ0EsWUFBRyxLQUFLQSxJQUFMLENBQVVGLElBQVYsSUFBa0JTLEtBQXJCLEVBQTRCO0FBQ3hCLGlCQUFLUCxJQUFMLEdBQVksS0FBS0EsSUFBTCxDQUFVRyxJQUF0QjtBQUNIO0FBQ0QsWUFBSUQsVUFBVSxLQUFLRixJQUFuQjtBQUNBLGVBQU0sS0FBS0QsTUFBTCxDQUFZRyxRQUFRQyxJQUFwQixDQUFOLEVBQWlDO0FBQzdCLGdCQUFHRCxRQUFRQyxJQUFSLENBQWFMLElBQWIsSUFBcUJTLEtBQXhCLEVBQStCO0FBQzNCTCx3QkFBUUMsSUFBUixHQUFlRCxRQUFRQyxJQUFSLENBQWFBLElBQTVCO0FBQ0EsdUJBQU8sSUFBUDtBQUNIO0FBQ0RELHNCQUFVQSxRQUFRQyxJQUFsQjtBQUNIO0FBQ0QsZUFBTyxLQUFQO0FBQ0g7QUFDREssYUFBU0QsS0FBVCxFQUFnQjtBQUNaLFlBQUlMLFVBQVUsS0FBS0YsSUFBbkI7QUFDQSxlQUFNLEtBQUtELE1BQUwsQ0FBWUcsT0FBWixDQUFOLEVBQTJCO0FBQ3ZCLGdCQUFHQSxRQUFRSixJQUFSLElBQWdCUyxLQUFuQixFQUEwQixPQUFPLElBQVA7QUFDMUJMLHNCQUFVQSxRQUFRQyxJQUFsQjtBQUNIO0FBQ0QsZUFBTyxLQUFQO0FBQ0g7QUFDRE0sVUFBTUMsVUFBVSxLQUFoQixFQUF1QjtBQUNuQixZQUFHLENBQUNBLE9BQUosRUFBYTtBQUNiLGFBQUtWLElBQUwsR0FBWSxJQUFaO0FBQ0g7QUFDRFcsYUFBUTtBQUNKLFlBQUlDLFFBQVEsQ0FBWjtBQUFBLFlBQ0lWLFVBQVUsS0FBS0YsSUFEbkI7QUFFQSxZQUFHRSxXQUFXLElBQWQsRUFBb0IsT0FBT1UsS0FBUDtBQUNwQixlQUFNLEtBQUtiLE1BQUwsQ0FBWUcsT0FBWixDQUFOLEVBQTRCO0FBQ3hCVTtBQUNBVixzQkFBVUEsUUFBUUMsSUFBbEI7QUFDSDtBQUNELGVBQU9TLEtBQVA7QUFDSDtBQUNEQyxlQUFXO0FBQ1AsWUFBSVgsVUFBVSxLQUFLRixJQUFuQjtBQUNBLGVBQU0sS0FBS0QsTUFBTCxDQUFZRyxRQUFRQyxJQUFwQixDQUFOLEVBQWlDO0FBQzdCRCxzQkFBVUEsUUFBUUMsSUFBbEI7QUFDSDtBQUNELGVBQU9ELE9BQVA7QUFDSDtBQUNEWSxjQUFVO0FBQ04sWUFBSUMsTUFBTSxFQUFWO0FBQUEsWUFDSWIsVUFBVSxLQUFLRixJQURuQjtBQUVBLFlBQUdFLFdBQVcsSUFBZCxFQUFvQixPQUFPYSxHQUFQO0FBQ3BCLGVBQU0sS0FBS2hCLE1BQUwsQ0FBWUcsT0FBWixDQUFOLEVBQTJCO0FBQ3ZCYSxnQkFBSUMsSUFBSixDQUFTZCxRQUFRSixJQUFqQjtBQUNBSSxzQkFBVUEsUUFBUUMsSUFBbEI7QUFDSDtBQUNELGVBQU9ZLEdBQVA7QUFDSDs7QUFFRDs7Ozs7O0FBTUFoQixXQUFPa0IsSUFBUCxFQUFhO0FBQ1QsZUFBTyxPQUFPQSxJQUFQLElBQWUsV0FBdEI7QUFDSDtBQWpGbUIsQztJQW9GWGhCLFEsV0FBQUEsUSxHQUFOLE1BQU1BLFFBQU4sQ0FBZTtBQUNsQmlCLGdCQUFZcEIsSUFBWixFQUFrQjtBQUNkLGFBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNIO0FBSGlCLEMiLCJmaWxlIjoiTGlua2VkX0xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge19sfSBmcm9tICcuLi8uLi9fdXRsLmpzJztcblxuZXhwb3J0IGNsYXNzIExpbmtlZExpc3Qge1xuICAgIGFwcGVuZChkYXRhKSB7XG4gICAgICAgIGlmKCF0aGlzLl9leGlzdCh0aGlzLmhlYWQpKSB7XG4gICAgICAgICAgICB0aGlzLmhlYWQgPSBuZXcgTGlzdEl0ZW0oZGF0YSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG4gICAgICAgIHdoaWxlKHRoaXMuX2V4aXN0KGN1cnJlbnQubmV4dCkpIHtcbiAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudC5uZXh0ID0gbmV3IExpc3RJdGVtKGRhdGEpO1xuICAgIH1cbiAgICBwcmVwZW5kKGRhdGEpIHtcbiAgICAgICAgbGV0IG5ld0ZpcnN0ID0gbmV3IExpc3RJdGVtKGRhdGEpO1xuICAgICAgICBuZXdGaXJzdC5uZXh0ID0gdGhpcy5oZWFkO1xuICAgICAgICB0aGlzLmhlYWQgPSBuZXdGaXJzdDtcbiAgICB9XG4gICAgZGVsZXRlQnlWYWwodmFsdWUpIHtcbiAgICAgICAgaWYoIXRoaXMuX2V4aXN0KHRoaXMuaGVhZCkpIHJldHVybjtcbiAgICAgICAgLy9Gb3IgZmlyc3QgaXRlbSAoaGVhZClcbiAgICAgICAgaWYodGhpcy5oZWFkLmRhdGEgPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuaGVhZCA9IHRoaXMuaGVhZC5uZXh0O1xuICAgICAgICB9XG4gICAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xuICAgICAgICB3aGlsZSh0aGlzLl9leGlzdChjdXJyZW50Lm5leHQpKSB7XG4gICAgICAgICAgICBpZihjdXJyZW50Lm5leHQuZGF0YSA9PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnQubmV4dCA9IGN1cnJlbnQubmV4dC5uZXh0O1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnRhaW5zKHZhbHVlKSB7XG4gICAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xuICAgICAgICB3aGlsZSh0aGlzLl9leGlzdChjdXJyZW50KSl7XG4gICAgICAgICAgICBpZihjdXJyZW50LmRhdGEgPT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNsZWFuKGNvbmZpcm0gPSBmYWxzZSkge1xuICAgICAgICBpZighY29uZmlybSkgcmV0dXJuO1xuICAgICAgICB0aGlzLmhlYWQgPSBudWxsO1xuICAgIH1cbiAgICBsZW5ndGgoKXtcbiAgICAgICAgbGV0IGNvdW50ID0gMCxcbiAgICAgICAgICAgIGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG4gICAgICAgIGlmKGN1cnJlbnQgPT0gbnVsbCkgcmV0dXJuIGNvdW50O1xuICAgICAgICB3aGlsZSh0aGlzLl9leGlzdChjdXJyZW50KSkge1xuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvdW50O1xuICAgIH1cbiAgICBsYXN0SXRlbSgpIHtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG4gICAgICAgIHdoaWxlKHRoaXMuX2V4aXN0KGN1cnJlbnQubmV4dCkpIHtcbiAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGN1cnJlbnQ7XG4gICAgfVxuICAgIHRvQXJyYXkoKSB7XG4gICAgICAgIGxldCByZXMgPSBbXSxcbiAgICAgICAgICAgIGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG4gICAgICAgIGlmKGN1cnJlbnQgPT0gbnVsbCkgcmV0dXJuIHJlcztcbiAgICAgICAgd2hpbGUodGhpcy5fZXhpc3QoY3VycmVudCkpe1xuICAgICAgICAgICAgcmVzLnB1c2goY3VycmVudC5kYXRhKTtcbiAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJZiB0eXBlIG9mIGl0ZW0gbm90IGVxdWFsIHRvIHVuZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpdGVtXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfZXhpc3QoaXRlbSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIGl0ZW0gIT0gJ3VuZGVmaW5lZCc7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGlzdEl0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB9XG59XG5cblxuIl19
},{"../../_utl.js":1}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Stack = undefined;

var _utl = require('../../_utl.js');

let Stack = exports.Stack = class Stack {
    constructor() {
        this.stack = [];
    }
    push(data) {
        let item = new StackItem(data);
        this.stack.push(item);
    }
    pop() {
        let stack = this.stack,
            length = stack.length;
        if (length == 0) return false;
        let res = stack[length - 1].data;
        this.stack.length = length - 1;
        return res;
    }
    pip() {
        let res = [];
        this.stack.map((el, key) => {
            res[key] = el.data;
        });
        return res;
    }
};
let StackItem = class StackItem {
    constructor(data) {
        this.data = data;
    }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvZXMtNi1kYXRhLXN0cnVjdHVyZS9zcmMvbGliL2RhdGEtc3RydWN0dXJlL3N0YWNrL1N0YWNrLmpzIl0sIm5hbWVzIjpbIlN0YWNrIiwiY29uc3RydWN0b3IiLCJzdGFjayIsInB1c2giLCJkYXRhIiwiaXRlbSIsIlN0YWNrSXRlbSIsInBvcCIsImxlbmd0aCIsInJlcyIsInBpcCIsIm1hcCIsImVsIiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0lBRWFBLEssV0FBQUEsSyxHQUFOLE1BQU1BLEtBQU4sQ0FBWTtBQUNmQyxrQkFBYTtBQUNULGFBQUtDLEtBQUwsR0FBYSxFQUFiO0FBQ0g7QUFDREMsU0FBS0MsSUFBTCxFQUFXO0FBQ1AsWUFBSUMsT0FBTyxJQUFJQyxTQUFKLENBQWNGLElBQWQsQ0FBWDtBQUNBLGFBQUtGLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQkUsSUFBaEI7QUFDSDtBQUNERSxVQUFLO0FBQ0QsWUFBSUwsUUFBUSxLQUFLQSxLQUFqQjtBQUFBLFlBQ0lNLFNBQVNOLE1BQU1NLE1BRG5CO0FBRUEsWUFBR0EsVUFBVSxDQUFiLEVBQWdCLE9BQU8sS0FBUDtBQUNoQixZQUFJQyxNQUFNUCxNQUFNTSxTQUFTLENBQWYsRUFBa0JKLElBQTVCO0FBQ0EsYUFBS0YsS0FBTCxDQUFXTSxNQUFYLEdBQW9CQSxTQUFTLENBQTdCO0FBQ0EsZUFBT0MsR0FBUDtBQUNIO0FBQ0RDLFVBQUs7QUFDRCxZQUFJRCxNQUFNLEVBQVY7QUFDQSxhQUFLUCxLQUFMLENBQVdTLEdBQVgsQ0FBZSxDQUFDQyxFQUFELEVBQUtDLEdBQUwsS0FBVztBQUN0QkosZ0JBQUlJLEdBQUosSUFBV0QsR0FBR1IsSUFBZDtBQUNILFNBRkQ7QUFHQSxlQUFPSyxHQUFQO0FBQ0g7QUF0QmMsQztJQXlCYkgsUyxHQUFOLE1BQU1BLFNBQU4sQ0FBZ0I7QUFDWkwsZ0JBQVlHLElBQVosRUFBa0I7QUFDZCxhQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDSDtBQUhXLEMiLCJmaWxlIjoiU3RhY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge19sfSBmcm9tICcuLi8uLi9fdXRsLmpzJztcblxuZXhwb3J0IGNsYXNzIFN0YWNrIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnN0YWNrID0gW107XG4gICAgfVxuICAgIHB1c2goZGF0YSkge1xuICAgICAgICBsZXQgaXRlbSA9IG5ldyBTdGFja0l0ZW0oZGF0YSk7XG4gICAgICAgIHRoaXMuc3RhY2sucHVzaChpdGVtKTtcbiAgICB9XG4gICAgcG9wKCl7XG4gICAgICAgIGxldCBzdGFjayA9IHRoaXMuc3RhY2ssXG4gICAgICAgICAgICBsZW5ndGggPSBzdGFjay5sZW5ndGg7XG4gICAgICAgIGlmKGxlbmd0aCA9PSAwKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGxldCByZXMgPSBzdGFja1tsZW5ndGggLSAxXS5kYXRhO1xuICAgICAgICB0aGlzLnN0YWNrLmxlbmd0aCA9IGxlbmd0aCAtIDE7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuICAgIHBpcCgpe1xuICAgICAgICBsZXQgcmVzID0gW107XG4gICAgICAgIHRoaXMuc3RhY2subWFwKChlbCwga2V5KT0+e1xuICAgICAgICAgICAgcmVzW2tleV0gPSBlbC5kYXRhO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG59XG5cbmNsYXNzIFN0YWNrSXRlbSB7XG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIH1cbn0iXX0=
},{"../../_utl.js":1}],4:[function(require,module,exports){
'use strict';

var _utl = require('../lib/_utl.js');

var _Linked_List = require('../lib/data-structure/linked-list/Linked_List.js');

var _Stack = require('../lib/data-structure/stack/Stack.js');

var stack = new _Stack.Stack();

var data = [1, 2, 3, 4, 5, 6, 7];

data.map(el => stack.push(el));

(0, _utl._l)(stack.pop());
(0, _utl._l)(stack.pop());

(0, _utl._l)(stack.pip());

let test1 = {
    a: 2,
    test: function () {
        return `Test a = ${this.a}`;
    }
};

stack.push(test1);

stack.push('string');

(0, _utl._l)(stack.pip());
(0, _utl._l)(stack);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvZXMtNi1kYXRhLXN0cnVjdHVyZS9zcmMvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbInN0YWNrIiwiZGF0YSIsIm1hcCIsImVsIiwicHVzaCIsInBvcCIsInBpcCIsInRlc3QxIiwiYSIsInRlc3QiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUEsSUFBSUEsUUFBUSxrQkFBWjs7QUFFQSxJQUFJQyxPQUFPLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixDQUFYOztBQUVBQSxLQUFLQyxHQUFMLENBQVNDLE1BQUlILE1BQU1JLElBQU4sQ0FBV0QsRUFBWCxDQUFiOztBQUlBLGFBQUdILE1BQU1LLEdBQU4sRUFBSDtBQUNBLGFBQUdMLE1BQU1LLEdBQU4sRUFBSDs7QUFFQSxhQUFHTCxNQUFNTSxHQUFOLEVBQUg7O0FBRUEsSUFBSUMsUUFBUTtBQUNSQyxPQUFHLENBREs7QUFFUkMsVUFBTSxZQUFZO0FBQ2QsZUFBUSxZQUFXLEtBQUtELENBQUUsRUFBMUI7QUFDSDtBQUpPLENBQVo7O0FBT0FSLE1BQU1JLElBQU4sQ0FBV0csS0FBWDs7QUFHQVAsTUFBTUksSUFBTixDQUFXLFFBQVg7O0FBRUEsYUFBR0osTUFBTU0sR0FBTixFQUFIO0FBQ0EsYUFBR04sS0FBSCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtfbH0gZnJvbSAnLi4vbGliL191dGwuanMnO1xuaW1wb3J0IHtMaW5rZWRMaXN0fSBmcm9tICcuLi9saWIvZGF0YS1zdHJ1Y3R1cmUvbGlua2VkLWxpc3QvTGlua2VkX0xpc3QuanMnO1xuaW1wb3J0IHtTdGFja30gZnJvbSAnLi4vbGliL2RhdGEtc3RydWN0dXJlL3N0YWNrL1N0YWNrLmpzJztcblxudmFyIHN0YWNrID0gbmV3IFN0YWNrKCk7XG5cbnZhciBkYXRhID0gWzEsMiwzLDQsNSw2LDddO1xuXG5kYXRhLm1hcChlbD0+c3RhY2sucHVzaChlbCkpO1xuXG5cblxuX2woc3RhY2sucG9wKCkpO1xuX2woc3RhY2sucG9wKCkpO1xuXG5fbChzdGFjay5waXAoKSk7XG5cbmxldCB0ZXN0MSA9IHtcbiAgICBhOiAyLFxuICAgIHRlc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGBUZXN0IGEgPSAke3RoaXMuYX1gO1xuICAgIH1cbn07XG5cbnN0YWNrLnB1c2godGVzdDEpO1xuXG5cbnN0YWNrLnB1c2goJ3N0cmluZycpO1xuXG5fbChzdGFjay5waXAoKSk7XG5fbChzdGFjayk7Il19
},{"../lib/_utl.js":1,"../lib/data-structure/linked-list/Linked_List.js":2,"../lib/data-structure/stack/Stack.js":3}]},{},[4])