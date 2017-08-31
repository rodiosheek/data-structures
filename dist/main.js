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

/**
 * Linked list data structure
 */
let LinkedList = exports.LinkedList = class LinkedList {
    /**
     * Added element fo end of list.
     * @param data {Any} Element data
     */
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
    /**
     * Added element fo start of list.
     * @param data {Any} Element data
     */
    prepend(data) {
        let newFirst = new ListItem(data);
        newFirst.next = this.head;
        this.head = newFirst;
    }

    /**
     * Delete list element by exist value
     * @param value {Any} Element value
     * @returns {boolean} True if deleted False if not
     */
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

    /**
     * If value contains in list
     * @param value {Any} Element value
     * @returns {boolean} True if contains False if not
     */
    contains(value) {
        let current = this.head;
        while (this._exist(current)) {
            if (current.data == value) return true;
            current = current.next;
        }
        return false;
    }

    /**
     * Clear out list
     * @param confirm {boolean} Protection against deletion (true is you sure)
     */
    clean(confirm = false) {
        if (!confirm) return;
        this.head = null;
    }

    /**
     * Return count of list elements
     * @returns {number} Count
     */
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

    /**
     * Return last list element
     * @returns {null|ListItem|*} Instance of ListItem
     */
    lastItem() {
        let current = this.head;
        while (this._exist(current.next)) {
            current = current.next;
        }
        return current;
    }

    /**
     * Return array representation of list
     * @returns {Array}
     */
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

/**
 * ListItem
 * Element of LinkedList
 */

let ListItem = exports.ListItem = class ListItem {
    constructor(data) {
        this.data = data;
    }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvZXMtNi1kYXRhLXN0cnVjdHVyZS9zcmMvbGliL2RhdGEtc3RydWN0dXJlL2xpbmtlZC1saXN0L0xpbmtlZF9MaXN0LmpzIl0sIm5hbWVzIjpbIkxpbmtlZExpc3QiLCJhcHBlbmQiLCJkYXRhIiwiX2V4aXN0IiwiaGVhZCIsIkxpc3RJdGVtIiwiY3VycmVudCIsIm5leHQiLCJwcmVwZW5kIiwibmV3Rmlyc3QiLCJkZWxldGVCeVZhbCIsInZhbHVlIiwiY29udGFpbnMiLCJjbGVhbiIsImNvbmZpcm0iLCJsZW5ndGgiLCJjb3VudCIsImxhc3RJdGVtIiwidG9BcnJheSIsInJlcyIsInB1c2giLCJpdGVtIiwiY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFHQTs7O0lBR2FBLFUsV0FBQUEsVSxHQUFOLE1BQU1BLFVBQU4sQ0FBaUI7QUFDcEI7Ozs7QUFJQUMsV0FBT0MsSUFBUCxFQUFhO0FBQ1QsWUFBRyxDQUFDLEtBQUtDLE1BQUwsQ0FBWSxLQUFLQyxJQUFqQixDQUFKLEVBQTRCO0FBQ3hCLGlCQUFLQSxJQUFMLEdBQVksSUFBSUMsUUFBSixDQUFhSCxJQUFiLENBQVo7QUFDQTtBQUNIO0FBQ0QsWUFBSUksVUFBVSxLQUFLRixJQUFuQjtBQUNBLGVBQU0sS0FBS0QsTUFBTCxDQUFZRyxRQUFRQyxJQUFwQixDQUFOLEVBQWlDO0FBQzdCRCxzQkFBVUEsUUFBUUMsSUFBbEI7QUFDSDtBQUNERCxnQkFBUUMsSUFBUixHQUFlLElBQUlGLFFBQUosQ0FBYUgsSUFBYixDQUFmO0FBQ0g7QUFDRDs7OztBQUlBTSxZQUFRTixJQUFSLEVBQWM7QUFDVixZQUFJTyxXQUFXLElBQUlKLFFBQUosQ0FBYUgsSUFBYixDQUFmO0FBQ0FPLGlCQUFTRixJQUFULEdBQWdCLEtBQUtILElBQXJCO0FBQ0EsYUFBS0EsSUFBTCxHQUFZSyxRQUFaO0FBQ0g7O0FBRUQ7Ozs7O0FBS0FDLGdCQUFZQyxLQUFaLEVBQW1CO0FBQ2YsWUFBRyxDQUFDLEtBQUtSLE1BQUwsQ0FBWSxLQUFLQyxJQUFqQixDQUFKLEVBQTRCO0FBQzVCO0FBQ0EsWUFBRyxLQUFLQSxJQUFMLENBQVVGLElBQVYsSUFBa0JTLEtBQXJCLEVBQTRCO0FBQ3hCLGlCQUFLUCxJQUFMLEdBQVksS0FBS0EsSUFBTCxDQUFVRyxJQUF0QjtBQUNIO0FBQ0QsWUFBSUQsVUFBVSxLQUFLRixJQUFuQjtBQUNBLGVBQU0sS0FBS0QsTUFBTCxDQUFZRyxRQUFRQyxJQUFwQixDQUFOLEVBQWlDO0FBQzdCLGdCQUFHRCxRQUFRQyxJQUFSLENBQWFMLElBQWIsSUFBcUJTLEtBQXhCLEVBQStCO0FBQzNCTCx3QkFBUUMsSUFBUixHQUFlRCxRQUFRQyxJQUFSLENBQWFBLElBQTVCO0FBQ0EsdUJBQU8sSUFBUDtBQUNIO0FBQ0RELHNCQUFVQSxRQUFRQyxJQUFsQjtBQUNIO0FBQ0QsZUFBTyxLQUFQO0FBQ0g7O0FBRUQ7Ozs7O0FBS0FLLGFBQVNELEtBQVQsRUFBZ0I7QUFDWixZQUFJTCxVQUFVLEtBQUtGLElBQW5CO0FBQ0EsZUFBTSxLQUFLRCxNQUFMLENBQVlHLE9BQVosQ0FBTixFQUEyQjtBQUN2QixnQkFBR0EsUUFBUUosSUFBUixJQUFnQlMsS0FBbkIsRUFBMEIsT0FBTyxJQUFQO0FBQzFCTCxzQkFBVUEsUUFBUUMsSUFBbEI7QUFDSDtBQUNELGVBQU8sS0FBUDtBQUNIOztBQUVEOzs7O0FBSUFNLFVBQU1DLFVBQVUsS0FBaEIsRUFBdUI7QUFDbkIsWUFBRyxDQUFDQSxPQUFKLEVBQWE7QUFDYixhQUFLVixJQUFMLEdBQVksSUFBWjtBQUNIOztBQUVEOzs7O0FBSUFXLGFBQVE7QUFDSixZQUFJQyxRQUFRLENBQVo7QUFBQSxZQUNJVixVQUFVLEtBQUtGLElBRG5CO0FBRUEsWUFBR0UsV0FBVyxJQUFkLEVBQW9CLE9BQU9VLEtBQVA7QUFDcEIsZUFBTSxLQUFLYixNQUFMLENBQVlHLE9BQVosQ0FBTixFQUE0QjtBQUN4QlU7QUFDQVYsc0JBQVVBLFFBQVFDLElBQWxCO0FBQ0g7QUFDRCxlQUFPUyxLQUFQO0FBQ0g7O0FBRUQ7Ozs7QUFJQUMsZUFBVztBQUNQLFlBQUlYLFVBQVUsS0FBS0YsSUFBbkI7QUFDQSxlQUFNLEtBQUtELE1BQUwsQ0FBWUcsUUFBUUMsSUFBcEIsQ0FBTixFQUFpQztBQUM3QkQsc0JBQVVBLFFBQVFDLElBQWxCO0FBQ0g7QUFDRCxlQUFPRCxPQUFQO0FBQ0g7O0FBRUQ7Ozs7QUFJQVksY0FBVTtBQUNOLFlBQUlDLE1BQU0sRUFBVjtBQUFBLFlBQ0liLFVBQVUsS0FBS0YsSUFEbkI7QUFFQSxZQUFHRSxXQUFXLElBQWQsRUFBb0IsT0FBT2EsR0FBUDtBQUNwQixlQUFNLEtBQUtoQixNQUFMLENBQVlHLE9BQVosQ0FBTixFQUEyQjtBQUN2QmEsZ0JBQUlDLElBQUosQ0FBU2QsUUFBUUosSUFBakI7QUFDQUksc0JBQVVBLFFBQVFDLElBQWxCO0FBQ0g7QUFDRCxlQUFPWSxHQUFQO0FBQ0g7O0FBRUQ7Ozs7OztBQU1BaEIsV0FBT2tCLElBQVAsRUFBYTtBQUNULGVBQU8sT0FBT0EsSUFBUCxJQUFlLFdBQXRCO0FBQ0g7QUF6SG1CLEM7O0FBNEh4Qjs7Ozs7SUFJYWhCLFEsV0FBQUEsUSxHQUFOLE1BQU1BLFFBQU4sQ0FBZTtBQUNsQmlCLGdCQUFZcEIsSUFBWixFQUFrQjtBQUNkLGFBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNIO0FBSGlCLEMiLCJmaWxlIjoiTGlua2VkX0xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge19sfSBmcm9tICcuLi8uLi9fdXRsLmpzJztcblxuXG4vKipcbiAqIExpbmtlZCBsaXN0IGRhdGEgc3RydWN0dXJlXG4gKi9cbmV4cG9ydCBjbGFzcyBMaW5rZWRMaXN0IHtcbiAgICAvKipcbiAgICAgKiBBZGRlZCBlbGVtZW50IGZvIGVuZCBvZiBsaXN0LlxuICAgICAqIEBwYXJhbSBkYXRhIHtBbnl9IEVsZW1lbnQgZGF0YVxuICAgICAqL1xuICAgIGFwcGVuZChkYXRhKSB7XG4gICAgICAgIGlmKCF0aGlzLl9leGlzdCh0aGlzLmhlYWQpKSB7XG4gICAgICAgICAgICB0aGlzLmhlYWQgPSBuZXcgTGlzdEl0ZW0oZGF0YSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG4gICAgICAgIHdoaWxlKHRoaXMuX2V4aXN0KGN1cnJlbnQubmV4dCkpIHtcbiAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudC5uZXh0ID0gbmV3IExpc3RJdGVtKGRhdGEpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRlZCBlbGVtZW50IGZvIHN0YXJ0IG9mIGxpc3QuXG4gICAgICogQHBhcmFtIGRhdGEge0FueX0gRWxlbWVudCBkYXRhXG4gICAgICovXG4gICAgcHJlcGVuZChkYXRhKSB7XG4gICAgICAgIGxldCBuZXdGaXJzdCA9IG5ldyBMaXN0SXRlbShkYXRhKTtcbiAgICAgICAgbmV3Rmlyc3QubmV4dCA9IHRoaXMuaGVhZDtcbiAgICAgICAgdGhpcy5oZWFkID0gbmV3Rmlyc3Q7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIGxpc3QgZWxlbWVudCBieSBleGlzdCB2YWx1ZVxuICAgICAqIEBwYXJhbSB2YWx1ZSB7QW55fSBFbGVtZW50IHZhbHVlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgZGVsZXRlZCBGYWxzZSBpZiBub3RcbiAgICAgKi9cbiAgICBkZWxldGVCeVZhbCh2YWx1ZSkge1xuICAgICAgICBpZighdGhpcy5fZXhpc3QodGhpcy5oZWFkKSkgcmV0dXJuO1xuICAgICAgICAvL0ZvciBmaXJzdCBpdGVtIChoZWFkKVxuICAgICAgICBpZih0aGlzLmhlYWQuZGF0YSA9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5oZWFkID0gdGhpcy5oZWFkLm5leHQ7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG4gICAgICAgIHdoaWxlKHRoaXMuX2V4aXN0KGN1cnJlbnQubmV4dCkpIHtcbiAgICAgICAgICAgIGlmKGN1cnJlbnQubmV4dC5kYXRhID09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudC5uZXh0ID0gY3VycmVudC5uZXh0Lm5leHQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJZiB2YWx1ZSBjb250YWlucyBpbiBsaXN0XG4gICAgICogQHBhcmFtIHZhbHVlIHtBbnl9IEVsZW1lbnQgdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBjb250YWlucyBGYWxzZSBpZiBub3RcbiAgICAgKi9cbiAgICBjb250YWlucyh2YWx1ZSkge1xuICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcbiAgICAgICAgd2hpbGUodGhpcy5fZXhpc3QoY3VycmVudCkpe1xuICAgICAgICAgICAgaWYoY3VycmVudC5kYXRhID09IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFyIG91dCBsaXN0XG4gICAgICogQHBhcmFtIGNvbmZpcm0ge2Jvb2xlYW59IFByb3RlY3Rpb24gYWdhaW5zdCBkZWxldGlvbiAodHJ1ZSBpcyB5b3Ugc3VyZSlcbiAgICAgKi9cbiAgICBjbGVhbihjb25maXJtID0gZmFsc2UpIHtcbiAgICAgICAgaWYoIWNvbmZpcm0pIHJldHVybjtcbiAgICAgICAgdGhpcy5oZWFkID0gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gY291bnQgb2YgbGlzdCBlbGVtZW50c1xuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9IENvdW50XG4gICAgICovXG4gICAgbGVuZ3RoKCl7XG4gICAgICAgIGxldCBjb3VudCA9IDAsXG4gICAgICAgICAgICBjdXJyZW50ID0gdGhpcy5oZWFkO1xuICAgICAgICBpZihjdXJyZW50ID09IG51bGwpIHJldHVybiBjb3VudDtcbiAgICAgICAgd2hpbGUodGhpcy5fZXhpc3QoY3VycmVudCkpIHtcbiAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb3VudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gbGFzdCBsaXN0IGVsZW1lbnRcbiAgICAgKiBAcmV0dXJucyB7bnVsbHxMaXN0SXRlbXwqfSBJbnN0YW5jZSBvZiBMaXN0SXRlbVxuICAgICAqL1xuICAgIGxhc3RJdGVtKCkge1xuICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcbiAgICAgICAgd2hpbGUodGhpcy5fZXhpc3QoY3VycmVudC5uZXh0KSkge1xuICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3VycmVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gYXJyYXkgcmVwcmVzZW50YXRpb24gb2YgbGlzdFxuICAgICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICAgKi9cbiAgICB0b0FycmF5KCkge1xuICAgICAgICBsZXQgcmVzID0gW10sXG4gICAgICAgICAgICBjdXJyZW50ID0gdGhpcy5oZWFkO1xuICAgICAgICBpZihjdXJyZW50ID09IG51bGwpIHJldHVybiByZXM7XG4gICAgICAgIHdoaWxlKHRoaXMuX2V4aXN0KGN1cnJlbnQpKXtcbiAgICAgICAgICAgIHJlcy5wdXNoKGN1cnJlbnQuZGF0YSk7XG4gICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSWYgdHlwZSBvZiBpdGVtIG5vdCBlcXVhbCB0byB1bmRlZmluZWRcbiAgICAgKiBAcGFyYW0gaXRlbVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2V4aXN0KGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBpdGVtICE9ICd1bmRlZmluZWQnO1xuICAgIH1cbn1cblxuLyoqXG4gKiBMaXN0SXRlbVxuICogRWxlbWVudCBvZiBMaW5rZWRMaXN0XG4gKi9cbmV4cG9ydCBjbGFzcyBMaXN0SXRlbSB7XG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIH1cbn1cblxuXG4iXX0=
},{"../../_utl.js":1}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Stack = undefined;

var _utl = require('../../_utl.js');

let Stack = exports.Stack = class Stack {
    constructor() {
        this._stack = [];
        this._length = 0;
    }
    push(data) {
        let item = new StackItem(data);
        this._stack.push(item);
        this._length++;
    }
    pop() {
        if (this.length == 0) false;
        this._length--;
        let res = this._stack[this._length];
        this._stack.length = this._length;
        return res.data;
    }
    pip() {
        let res = [];
        this._stack.map((el, key) => {
            res[key] = el.data;
        });
        this._length--;
        return res;
    }
    length() {
        return this._length;
    }
    isEmpty() {
        return this._length === 0;
    }
    clean(confirm = false) {
        if (!confirm) return;
        this._length = 0;
        this._stack.length = this._length;
    }
};
let StackItem = class StackItem {
    constructor(data) {
        this.data = data;
    }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvZXMtNi1kYXRhLXN0cnVjdHVyZS9zcmMvbGliL2RhdGEtc3RydWN0dXJlL3N0YWNrL1N0YWNrLmpzIl0sIm5hbWVzIjpbIlN0YWNrIiwiY29uc3RydWN0b3IiLCJfc3RhY2siLCJfbGVuZ3RoIiwicHVzaCIsImRhdGEiLCJpdGVtIiwiU3RhY2tJdGVtIiwicG9wIiwibGVuZ3RoIiwicmVzIiwicGlwIiwibWFwIiwiZWwiLCJrZXkiLCJpc0VtcHR5IiwiY2xlYW4iLCJjb25maXJtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0lBRWFBLEssV0FBQUEsSyxHQUFOLE1BQU1BLEtBQU4sQ0FBWTtBQUNmQyxrQkFBYTtBQUNULGFBQUtDLE1BQUwsR0FBYyxFQUFkO0FBQ0EsYUFBS0MsT0FBTCxHQUFlLENBQWY7QUFDSDtBQUNEQyxTQUFLQyxJQUFMLEVBQVc7QUFDUCxZQUFJQyxPQUFPLElBQUlDLFNBQUosQ0FBY0YsSUFBZCxDQUFYO0FBQ0EsYUFBS0gsTUFBTCxDQUFZRSxJQUFaLENBQWlCRSxJQUFqQjtBQUNBLGFBQUtILE9BQUw7QUFDSDtBQUNESyxVQUFLO0FBQ0QsWUFBRyxLQUFLQyxNQUFMLElBQWUsQ0FBbEIsRUFBcUI7QUFDckIsYUFBS04sT0FBTDtBQUNBLFlBQUlPLE1BQU0sS0FBS1IsTUFBTCxDQUFZLEtBQUtDLE9BQWpCLENBQVY7QUFDQSxhQUFLRCxNQUFMLENBQVlPLE1BQVosR0FBcUIsS0FBS04sT0FBMUI7QUFDQSxlQUFPTyxJQUFJTCxJQUFYO0FBQ0g7QUFDRE0sVUFBSztBQUNELFlBQUlELE1BQU0sRUFBVjtBQUNBLGFBQUtSLE1BQUwsQ0FBWVUsR0FBWixDQUFnQixDQUFDQyxFQUFELEVBQUtDLEdBQUwsS0FBVztBQUN2QkosZ0JBQUlJLEdBQUosSUFBV0QsR0FBR1IsSUFBZDtBQUNILFNBRkQ7QUFHQSxhQUFLRixPQUFMO0FBQ0EsZUFBT08sR0FBUDtBQUNIO0FBQ0RELGFBQVM7QUFDTCxlQUFPLEtBQUtOLE9BQVo7QUFDSDtBQUNEWSxjQUFVO0FBQ04sZUFBTyxLQUFLWixPQUFMLEtBQWlCLENBQXhCO0FBQ0g7QUFDRGEsVUFBTUMsVUFBVSxLQUFoQixFQUF1QjtBQUNuQixZQUFHLENBQUNBLE9BQUosRUFBYTtBQUNiLGFBQUtkLE9BQUwsR0FBZSxDQUFmO0FBQ0EsYUFBS0QsTUFBTCxDQUFZTyxNQUFaLEdBQXFCLEtBQUtOLE9BQTFCO0FBQ0g7QUFuQ2MsQztJQXNDYkksUyxHQUFOLE1BQU1BLFNBQU4sQ0FBZ0I7QUFDWk4sZ0JBQVlJLElBQVosRUFBa0I7QUFDZCxhQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDSDtBQUhXLEMiLCJmaWxlIjoiU3RhY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge19sfSBmcm9tICcuLi8uLi9fdXRsLmpzJztcblxuZXhwb3J0IGNsYXNzIFN0YWNrIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLl9zdGFjayA9IFtdO1xuICAgICAgICB0aGlzLl9sZW5ndGggPSAwO1xuICAgIH1cbiAgICBwdXNoKGRhdGEpIHtcbiAgICAgICAgbGV0IGl0ZW0gPSBuZXcgU3RhY2tJdGVtKGRhdGEpO1xuICAgICAgICB0aGlzLl9zdGFjay5wdXNoKGl0ZW0pO1xuICAgICAgICB0aGlzLl9sZW5ndGgrKztcbiAgICB9XG4gICAgcG9wKCl7XG4gICAgICAgIGlmKHRoaXMubGVuZ3RoID09IDApIGZhbHNlO1xuICAgICAgICB0aGlzLl9sZW5ndGgtLTtcbiAgICAgICAgbGV0IHJlcyA9IHRoaXMuX3N0YWNrW3RoaXMuX2xlbmd0aF07XG4gICAgICAgIHRoaXMuX3N0YWNrLmxlbmd0aCA9IHRoaXMuX2xlbmd0aDtcbiAgICAgICAgcmV0dXJuIHJlcy5kYXRhO1xuICAgIH1cbiAgICBwaXAoKXtcbiAgICAgICAgbGV0IHJlcyA9IFtdO1xuICAgICAgICB0aGlzLl9zdGFjay5tYXAoKGVsLCBrZXkpPT57XG4gICAgICAgICAgICByZXNba2V5XSA9IGVsLmRhdGE7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9sZW5ndGgtLTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG4gICAgbGVuZ3RoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGVuZ3RoO1xuICAgIH1cbiAgICBpc0VtcHR5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGVuZ3RoID09PSAwO1xuICAgIH1cbiAgICBjbGVhbihjb25maXJtID0gZmFsc2UpIHtcbiAgICAgICAgaWYoIWNvbmZpcm0pIHJldHVybjtcbiAgICAgICAgdGhpcy5fbGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5fc3RhY2subGVuZ3RoID0gdGhpcy5fbGVuZ3RoO1xuICAgIH1cbn1cblxuY2xhc3MgU3RhY2tJdGVtIHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgfVxufSJdfQ==
},{"../../_utl.js":1}],4:[function(require,module,exports){
'use strict';

var _utl = require('../lib/_utl.js');

var _Linked_List = require('../lib/data-structure/linked-list/Linked_List.js');

var _Stack = require('../lib/data-structure/stack/Stack.js');

var stack = new _Stack.Stack();

(0, _utl._l)(stack.isEmpty());

var data = [1, 2, 3, 4, 5, 6, 7];

data.map(el => stack.push(el));

(0, _utl._l)(stack.pop());
(0, _utl._l)(stack.length());

stack.clean(true);
(0, _utl._l)(stack);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvZXMtNi1kYXRhLXN0cnVjdHVyZS9zcmMvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbInN0YWNrIiwiaXNFbXB0eSIsImRhdGEiLCJtYXAiLCJlbCIsInB1c2giLCJwb3AiLCJsZW5ndGgiLCJjbGVhbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQSxJQUFJQSxRQUFRLGtCQUFaOztBQUVBLGFBQUdBLE1BQU1DLE9BQU4sRUFBSDs7QUFFQSxJQUFJQyxPQUFPLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixDQUFYOztBQUVBQSxLQUFLQyxHQUFMLENBQVNDLE1BQUlKLE1BQU1LLElBQU4sQ0FBV0QsRUFBWCxDQUFiOztBQUVBLGFBQUdKLE1BQU1NLEdBQU4sRUFBSDtBQUNBLGFBQUdOLE1BQU1PLE1BQU4sRUFBSDs7QUFFQVAsTUFBTVEsS0FBTixDQUFZLElBQVo7QUFDQSxhQUFHUixLQUFIIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge19sfSBmcm9tICcuLi9saWIvX3V0bC5qcyc7XG5pbXBvcnQge0xpbmtlZExpc3R9IGZyb20gJy4uL2xpYi9kYXRhLXN0cnVjdHVyZS9saW5rZWQtbGlzdC9MaW5rZWRfTGlzdC5qcyc7XG5pbXBvcnQge1N0YWNrfSBmcm9tICcuLi9saWIvZGF0YS1zdHJ1Y3R1cmUvc3RhY2svU3RhY2suanMnO1xuXG52YXIgc3RhY2sgPSBuZXcgU3RhY2soKTtcblxuX2woc3RhY2suaXNFbXB0eSgpKTtcblxudmFyIGRhdGEgPSBbMSwyLDMsNCw1LDYsN107XG5cbmRhdGEubWFwKGVsPT5zdGFjay5wdXNoKGVsKSk7XG5cbl9sKHN0YWNrLnBvcCgpKTtcbl9sKHN0YWNrLmxlbmd0aCgpKTtcblxuc3RhY2suY2xlYW4odHJ1ZSk7XG5fbChzdGFjayk7Il19
},{"../lib/_utl.js":1,"../lib/data-structure/linked-list/Linked_List.js":2,"../lib/data-structure/stack/Stack.js":3}]},{},[4])