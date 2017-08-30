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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvZXMtNi1kYXRhLXN0cnVjdHVyZS9zcmMvbGliL2RhdGEtc3RydWN0dXJlL0xpbmtlZF9MaXN0LmpzIl0sIm5hbWVzIjpbIkxpbmtlZExpc3QiLCJhcHBlbmQiLCJkYXRhIiwiX2V4aXN0IiwiaGVhZCIsIkxpc3RJdGVtIiwiY3VycmVudCIsIm5leHQiLCJwcmVwZW5kIiwibmV3Rmlyc3QiLCJkZWxldGVCeVZhbCIsInZhbHVlIiwiY29udGFpbnMiLCJjbGVhbiIsImNvbmZpcm0iLCJsZW5ndGgiLCJjb3VudCIsImxhc3RJdGVtIiwidG9BcnJheSIsInJlcyIsInB1c2giLCJpdGVtIiwiY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7SUFFYUEsVSxXQUFBQSxVLEdBQU4sTUFBTUEsVUFBTixDQUFpQjtBQUNwQkMsV0FBT0MsSUFBUCxFQUFhO0FBQ1QsWUFBRyxDQUFDLEtBQUtDLE1BQUwsQ0FBWSxLQUFLQyxJQUFqQixDQUFKLEVBQTRCO0FBQ3hCLGlCQUFLQSxJQUFMLEdBQVksSUFBSUMsUUFBSixDQUFhSCxJQUFiLENBQVo7QUFDQTtBQUNIO0FBQ0QsWUFBSUksVUFBVSxLQUFLRixJQUFuQjtBQUNBLGVBQU0sS0FBS0QsTUFBTCxDQUFZRyxRQUFRQyxJQUFwQixDQUFOLEVBQWlDO0FBQzdCRCxzQkFBVUEsUUFBUUMsSUFBbEI7QUFDSDtBQUNERCxnQkFBUUMsSUFBUixHQUFlLElBQUlGLFFBQUosQ0FBYUgsSUFBYixDQUFmO0FBQ0g7QUFDRE0sWUFBUU4sSUFBUixFQUFjO0FBQ1YsWUFBSU8sV0FBVyxJQUFJSixRQUFKLENBQWFILElBQWIsQ0FBZjtBQUNBTyxpQkFBU0YsSUFBVCxHQUFnQixLQUFLSCxJQUFyQjtBQUNBLGFBQUtBLElBQUwsR0FBWUssUUFBWjtBQUNIO0FBQ0RDLGdCQUFZQyxLQUFaLEVBQW1CO0FBQ2YsWUFBRyxDQUFDLEtBQUtSLE1BQUwsQ0FBWSxLQUFLQyxJQUFqQixDQUFKLEVBQTRCO0FBQzVCO0FBQ0EsWUFBRyxLQUFLQSxJQUFMLENBQVVGLElBQVYsSUFBa0JTLEtBQXJCLEVBQTRCO0FBQ3hCLGlCQUFLUCxJQUFMLEdBQVksS0FBS0EsSUFBTCxDQUFVRyxJQUF0QjtBQUNIO0FBQ0QsWUFBSUQsVUFBVSxLQUFLRixJQUFuQjtBQUNBLGVBQU0sS0FBS0QsTUFBTCxDQUFZRyxRQUFRQyxJQUFwQixDQUFOLEVBQWlDO0FBQzdCLGdCQUFHRCxRQUFRQyxJQUFSLENBQWFMLElBQWIsSUFBcUJTLEtBQXhCLEVBQStCO0FBQzNCTCx3QkFBUUMsSUFBUixHQUFlRCxRQUFRQyxJQUFSLENBQWFBLElBQTVCO0FBQ0EsdUJBQU8sSUFBUDtBQUNIO0FBQ0RELHNCQUFVQSxRQUFRQyxJQUFsQjtBQUNIO0FBQ0QsZUFBTyxLQUFQO0FBQ0g7QUFDREssYUFBU0QsS0FBVCxFQUFnQjtBQUNaLFlBQUlMLFVBQVUsS0FBS0YsSUFBbkI7QUFDQSxlQUFNLEtBQUtELE1BQUwsQ0FBWUcsT0FBWixDQUFOLEVBQTJCO0FBQ3ZCLGdCQUFHQSxRQUFRSixJQUFSLElBQWdCUyxLQUFuQixFQUEwQixPQUFPLElBQVA7QUFDMUJMLHNCQUFVQSxRQUFRQyxJQUFsQjtBQUNIO0FBQ0QsZUFBTyxLQUFQO0FBQ0g7QUFDRE0sVUFBTUMsVUFBVSxLQUFoQixFQUF1QjtBQUNuQixZQUFHLENBQUNBLE9BQUosRUFBYTtBQUNiLGFBQUtWLElBQUwsR0FBWSxJQUFaO0FBQ0g7QUFDRFcsYUFBUTtBQUNKLFlBQUlDLFFBQVEsQ0FBWjtBQUFBLFlBQ0lWLFVBQVUsS0FBS0YsSUFEbkI7QUFFQSxZQUFHRSxXQUFXLElBQWQsRUFBb0IsT0FBT1UsS0FBUDtBQUNwQixlQUFNLEtBQUtiLE1BQUwsQ0FBWUcsT0FBWixDQUFOLEVBQTRCO0FBQ3hCVTtBQUNBVixzQkFBVUEsUUFBUUMsSUFBbEI7QUFDSDtBQUNELGVBQU9TLEtBQVA7QUFDSDtBQUNEQyxlQUFXO0FBQ1AsWUFBSVgsVUFBVSxLQUFLRixJQUFuQjtBQUNBLGVBQU0sS0FBS0QsTUFBTCxDQUFZRyxRQUFRQyxJQUFwQixDQUFOLEVBQWlDO0FBQzdCRCxzQkFBVUEsUUFBUUMsSUFBbEI7QUFDSDtBQUNELGVBQU9ELE9BQVA7QUFDSDtBQUNEWSxjQUFVO0FBQ04sWUFBSUMsTUFBTSxFQUFWO0FBQUEsWUFDSWIsVUFBVSxLQUFLRixJQURuQjtBQUVBLFlBQUdFLFdBQVcsSUFBZCxFQUFvQixPQUFPYSxHQUFQO0FBQ3BCLGVBQU0sS0FBS2hCLE1BQUwsQ0FBWUcsT0FBWixDQUFOLEVBQTJCO0FBQ3ZCYSxnQkFBSUMsSUFBSixDQUFTZCxRQUFRSixJQUFqQjtBQUNBSSxzQkFBVUEsUUFBUUMsSUFBbEI7QUFDSDtBQUNELGVBQU9ZLEdBQVA7QUFDSDs7QUFFRDs7Ozs7O0FBTUFoQixXQUFPa0IsSUFBUCxFQUFhO0FBQ1QsZUFBTyxPQUFPQSxJQUFQLElBQWUsV0FBdEI7QUFDSDtBQWpGbUIsQztJQW9GWGhCLFEsV0FBQUEsUSxHQUFOLE1BQU1BLFFBQU4sQ0FBZTtBQUNsQmlCLGdCQUFZcEIsSUFBWixFQUFrQjtBQUNkLGFBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNIO0FBSGlCLEMiLCJmaWxlIjoiTGlua2VkX0xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge19sfSBmcm9tICcuLi9fdXRsLmpzJztcblxuZXhwb3J0IGNsYXNzIExpbmtlZExpc3Qge1xuICAgIGFwcGVuZChkYXRhKSB7XG4gICAgICAgIGlmKCF0aGlzLl9leGlzdCh0aGlzLmhlYWQpKSB7XG4gICAgICAgICAgICB0aGlzLmhlYWQgPSBuZXcgTGlzdEl0ZW0oZGF0YSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG4gICAgICAgIHdoaWxlKHRoaXMuX2V4aXN0KGN1cnJlbnQubmV4dCkpIHtcbiAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudC5uZXh0ID0gbmV3IExpc3RJdGVtKGRhdGEpO1xuICAgIH1cbiAgICBwcmVwZW5kKGRhdGEpIHtcbiAgICAgICAgbGV0IG5ld0ZpcnN0ID0gbmV3IExpc3RJdGVtKGRhdGEpO1xuICAgICAgICBuZXdGaXJzdC5uZXh0ID0gdGhpcy5oZWFkO1xuICAgICAgICB0aGlzLmhlYWQgPSBuZXdGaXJzdDtcbiAgICB9XG4gICAgZGVsZXRlQnlWYWwodmFsdWUpIHtcbiAgICAgICAgaWYoIXRoaXMuX2V4aXN0KHRoaXMuaGVhZCkpIHJldHVybjtcbiAgICAgICAgLy9Gb3IgZmlyc3QgaXRlbSAoaGVhZClcbiAgICAgICAgaWYodGhpcy5oZWFkLmRhdGEgPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuaGVhZCA9IHRoaXMuaGVhZC5uZXh0O1xuICAgICAgICB9XG4gICAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xuICAgICAgICB3aGlsZSh0aGlzLl9leGlzdChjdXJyZW50Lm5leHQpKSB7XG4gICAgICAgICAgICBpZihjdXJyZW50Lm5leHQuZGF0YSA9PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnQubmV4dCA9IGN1cnJlbnQubmV4dC5uZXh0O1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnRhaW5zKHZhbHVlKSB7XG4gICAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xuICAgICAgICB3aGlsZSh0aGlzLl9leGlzdChjdXJyZW50KSl7XG4gICAgICAgICAgICBpZihjdXJyZW50LmRhdGEgPT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNsZWFuKGNvbmZpcm0gPSBmYWxzZSkge1xuICAgICAgICBpZighY29uZmlybSkgcmV0dXJuO1xuICAgICAgICB0aGlzLmhlYWQgPSBudWxsO1xuICAgIH1cbiAgICBsZW5ndGgoKXtcbiAgICAgICAgbGV0IGNvdW50ID0gMCxcbiAgICAgICAgICAgIGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG4gICAgICAgIGlmKGN1cnJlbnQgPT0gbnVsbCkgcmV0dXJuIGNvdW50O1xuICAgICAgICB3aGlsZSh0aGlzLl9leGlzdChjdXJyZW50KSkge1xuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvdW50O1xuICAgIH1cbiAgICBsYXN0SXRlbSgpIHtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG4gICAgICAgIHdoaWxlKHRoaXMuX2V4aXN0KGN1cnJlbnQubmV4dCkpIHtcbiAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGN1cnJlbnQ7XG4gICAgfVxuICAgIHRvQXJyYXkoKSB7XG4gICAgICAgIGxldCByZXMgPSBbXSxcbiAgICAgICAgICAgIGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG4gICAgICAgIGlmKGN1cnJlbnQgPT0gbnVsbCkgcmV0dXJuIHJlcztcbiAgICAgICAgd2hpbGUodGhpcy5fZXhpc3QoY3VycmVudCkpe1xuICAgICAgICAgICAgcmVzLnB1c2goY3VycmVudC5kYXRhKTtcbiAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJZiB0eXBlIG9mIGl0ZW0gbm90IGVxdWFsIHRvIHVuZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpdGVtXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfZXhpc3QoaXRlbSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIGl0ZW0gIT0gJ3VuZGVmaW5lZCc7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGlzdEl0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB9XG59XG5cblxuIl19
},{"../_utl.js":1}],3:[function(require,module,exports){
'use strict';

var _utl = require('../lib/_utl.js');

var _Linked_List = require('../lib/data-structure/Linked_List.js');

var list = new _Linked_List.LinkedList(),
    data = [1, 2, 3, 4];
data.map(el => list.append(el));

(0, _utl._l)(list);
var last = list.lastItem();

(0, _utl._l)(last);
(0, _utl._l)(last instanceof _Linked_List.LinkedList);

(0, _utl._l)(list.toArray());

(0, _utl._l)([1, 2, 3, 4].join('') == list.toArray().join(''));
(0, _utl._l)([1, 2, 3, 4] === list.toArray());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvZXMtNi1kYXRhLXN0cnVjdHVyZS9zcmMvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbImxpc3QiLCJkYXRhIiwibWFwIiwiZWwiLCJhcHBlbmQiLCJsYXN0IiwibGFzdEl0ZW0iLCJ0b0FycmF5Iiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFHQSxJQUFJQSxPQUFPLDZCQUFYO0FBQUEsSUFDSUMsT0FBTyxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsQ0FEWDtBQUVBQSxLQUFLQyxHQUFMLENBQVNDLE1BQUlILEtBQUtJLE1BQUwsQ0FBWUQsRUFBWixDQUFiOztBQUVBLGFBQUdILElBQUg7QUFDQSxJQUFJSyxPQUFPTCxLQUFLTSxRQUFMLEVBQVg7O0FBRUEsYUFBR0QsSUFBSDtBQUNBLGFBQUdBLHVDQUFIOztBQUVBLGFBQUdMLEtBQUtPLE9BQUwsRUFBSDs7QUFFQSxhQUFHLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFVQyxJQUFWLENBQWUsRUFBZixLQUFzQlIsS0FBS08sT0FBTCxHQUFlQyxJQUFmLENBQW9CLEVBQXBCLENBQXpCO0FBQ0EsYUFBRyxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsTUFBY1IsS0FBS08sT0FBTCxFQUFqQiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtfbH0gZnJvbSAnLi4vbGliL191dGwuanMnO1xuaW1wb3J0IHtMaW5rZWRMaXN0fSBmcm9tICcuLi9saWIvZGF0YS1zdHJ1Y3R1cmUvTGlua2VkX0xpc3QuanMnO1xuXG5cbnZhciBsaXN0ID0gbmV3IExpbmtlZExpc3QoKSxcbiAgICBkYXRhID0gWzEsMiwzLDRdO1xuZGF0YS5tYXAoZWw9Pmxpc3QuYXBwZW5kKGVsKSk7XG5cbl9sKGxpc3QpO1xudmFyIGxhc3QgPSBsaXN0Lmxhc3RJdGVtKCk7XG5cbl9sKGxhc3QpO1xuX2wobGFzdCBpbnN0YW5jZW9mIExpbmtlZExpc3QpO1xuXG5fbChsaXN0LnRvQXJyYXkoKSk7XG5cbl9sKFsxLDIsMyw0XS5qb2luKCcnKSA9PSBsaXN0LnRvQXJyYXkoKS5qb2luKCcnKSlcbl9sKFsxLDIsMyw0XSA9PT0gbGlzdC50b0FycmF5KCkpXG5cbiJdfQ==
},{"../lib/_utl.js":1,"../lib/data-structure/Linked_List.js":2}]},{},[3])