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
     * @param confirm {boolean} Protection against deletion (true if you sure)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvZXMtNi1kYXRhLXN0cnVjdHVyZS9zcmMvbGliL2RhdGEtc3RydWN0dXJlL2xpbmtlZC1saXN0L0xpbmtlZF9MaXN0LmpzIl0sIm5hbWVzIjpbIkxpbmtlZExpc3QiLCJhcHBlbmQiLCJkYXRhIiwiX2V4aXN0IiwiaGVhZCIsIkxpc3RJdGVtIiwiY3VycmVudCIsIm5leHQiLCJwcmVwZW5kIiwibmV3Rmlyc3QiLCJkZWxldGVCeVZhbCIsInZhbHVlIiwiY29udGFpbnMiLCJjbGVhbiIsImNvbmZpcm0iLCJsZW5ndGgiLCJjb3VudCIsImxhc3RJdGVtIiwidG9BcnJheSIsInJlcyIsInB1c2giLCJpdGVtIiwiY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFHQTs7O0lBR2FBLFUsV0FBQUEsVSxHQUFOLE1BQU1BLFVBQU4sQ0FBaUI7QUFDcEI7Ozs7QUFJQUMsV0FBT0MsSUFBUCxFQUFhO0FBQ1QsWUFBRyxDQUFDLEtBQUtDLE1BQUwsQ0FBWSxLQUFLQyxJQUFqQixDQUFKLEVBQTRCO0FBQ3hCLGlCQUFLQSxJQUFMLEdBQVksSUFBSUMsUUFBSixDQUFhSCxJQUFiLENBQVo7QUFDQTtBQUNIO0FBQ0QsWUFBSUksVUFBVSxLQUFLRixJQUFuQjtBQUNBLGVBQU0sS0FBS0QsTUFBTCxDQUFZRyxRQUFRQyxJQUFwQixDQUFOLEVBQWlDO0FBQzdCRCxzQkFBVUEsUUFBUUMsSUFBbEI7QUFDSDtBQUNERCxnQkFBUUMsSUFBUixHQUFlLElBQUlGLFFBQUosQ0FBYUgsSUFBYixDQUFmO0FBQ0g7QUFDRDs7OztBQUlBTSxZQUFRTixJQUFSLEVBQWM7QUFDVixZQUFJTyxXQUFXLElBQUlKLFFBQUosQ0FBYUgsSUFBYixDQUFmO0FBQ0FPLGlCQUFTRixJQUFULEdBQWdCLEtBQUtILElBQXJCO0FBQ0EsYUFBS0EsSUFBTCxHQUFZSyxRQUFaO0FBQ0g7O0FBRUQ7Ozs7O0FBS0FDLGdCQUFZQyxLQUFaLEVBQW1CO0FBQ2YsWUFBRyxDQUFDLEtBQUtSLE1BQUwsQ0FBWSxLQUFLQyxJQUFqQixDQUFKLEVBQTRCO0FBQzVCO0FBQ0EsWUFBRyxLQUFLQSxJQUFMLENBQVVGLElBQVYsSUFBa0JTLEtBQXJCLEVBQTRCO0FBQ3hCLGlCQUFLUCxJQUFMLEdBQVksS0FBS0EsSUFBTCxDQUFVRyxJQUF0QjtBQUNIO0FBQ0QsWUFBSUQsVUFBVSxLQUFLRixJQUFuQjtBQUNBLGVBQU0sS0FBS0QsTUFBTCxDQUFZRyxRQUFRQyxJQUFwQixDQUFOLEVBQWlDO0FBQzdCLGdCQUFHRCxRQUFRQyxJQUFSLENBQWFMLElBQWIsSUFBcUJTLEtBQXhCLEVBQStCO0FBQzNCTCx3QkFBUUMsSUFBUixHQUFlRCxRQUFRQyxJQUFSLENBQWFBLElBQTVCO0FBQ0EsdUJBQU8sSUFBUDtBQUNIO0FBQ0RELHNCQUFVQSxRQUFRQyxJQUFsQjtBQUNIO0FBQ0QsZUFBTyxLQUFQO0FBQ0g7O0FBRUQ7Ozs7O0FBS0FLLGFBQVNELEtBQVQsRUFBZ0I7QUFDWixZQUFJTCxVQUFVLEtBQUtGLElBQW5CO0FBQ0EsZUFBTSxLQUFLRCxNQUFMLENBQVlHLE9BQVosQ0FBTixFQUEyQjtBQUN2QixnQkFBR0EsUUFBUUosSUFBUixJQUFnQlMsS0FBbkIsRUFBMEIsT0FBTyxJQUFQO0FBQzFCTCxzQkFBVUEsUUFBUUMsSUFBbEI7QUFDSDtBQUNELGVBQU8sS0FBUDtBQUNIOztBQUVEOzs7O0FBSUFNLFVBQU1DLFVBQVUsS0FBaEIsRUFBdUI7QUFDbkIsWUFBRyxDQUFDQSxPQUFKLEVBQWE7QUFDYixhQUFLVixJQUFMLEdBQVksSUFBWjtBQUNIOztBQUVEOzs7O0FBSUFXLGFBQVE7QUFDSixZQUFJQyxRQUFRLENBQVo7QUFBQSxZQUNJVixVQUFVLEtBQUtGLElBRG5CO0FBRUEsWUFBR0UsV0FBVyxJQUFkLEVBQW9CLE9BQU9VLEtBQVA7QUFDcEIsZUFBTSxLQUFLYixNQUFMLENBQVlHLE9BQVosQ0FBTixFQUE0QjtBQUN4QlU7QUFDQVYsc0JBQVVBLFFBQVFDLElBQWxCO0FBQ0g7QUFDRCxlQUFPUyxLQUFQO0FBQ0g7O0FBRUQ7Ozs7QUFJQUMsZUFBVztBQUNQLFlBQUlYLFVBQVUsS0FBS0YsSUFBbkI7QUFDQSxlQUFNLEtBQUtELE1BQUwsQ0FBWUcsUUFBUUMsSUFBcEIsQ0FBTixFQUFpQztBQUM3QkQsc0JBQVVBLFFBQVFDLElBQWxCO0FBQ0g7QUFDRCxlQUFPRCxPQUFQO0FBQ0g7O0FBRUQ7Ozs7QUFJQVksY0FBVTtBQUNOLFlBQUlDLE1BQU0sRUFBVjtBQUFBLFlBQ0liLFVBQVUsS0FBS0YsSUFEbkI7QUFFQSxZQUFHRSxXQUFXLElBQWQsRUFBb0IsT0FBT2EsR0FBUDtBQUNwQixlQUFNLEtBQUtoQixNQUFMLENBQVlHLE9BQVosQ0FBTixFQUEyQjtBQUN2QmEsZ0JBQUlDLElBQUosQ0FBU2QsUUFBUUosSUFBakI7QUFDQUksc0JBQVVBLFFBQVFDLElBQWxCO0FBQ0g7QUFDRCxlQUFPWSxHQUFQO0FBQ0g7O0FBRUQ7Ozs7OztBQU1BaEIsV0FBT2tCLElBQVAsRUFBYTtBQUNULGVBQU8sT0FBT0EsSUFBUCxJQUFlLFdBQXRCO0FBQ0g7QUF6SG1CLEM7O0FBNEh4Qjs7Ozs7SUFJYWhCLFEsV0FBQUEsUSxHQUFOLE1BQU1BLFFBQU4sQ0FBZTtBQUNsQmlCLGdCQUFZcEIsSUFBWixFQUFrQjtBQUNkLGFBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNIO0FBSGlCLEMiLCJmaWxlIjoiTGlua2VkX0xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge19sfSBmcm9tICcuLi8uLi9fdXRsLmpzJztcblxuXG4vKipcbiAqIExpbmtlZCBsaXN0IGRhdGEgc3RydWN0dXJlXG4gKi9cbmV4cG9ydCBjbGFzcyBMaW5rZWRMaXN0IHtcbiAgICAvKipcbiAgICAgKiBBZGRlZCBlbGVtZW50IGZvIGVuZCBvZiBsaXN0LlxuICAgICAqIEBwYXJhbSBkYXRhIHtBbnl9IEVsZW1lbnQgZGF0YVxuICAgICAqL1xuICAgIGFwcGVuZChkYXRhKSB7XG4gICAgICAgIGlmKCF0aGlzLl9leGlzdCh0aGlzLmhlYWQpKSB7XG4gICAgICAgICAgICB0aGlzLmhlYWQgPSBuZXcgTGlzdEl0ZW0oZGF0YSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG4gICAgICAgIHdoaWxlKHRoaXMuX2V4aXN0KGN1cnJlbnQubmV4dCkpIHtcbiAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudC5uZXh0ID0gbmV3IExpc3RJdGVtKGRhdGEpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRlZCBlbGVtZW50IGZvIHN0YXJ0IG9mIGxpc3QuXG4gICAgICogQHBhcmFtIGRhdGEge0FueX0gRWxlbWVudCBkYXRhXG4gICAgICovXG4gICAgcHJlcGVuZChkYXRhKSB7XG4gICAgICAgIGxldCBuZXdGaXJzdCA9IG5ldyBMaXN0SXRlbShkYXRhKTtcbiAgICAgICAgbmV3Rmlyc3QubmV4dCA9IHRoaXMuaGVhZDtcbiAgICAgICAgdGhpcy5oZWFkID0gbmV3Rmlyc3Q7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIGxpc3QgZWxlbWVudCBieSBleGlzdCB2YWx1ZVxuICAgICAqIEBwYXJhbSB2YWx1ZSB7QW55fSBFbGVtZW50IHZhbHVlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgZGVsZXRlZCBGYWxzZSBpZiBub3RcbiAgICAgKi9cbiAgICBkZWxldGVCeVZhbCh2YWx1ZSkge1xuICAgICAgICBpZighdGhpcy5fZXhpc3QodGhpcy5oZWFkKSkgcmV0dXJuO1xuICAgICAgICAvL0ZvciBmaXJzdCBpdGVtIChoZWFkKVxuICAgICAgICBpZih0aGlzLmhlYWQuZGF0YSA9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5oZWFkID0gdGhpcy5oZWFkLm5leHQ7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG4gICAgICAgIHdoaWxlKHRoaXMuX2V4aXN0KGN1cnJlbnQubmV4dCkpIHtcbiAgICAgICAgICAgIGlmKGN1cnJlbnQubmV4dC5kYXRhID09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudC5uZXh0ID0gY3VycmVudC5uZXh0Lm5leHQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJZiB2YWx1ZSBjb250YWlucyBpbiBsaXN0XG4gICAgICogQHBhcmFtIHZhbHVlIHtBbnl9IEVsZW1lbnQgdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBjb250YWlucyBGYWxzZSBpZiBub3RcbiAgICAgKi9cbiAgICBjb250YWlucyh2YWx1ZSkge1xuICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcbiAgICAgICAgd2hpbGUodGhpcy5fZXhpc3QoY3VycmVudCkpe1xuICAgICAgICAgICAgaWYoY3VycmVudC5kYXRhID09IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFyIG91dCBsaXN0XG4gICAgICogQHBhcmFtIGNvbmZpcm0ge2Jvb2xlYW59IFByb3RlY3Rpb24gYWdhaW5zdCBkZWxldGlvbiAodHJ1ZSBpZiB5b3Ugc3VyZSlcbiAgICAgKi9cbiAgICBjbGVhbihjb25maXJtID0gZmFsc2UpIHtcbiAgICAgICAgaWYoIWNvbmZpcm0pIHJldHVybjtcbiAgICAgICAgdGhpcy5oZWFkID0gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gY291bnQgb2YgbGlzdCBlbGVtZW50c1xuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9IENvdW50XG4gICAgICovXG4gICAgbGVuZ3RoKCl7XG4gICAgICAgIGxldCBjb3VudCA9IDAsXG4gICAgICAgICAgICBjdXJyZW50ID0gdGhpcy5oZWFkO1xuICAgICAgICBpZihjdXJyZW50ID09IG51bGwpIHJldHVybiBjb3VudDtcbiAgICAgICAgd2hpbGUodGhpcy5fZXhpc3QoY3VycmVudCkpIHtcbiAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb3VudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gbGFzdCBsaXN0IGVsZW1lbnRcbiAgICAgKiBAcmV0dXJucyB7bnVsbHxMaXN0SXRlbXwqfSBJbnN0YW5jZSBvZiBMaXN0SXRlbVxuICAgICAqL1xuICAgIGxhc3RJdGVtKCkge1xuICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcbiAgICAgICAgd2hpbGUodGhpcy5fZXhpc3QoY3VycmVudC5uZXh0KSkge1xuICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3VycmVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gYXJyYXkgcmVwcmVzZW50YXRpb24gb2YgbGlzdFxuICAgICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICAgKi9cbiAgICB0b0FycmF5KCkge1xuICAgICAgICBsZXQgcmVzID0gW10sXG4gICAgICAgICAgICBjdXJyZW50ID0gdGhpcy5oZWFkO1xuICAgICAgICBpZihjdXJyZW50ID09IG51bGwpIHJldHVybiByZXM7XG4gICAgICAgIHdoaWxlKHRoaXMuX2V4aXN0KGN1cnJlbnQpKXtcbiAgICAgICAgICAgIHJlcy5wdXNoKGN1cnJlbnQuZGF0YSk7XG4gICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSWYgdHlwZSBvZiBpdGVtIG5vdCBlcXVhbCB0byB1bmRlZmluZWRcbiAgICAgKiBAcGFyYW0gaXRlbVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2V4aXN0KGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBpdGVtICE9ICd1bmRlZmluZWQnO1xuICAgIH1cbn1cblxuLyoqXG4gKiBMaXN0SXRlbVxuICogRWxlbWVudCBvZiBMaW5rZWRMaXN0XG4gKi9cbmV4cG9ydCBjbGFzcyBMaXN0SXRlbSB7XG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIH1cbn1cblxuXG4iXX0=
},{"../../_utl.js":1}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Queue
 */

const _queue = new WeakMap();
const _length = new WeakMap();

let Queue = exports.Queue = class Queue {
    constructor() {
        _queue.set(this, []);
        _length.set(this, 0);
    }
    /**
     * Add element to start of Queue
     * @param data {Any} queue element value
     */
    store(data) {
        let newEl = _queue.get(this);
        newEl.unshift(data);
        _queue.set(this, newEl);
        let length = _length.get(this);
        length++;
        _length.set(this, length);
        return length;
    }
    /**
     * Return and remove element value from end of Queue
     * @returns {Any}
     */
    access() {
        if (_length.get(this) == 0) return false;
        let end = _queue.get(this);
        let res = end.pop();
        _queue.set(this, end);
        let length = _length.get(this);
        _length.set(this, --length);
        return res;
    }
    /**
     * Returns, but does not delete element form end of Queue
     * @returns {*}
     */
    peek() {
        if (_length.get(this) == 0) return false;
        return _queue.get(this)[_length.get(this) - 1];
    }
    /**
     * Return true if Queue is empty, otherwise false
     * @returns {boolean}
     */
    isEmpty() {
        return _length.get(this) === 0;
    }
    /**
     * Return Queue length
     * @returns {number} Queue length
     */
    length() {
        return _length.get(this);
    }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvZXMtNi1kYXRhLXN0cnVjdHVyZS9zcmMvbGliL2RhdGEtc3RydWN0dXJlL3F1ZXVlL1F1ZXVlLmpzIl0sIm5hbWVzIjpbIl9xdWV1ZSIsIldlYWtNYXAiLCJfbGVuZ3RoIiwiUXVldWUiLCJjb25zdHJ1Y3RvciIsInNldCIsInN0b3JlIiwiZGF0YSIsIm5ld0VsIiwiZ2V0IiwidW5zaGlmdCIsImxlbmd0aCIsImFjY2VzcyIsImVuZCIsInJlcyIsInBvcCIsInBlZWsiLCJpc0VtcHR5Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7O0FBSUEsTUFBTUEsU0FBUyxJQUFJQyxPQUFKLEVBQWY7QUFDQSxNQUFNQyxVQUFVLElBQUlELE9BQUosRUFBaEI7O0lBRWFFLEssV0FBQUEsSyxHQUFOLE1BQU1BLEtBQU4sQ0FBWTtBQUNmQyxrQkFBYTtBQUNUSixlQUFPSyxHQUFQLENBQVcsSUFBWCxFQUFpQixFQUFqQjtBQUNBSCxnQkFBUUcsR0FBUixDQUFZLElBQVosRUFBa0IsQ0FBbEI7QUFDSDtBQUNEOzs7O0FBSUFDLFVBQU1DLElBQU4sRUFBWTtBQUNSLFlBQUlDLFFBQVFSLE9BQU9TLEdBQVAsQ0FBVyxJQUFYLENBQVo7QUFDQUQsY0FBTUUsT0FBTixDQUFjSCxJQUFkO0FBQ0FQLGVBQU9LLEdBQVAsQ0FBVyxJQUFYLEVBQWlCRyxLQUFqQjtBQUNBLFlBQUlHLFNBQVNULFFBQVFPLEdBQVIsQ0FBWSxJQUFaLENBQWI7QUFDQUU7QUFDQVQsZ0JBQVFHLEdBQVIsQ0FBWSxJQUFaLEVBQWtCTSxNQUFsQjtBQUNBLGVBQU9BLE1BQVA7QUFDSDtBQUNEOzs7O0FBSUFDLGFBQVM7QUFDTCxZQUFHVixRQUFRTyxHQUFSLENBQVksSUFBWixLQUFxQixDQUF4QixFQUEyQixPQUFPLEtBQVA7QUFDM0IsWUFBSUksTUFBTWIsT0FBT1MsR0FBUCxDQUFXLElBQVgsQ0FBVjtBQUNBLFlBQUlLLE1BQU1ELElBQUlFLEdBQUosRUFBVjtBQUNBZixlQUFPSyxHQUFQLENBQVcsSUFBWCxFQUFpQlEsR0FBakI7QUFDQSxZQUFJRixTQUFTVCxRQUFRTyxHQUFSLENBQVksSUFBWixDQUFiO0FBQ0FQLGdCQUFRRyxHQUFSLENBQVksSUFBWixFQUFrQixFQUFFTSxNQUFwQjtBQUNBLGVBQU9HLEdBQVA7QUFDSDtBQUNEOzs7O0FBSUFFLFdBQU87QUFDSCxZQUFHZCxRQUFRTyxHQUFSLENBQVksSUFBWixLQUFxQixDQUF4QixFQUEyQixPQUFPLEtBQVA7QUFDM0IsZUFBT1QsT0FBT1MsR0FBUCxDQUFXLElBQVgsRUFBaUJQLFFBQVFPLEdBQVIsQ0FBWSxJQUFaLElBQW9CLENBQXJDLENBQVA7QUFDSDtBQUNEOzs7O0FBSUFRLGNBQVU7QUFDTixlQUFPZixRQUFRTyxHQUFSLENBQVksSUFBWixNQUFzQixDQUE3QjtBQUNIO0FBQ0Q7Ozs7QUFJQUUsYUFBUztBQUNMLGVBQU9ULFFBQVFPLEdBQVIsQ0FBWSxJQUFaLENBQVA7QUFDSDtBQXBEYyxDIiwiZmlsZSI6IlF1ZXVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBRdWV1ZVxuICovXG5cbmNvbnN0IF9xdWV1ZSA9IG5ldyBXZWFrTWFwO1xuY29uc3QgX2xlbmd0aCA9IG5ldyBXZWFrTWFwO1xuXG5leHBvcnQgY2xhc3MgUXVldWUge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIF9xdWV1ZS5zZXQodGhpcywgW10pO1xuICAgICAgICBfbGVuZ3RoLnNldCh0aGlzLCAwKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkIGVsZW1lbnQgdG8gc3RhcnQgb2YgUXVldWVcbiAgICAgKiBAcGFyYW0gZGF0YSB7QW55fSBxdWV1ZSBlbGVtZW50IHZhbHVlXG4gICAgICovXG4gICAgc3RvcmUoZGF0YSkge1xuICAgICAgICBsZXQgbmV3RWwgPSBfcXVldWUuZ2V0KHRoaXMpO1xuICAgICAgICBuZXdFbC51bnNoaWZ0KGRhdGEpO1xuICAgICAgICBfcXVldWUuc2V0KHRoaXMsIG5ld0VsKTtcbiAgICAgICAgbGV0IGxlbmd0aCA9IF9sZW5ndGguZ2V0KHRoaXMpO1xuICAgICAgICBsZW5ndGgrKztcbiAgICAgICAgX2xlbmd0aC5zZXQodGhpcywgbGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJuIGFuZCByZW1vdmUgZWxlbWVudCB2YWx1ZSBmcm9tIGVuZCBvZiBRdWV1ZVxuICAgICAqIEByZXR1cm5zIHtBbnl9XG4gICAgICovXG4gICAgYWNjZXNzKCkge1xuICAgICAgICBpZihfbGVuZ3RoLmdldCh0aGlzKSA9PSAwKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGxldCBlbmQgPSBfcXVldWUuZ2V0KHRoaXMpO1xuICAgICAgICBsZXQgcmVzID0gZW5kLnBvcCgpO1xuICAgICAgICBfcXVldWUuc2V0KHRoaXMsIGVuZCk7XG4gICAgICAgIGxldCBsZW5ndGggPSBfbGVuZ3RoLmdldCh0aGlzKTtcbiAgICAgICAgX2xlbmd0aC5zZXQodGhpcywgLS1sZW5ndGgpO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zLCBidXQgZG9lcyBub3QgZGVsZXRlIGVsZW1lbnQgZm9ybSBlbmQgb2YgUXVldWVcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBwZWVrKCkge1xuICAgICAgICBpZihfbGVuZ3RoLmdldCh0aGlzKSA9PSAwKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiBfcXVldWUuZ2V0KHRoaXMpW19sZW5ndGguZ2V0KHRoaXMpIC0gMV07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybiB0cnVlIGlmIFF1ZXVlIGlzIGVtcHR5LCBvdGhlcndpc2UgZmFsc2VcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBpc0VtcHR5KCkge1xuICAgICAgICByZXR1cm4gX2xlbmd0aC5nZXQodGhpcykgPT09IDA7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybiBRdWV1ZSBsZW5ndGhcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSBRdWV1ZSBsZW5ndGhcbiAgICAgKi9cbiAgICBsZW5ndGgoKSB7XG4gICAgICAgIHJldHVybiBfbGVuZ3RoLmdldCh0aGlzKTtcbiAgICB9XG59Il19
},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StackItem = exports.Stack = undefined;

var _utl = require('../../_utl.js');

/**
 * Stack
 */
let Stack = exports.Stack = class Stack {
    constructor() {
        this._stack = [];
        this._length = 0;
    }

    /**
     * Added element to end of Stack
     * @param data {Any} stack element value
     */
    push(data) {
        let item = new StackItem(data);
        this._stack.push(item);
        this._length++;
    }

    /**
     * Return value of last element of Stack
     * @returns {StackItem} stack element value
     */
    pop() {
        if (this.length == 0) false;
        this._length--;
        let res = this._stack[this._length];
        this._stack.length = this._length;
        return res;
    }

    /**
     * Return array representation of Stack
     * @returns {Array} array representation of Stack
     */
    pip() {
        let res = [];
        this._stack.map((el, key) => {
            res[key] = el.data;
        });
        this._length--;
        return res;
    }

    /**
     * Return counts of Stack elements
     * @returns {number} Stack length
     */
    length() {
        return this._length;
    }

    /**
     * If stack is empty
     * @returns {boolean} true if Stack is empty, otherwise false
     */
    isEmpty() {
        return this._length === 0;
    }

    /**
     * Clear out Stack
     * @param confirm {boolean} Protection against deletion (true if you sure)
     */
    clean(confirm = false) {
        if (!confirm) return;
        this._length = 0;
        this._stack.length = this._length;
    }
};

/**
 * StackItem
 * Element of stack
 */

let StackItem = exports.StackItem = class StackItem {
    constructor(data) {
        this.data = data;
    }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvZXMtNi1kYXRhLXN0cnVjdHVyZS9zcmMvbGliL2RhdGEtc3RydWN0dXJlL3N0YWNrL1N0YWNrLmpzIl0sIm5hbWVzIjpbIlN0YWNrIiwiY29uc3RydWN0b3IiLCJfc3RhY2siLCJfbGVuZ3RoIiwicHVzaCIsImRhdGEiLCJpdGVtIiwiU3RhY2tJdGVtIiwicG9wIiwibGVuZ3RoIiwicmVzIiwicGlwIiwibWFwIiwiZWwiLCJrZXkiLCJpc0VtcHR5IiwiY2xlYW4iLCJjb25maXJtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7OztJQUdhQSxLLFdBQUFBLEssR0FBTixNQUFNQSxLQUFOLENBQVk7QUFDZkMsa0JBQWE7QUFDVCxhQUFLQyxNQUFMLEdBQWMsRUFBZDtBQUNBLGFBQUtDLE9BQUwsR0FBZSxDQUFmO0FBQ0g7O0FBRUQ7Ozs7QUFJQUMsU0FBS0MsSUFBTCxFQUFXO0FBQ1AsWUFBSUMsT0FBTyxJQUFJQyxTQUFKLENBQWNGLElBQWQsQ0FBWDtBQUNBLGFBQUtILE1BQUwsQ0FBWUUsSUFBWixDQUFpQkUsSUFBakI7QUFDQSxhQUFLSCxPQUFMO0FBQ0g7O0FBRUQ7Ozs7QUFJQUssVUFBSztBQUNELFlBQUcsS0FBS0MsTUFBTCxJQUFlLENBQWxCLEVBQXFCO0FBQ3JCLGFBQUtOLE9BQUw7QUFDQSxZQUFJTyxNQUFNLEtBQUtSLE1BQUwsQ0FBWSxLQUFLQyxPQUFqQixDQUFWO0FBQ0EsYUFBS0QsTUFBTCxDQUFZTyxNQUFaLEdBQXFCLEtBQUtOLE9BQTFCO0FBQ0EsZUFBT08sR0FBUDtBQUNIOztBQUVEOzs7O0FBSUFDLFVBQUs7QUFDRCxZQUFJRCxNQUFNLEVBQVY7QUFDQSxhQUFLUixNQUFMLENBQVlVLEdBQVosQ0FBZ0IsQ0FBQ0MsRUFBRCxFQUFLQyxHQUFMLEtBQVc7QUFDdkJKLGdCQUFJSSxHQUFKLElBQVdELEdBQUdSLElBQWQ7QUFDSCxTQUZEO0FBR0EsYUFBS0YsT0FBTDtBQUNBLGVBQU9PLEdBQVA7QUFDSDs7QUFFRDs7OztBQUlBRCxhQUFTO0FBQ0wsZUFBTyxLQUFLTixPQUFaO0FBQ0g7O0FBRUQ7Ozs7QUFJQVksY0FBVTtBQUNOLGVBQU8sS0FBS1osT0FBTCxLQUFpQixDQUF4QjtBQUNIOztBQUVEOzs7O0FBSUFhLFVBQU1DLFVBQVUsS0FBaEIsRUFBdUI7QUFDbkIsWUFBRyxDQUFDQSxPQUFKLEVBQWE7QUFDYixhQUFLZCxPQUFMLEdBQWUsQ0FBZjtBQUNBLGFBQUtELE1BQUwsQ0FBWU8sTUFBWixHQUFxQixLQUFLTixPQUExQjtBQUNIO0FBakVjLEM7O0FBb0VuQjs7Ozs7SUFJYUksUyxXQUFBQSxTLEdBQU4sTUFBTUEsU0FBTixDQUFnQjtBQUNuQk4sZ0JBQVlJLElBQVosRUFBa0I7QUFDZCxhQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDSDtBQUhrQixDIiwiZmlsZSI6IlN0YWNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtfbH0gZnJvbSAnLi4vLi4vX3V0bC5qcyc7XG5cbi8qKlxuICogU3RhY2tcbiAqL1xuZXhwb3J0IGNsYXNzIFN0YWNrIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLl9zdGFjayA9IFtdO1xuICAgICAgICB0aGlzLl9sZW5ndGggPSAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZGVkIGVsZW1lbnQgdG8gZW5kIG9mIFN0YWNrXG4gICAgICogQHBhcmFtIGRhdGEge0FueX0gc3RhY2sgZWxlbWVudCB2YWx1ZVxuICAgICAqL1xuICAgIHB1c2goZGF0YSkge1xuICAgICAgICBsZXQgaXRlbSA9IG5ldyBTdGFja0l0ZW0oZGF0YSk7XG4gICAgICAgIHRoaXMuX3N0YWNrLnB1c2goaXRlbSk7XG4gICAgICAgIHRoaXMuX2xlbmd0aCsrO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybiB2YWx1ZSBvZiBsYXN0IGVsZW1lbnQgb2YgU3RhY2tcbiAgICAgKiBAcmV0dXJucyB7U3RhY2tJdGVtfSBzdGFjayBlbGVtZW50IHZhbHVlXG4gICAgICovXG4gICAgcG9wKCl7XG4gICAgICAgIGlmKHRoaXMubGVuZ3RoID09IDApIGZhbHNlO1xuICAgICAgICB0aGlzLl9sZW5ndGgtLTtcbiAgICAgICAgbGV0IHJlcyA9IHRoaXMuX3N0YWNrW3RoaXMuX2xlbmd0aF07XG4gICAgICAgIHRoaXMuX3N0YWNrLmxlbmd0aCA9IHRoaXMuX2xlbmd0aDtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gYXJyYXkgcmVwcmVzZW50YXRpb24gb2YgU3RhY2tcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9IGFycmF5IHJlcHJlc2VudGF0aW9uIG9mIFN0YWNrXG4gICAgICovXG4gICAgcGlwKCl7XG4gICAgICAgIGxldCByZXMgPSBbXTtcbiAgICAgICAgdGhpcy5fc3RhY2subWFwKChlbCwga2V5KT0+e1xuICAgICAgICAgICAgcmVzW2tleV0gPSBlbC5kYXRhO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fbGVuZ3RoLS07XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIGNvdW50cyBvZiBTdGFjayBlbGVtZW50c1xuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9IFN0YWNrIGxlbmd0aFxuICAgICAqL1xuICAgIGxlbmd0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xlbmd0aDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJZiBzdGFjayBpcyBlbXB0eVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIFN0YWNrIGlzIGVtcHR5LCBvdGhlcndpc2UgZmFsc2VcbiAgICAgKi9cbiAgICBpc0VtcHR5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGVuZ3RoID09PSAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFyIG91dCBTdGFja1xuICAgICAqIEBwYXJhbSBjb25maXJtIHtib29sZWFufSBQcm90ZWN0aW9uIGFnYWluc3QgZGVsZXRpb24gKHRydWUgaWYgeW91IHN1cmUpXG4gICAgICovXG4gICAgY2xlYW4oY29uZmlybSA9IGZhbHNlKSB7XG4gICAgICAgIGlmKCFjb25maXJtKSByZXR1cm47XG4gICAgICAgIHRoaXMuX2xlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMuX3N0YWNrLmxlbmd0aCA9IHRoaXMuX2xlbmd0aDtcbiAgICB9XG59XG5cbi8qKlxuICogU3RhY2tJdGVtXG4gKiBFbGVtZW50IG9mIHN0YWNrXG4gKi9cbmV4cG9ydCBjbGFzcyBTdGFja0l0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB9XG59Il19
},{"../../_utl.js":1}],5:[function(require,module,exports){
'use strict';

var _utl = require('../lib/_utl.js');

var _Linked_List = require('../lib/data-structure/linked-list/Linked_List.js');

var _Stack = require('../lib/data-structure/stack/Stack.js');

var _Queue = require('../lib/data-structure/queue/Queue.js');

let queue = new _Queue.Queue();

let data = ['first', 'second', 'third', 'fourth'];
data.map(el => queue.store(el));

(0, _utl._l)(queue.peek());
(0, _utl._l)(queue.peek());
(0, _utl._l)(queue.length());
(0, _utl._l)(queue.access());
(0, _utl._l)(queue.access());
(0, _utl._l)(queue.access());
(0, _utl._l)(queue.access());
(0, _utl._l)(queue.access());
(0, _utl._l)(queue.length());

(0, _utl._l)('queue', queue);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvZXMtNi1kYXRhLXN0cnVjdHVyZS9zcmMvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbInF1ZXVlIiwiZGF0YSIsIm1hcCIsImVsIiwic3RvcmUiLCJwZWVrIiwibGVuZ3RoIiwiYWNjZXNzIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUVBLElBQUlBLFFBQVEsa0JBQVo7O0FBRUEsSUFBSUMsT0FBTyxDQUFDLE9BQUQsRUFBVSxRQUFWLEVBQW9CLE9BQXBCLEVBQTZCLFFBQTdCLENBQVg7QUFDQUEsS0FBS0MsR0FBTCxDQUFTQyxNQUFJSCxNQUFNSSxLQUFOLENBQVlELEVBQVosQ0FBYjs7QUFFQSxhQUFHSCxNQUFNSyxJQUFOLEVBQUg7QUFDQSxhQUFHTCxNQUFNSyxJQUFOLEVBQUg7QUFDQSxhQUFHTCxNQUFNTSxNQUFOLEVBQUg7QUFDQSxhQUFHTixNQUFNTyxNQUFOLEVBQUg7QUFDQSxhQUFHUCxNQUFNTyxNQUFOLEVBQUg7QUFDQSxhQUFHUCxNQUFNTyxNQUFOLEVBQUg7QUFDQSxhQUFHUCxNQUFNTyxNQUFOLEVBQUg7QUFDQSxhQUFHUCxNQUFNTyxNQUFOLEVBQUg7QUFDQSxhQUFHUCxNQUFNTSxNQUFOLEVBQUg7O0FBRUEsYUFBRyxPQUFILEVBQVlOLEtBQVoiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7X2x9IGZyb20gJy4uL2xpYi9fdXRsLmpzJztcbmltcG9ydCB7TGlua2VkTGlzdH0gZnJvbSAnLi4vbGliL2RhdGEtc3RydWN0dXJlL2xpbmtlZC1saXN0L0xpbmtlZF9MaXN0LmpzJztcbmltcG9ydCB7U3RhY2t9IGZyb20gJy4uL2xpYi9kYXRhLXN0cnVjdHVyZS9zdGFjay9TdGFjay5qcyc7XG5pbXBvcnQge1F1ZXVlfSBmcm9tICcuLi9saWIvZGF0YS1zdHJ1Y3R1cmUvcXVldWUvUXVldWUuanMnO1xuXG5sZXQgcXVldWUgPSBuZXcgUXVldWUoKTtcblxubGV0IGRhdGEgPSBbJ2ZpcnN0JywgJ3NlY29uZCcsICd0aGlyZCcsICdmb3VydGgnXTtcbmRhdGEubWFwKGVsPT5xdWV1ZS5zdG9yZShlbCkpO1xuXG5fbChxdWV1ZS5wZWVrKCkpO1xuX2wocXVldWUucGVlaygpKTtcbl9sKHF1ZXVlLmxlbmd0aCgpKTtcbl9sKHF1ZXVlLmFjY2VzcygpKTtcbl9sKHF1ZXVlLmFjY2VzcygpKTtcbl9sKHF1ZXVlLmFjY2VzcygpKTtcbl9sKHF1ZXVlLmFjY2VzcygpKTtcbl9sKHF1ZXVlLmFjY2VzcygpKTtcbl9sKHF1ZXVlLmxlbmd0aCgpKTtcblxuX2woJ3F1ZXVlJywgcXVldWUpO1xuXG4iXX0=
},{"../lib/_utl.js":1,"../lib/data-structure/linked-list/Linked_List.js":2,"../lib/data-structure/queue/Queue.js":3,"../lib/data-structure/stack/Stack.js":4}]},{},[5])