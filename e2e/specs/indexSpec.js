(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LinkedListSpec = undefined;

var _Linked_List = require('../../src/lib/data-structure/linked-list/Linked_List.js');

var assert = require('assert');

let LinkedListSpec = exports.LinkedListSpec = class LinkedListSpec {
    static run(_test) {
        return actions[_test]();
    }
};


var actions = {
    init: init,
    append: append,
    prepend: prepend,
    deleteByVal: deleteByVal,
    contains: contains,
    clean: clean,
    length: length,
    lastItem: lastItem,
    toArray: toArray
};

function init() {

    describe('Init LinkedList', () => {
        it('Instance of LinkedList', () => {

            let list = new _Linked_List.LinkedList();

            assert.equal(true, list instanceof _Linked_List.LinkedList);
        });
    });
};

function append() {

    describe('LinkedList append() method', () => {
        it('Added element to end of Linked List', () => {

            let list = new _Linked_List.LinkedList(),
                data = [1, 2];
            data.map(el => list.append(el));

            list.append(3);

            assert.equal(3, list.head.next.next.data);
        });
    });
};

function prepend() {

    describe('LinkedList prepend() method', () => {
        it('Added element to start of Linked List', () => {

            let list = new _Linked_List.LinkedList(),
                data = [1, 2];
            data.map(el => list.append(el));

            list.prepend('start');

            assert.equal('start', list.head.data);
        });
    });
};

function deleteByVal() {

    describe('LinkedList deleteByVal() method', () => {
        it('Delete element of LinkedList by value', () => {

            let list = new _Linked_List.LinkedList(),
                data = [1, 2, 3, 4];
            data.map(el => list.append(el));

            list.deleteByVal(3);

            assert.equal(false, list.contains(3));
        });
    });
};

function contains() {

    describe('LinkedList contains() method', () => {
        it('If value contains in LinkedList', () => {

            let list = new _Linked_List.LinkedList(),
                data = [1, 2, 3, 4];
            data.map(el => list.append(el));

            assert.equal(true, list.contains(3));
        });
    });
};

function clean() {

    describe('LinkedList clean() method', () => {
        it('Clear out LinkedList', () => {

            let list = new _Linked_List.LinkedList(),
                data = [1, 2, 3, 4];
            data.map(el => list.append(el));

            list.clean(true);

            assert.equal(0, list.length());
        });
    });
};

function length() {

    describe('LinkedList length() method', () => {
        it('Return length of LikedList elements', () => {

            let list = new _Linked_List.LinkedList(),
                data = [1, 2, 3, 4];
            data.map(el => list.append(el));

            assert.equal(4, list.length());
        });
    });
};

function lastItem() {

    let list = new _Linked_List.LinkedList(),
        data = [1, 2, 3, 4];
    data.map(el => list.append(el));

    let lastItem = list.lastItem();

    describe('LinkedList lastItem() method', () => {

        it('Return last element of LinkedList', () => {
            assert.equal(4, lastItem.data);
        });
        it('Last element instance of ListItem (LinkedList consists of ListItem elements)', () => {
            assert.equal(true, lastItem instanceof _Linked_List.ListItem);
        });
    });
};

function toArray() {

    describe('LinkedList toArray() method', () => {

        let list = new _Linked_List.LinkedList(),
            data = [1, 2, 3, 4];
        data.map(el => list.append(el));

        let array = list.toArray();

        it('Retrieve all the elements of LinkedList to array', () => {
            assert.equal([1, 2, 3, 4].join(''), array.join(''));
        });
    });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvZXMtNi1kYXRhLXN0cnVjdHVyZS9lMmUvc3JjL0xpbmtlZExpc3RTcGVjLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJMaW5rZWRMaXN0U3BlYyIsInJ1biIsIl90ZXN0IiwiYWN0aW9ucyIsImluaXQiLCJhcHBlbmQiLCJwcmVwZW5kIiwiZGVsZXRlQnlWYWwiLCJjb250YWlucyIsImNsZWFuIiwibGVuZ3RoIiwibGFzdEl0ZW0iLCJ0b0FycmF5IiwiZGVzY3JpYmUiLCJpdCIsImxpc3QiLCJlcXVhbCIsImRhdGEiLCJtYXAiLCJlbCIsImhlYWQiLCJuZXh0IiwiYXJyYXkiLCJqb2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsSUFBSUEsU0FBU0MsUUFBUSxRQUFSLENBQWI7O0lBRWFDLGMsV0FBQUEsYyxHQUFOLE1BQU1BLGNBQU4sQ0FBcUI7QUFDeEIsV0FBT0MsR0FBUCxDQUFXQyxLQUFYLEVBQWlCO0FBQ2IsZUFBT0MsUUFBUUQsS0FBUixHQUFQO0FBQ0g7QUFIdUIsQzs7O0FBTTVCLElBQUlDLFVBQVU7QUFDVkMsVUFBTUEsSUFESTtBQUVWQyxZQUFRQSxNQUZFO0FBR1ZDLGFBQVNBLE9BSEM7QUFJVkMsaUJBQWFBLFdBSkg7QUFLVkMsY0FBVUEsUUFMQTtBQU1WQyxXQUFPQSxLQU5HO0FBT1ZDLFlBQVFBLE1BUEU7QUFRVkMsY0FBVUEsUUFSQTtBQVNWQyxhQUFTQTtBQVRDLENBQWQ7O0FBWUEsU0FBU1IsSUFBVCxHQUFnQjs7QUFFWlMsYUFBUyxpQkFBVCxFQUE0QixNQUFNO0FBQzlCQyxXQUFHLHdCQUFILEVBQTRCLE1BQU07O0FBRTlCLGdCQUFJQyxPQUFPLDZCQUFYOztBQUVBakIsbUJBQU9rQixLQUFQLENBQWEsSUFBYixFQUFtQkQsdUNBQW5CO0FBQ0gsU0FMRDtBQU1ILEtBUEQ7QUFTSDs7QUFFRCxTQUFTVixNQUFULEdBQWtCOztBQUVkUSxhQUFTLDRCQUFULEVBQXVDLE1BQU07QUFDekNDLFdBQUcscUNBQUgsRUFBeUMsTUFBTTs7QUFFM0MsZ0JBQUlDLE9BQU8sNkJBQVg7QUFBQSxnQkFDSUUsT0FBTyxDQUFDLENBQUQsRUFBRyxDQUFILENBRFg7QUFFQUEsaUJBQUtDLEdBQUwsQ0FBU0MsTUFBSUosS0FBS1YsTUFBTCxDQUFZYyxFQUFaLENBQWI7O0FBRUFKLGlCQUFLVixNQUFMLENBQVksQ0FBWjs7QUFFQVAsbUJBQU9rQixLQUFQLENBQWEsQ0FBYixFQUFnQkQsS0FBS0ssSUFBTCxDQUFVQyxJQUFWLENBQWVBLElBQWYsQ0FBb0JKLElBQXBDO0FBQ0gsU0FURDtBQVVILEtBWEQ7QUFhSDs7QUFFRCxTQUFTWCxPQUFULEdBQW1COztBQUVmTyxhQUFTLDZCQUFULEVBQXdDLE1BQU07QUFDMUNDLFdBQUcsdUNBQUgsRUFBMkMsTUFBTTs7QUFFN0MsZ0JBQUlDLE9BQU8sNkJBQVg7QUFBQSxnQkFDSUUsT0FBTyxDQUFDLENBQUQsRUFBRyxDQUFILENBRFg7QUFFQUEsaUJBQUtDLEdBQUwsQ0FBU0MsTUFBSUosS0FBS1YsTUFBTCxDQUFZYyxFQUFaLENBQWI7O0FBRUFKLGlCQUFLVCxPQUFMLENBQWEsT0FBYjs7QUFFQVIsbUJBQU9rQixLQUFQLENBQWEsT0FBYixFQUFzQkQsS0FBS0ssSUFBTCxDQUFVSCxJQUFoQztBQUNILFNBVEQ7QUFVSCxLQVhEO0FBYUg7O0FBRUQsU0FBU1YsV0FBVCxHQUF1Qjs7QUFFbkJNLGFBQVMsaUNBQVQsRUFBNEMsTUFBTTtBQUM5Q0MsV0FBRyx1Q0FBSCxFQUEyQyxNQUFNOztBQUU3QyxnQkFBSUMsT0FBTyw2QkFBWDtBQUFBLGdCQUNJRSxPQUFPLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxDQURYO0FBRUFBLGlCQUFLQyxHQUFMLENBQVNDLE1BQUlKLEtBQUtWLE1BQUwsQ0FBWWMsRUFBWixDQUFiOztBQUVBSixpQkFBS1IsV0FBTCxDQUFpQixDQUFqQjs7QUFFQVQsbUJBQU9rQixLQUFQLENBQWEsS0FBYixFQUFvQkQsS0FBS1AsUUFBTCxDQUFjLENBQWQsQ0FBcEI7QUFDSCxTQVREO0FBVUgsS0FYRDtBQWFIOztBQUVELFNBQVNBLFFBQVQsR0FBb0I7O0FBRWhCSyxhQUFTLDhCQUFULEVBQXlDLE1BQU07QUFDM0NDLFdBQUcsaUNBQUgsRUFBcUMsTUFBTTs7QUFFdkMsZ0JBQUlDLE9BQU8sNkJBQVg7QUFBQSxnQkFDSUUsT0FBTyxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsQ0FEWDtBQUVBQSxpQkFBS0MsR0FBTCxDQUFTQyxNQUFJSixLQUFLVixNQUFMLENBQVljLEVBQVosQ0FBYjs7QUFFQXJCLG1CQUFPa0IsS0FBUCxDQUFhLElBQWIsRUFBbUJELEtBQUtQLFFBQUwsQ0FBYyxDQUFkLENBQW5CO0FBQ0gsU0FQRDtBQVFILEtBVEQ7QUFXSDs7QUFFRCxTQUFTQyxLQUFULEdBQWlCOztBQUViSSxhQUFTLDJCQUFULEVBQXNDLE1BQU07QUFDeENDLFdBQUcsc0JBQUgsRUFBMEIsTUFBTTs7QUFFNUIsZ0JBQUlDLE9BQU8sNkJBQVg7QUFBQSxnQkFDSUUsT0FBTyxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsQ0FEWDtBQUVBQSxpQkFBS0MsR0FBTCxDQUFTQyxNQUFJSixLQUFLVixNQUFMLENBQVljLEVBQVosQ0FBYjs7QUFFQUosaUJBQUtOLEtBQUwsQ0FBVyxJQUFYOztBQUVBWCxtQkFBT2tCLEtBQVAsQ0FBYSxDQUFiLEVBQWdCRCxLQUFLTCxNQUFMLEVBQWhCO0FBQ0gsU0FURDtBQVVILEtBWEQ7QUFhSDs7QUFFRCxTQUFTQSxNQUFULEdBQWtCOztBQUVkRyxhQUFTLDRCQUFULEVBQXVDLE1BQU07QUFDekNDLFdBQUcscUNBQUgsRUFBeUMsTUFBTTs7QUFFM0MsZ0JBQUlDLE9BQU8sNkJBQVg7QUFBQSxnQkFDSUUsT0FBTyxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsQ0FEWDtBQUVBQSxpQkFBS0MsR0FBTCxDQUFTQyxNQUFJSixLQUFLVixNQUFMLENBQVljLEVBQVosQ0FBYjs7QUFFQXJCLG1CQUFPa0IsS0FBUCxDQUFhLENBQWIsRUFBZ0JELEtBQUtMLE1BQUwsRUFBaEI7QUFDSCxTQVBEO0FBUUgsS0FURDtBQVdIOztBQUVELFNBQVNDLFFBQVQsR0FBb0I7O0FBRWhCLFFBQUlJLE9BQU8sNkJBQVg7QUFBQSxRQUNJRSxPQUFPLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxDQURYO0FBRUFBLFNBQUtDLEdBQUwsQ0FBU0MsTUFBSUosS0FBS1YsTUFBTCxDQUFZYyxFQUFaLENBQWI7O0FBRUEsUUFBSVIsV0FBV0ksS0FBS0osUUFBTCxFQUFmOztBQUVBRSxhQUFTLDhCQUFULEVBQXlDLE1BQU07O0FBRTNDQyxXQUFHLG1DQUFILEVBQXVDLE1BQU07QUFDekNoQixtQkFBT2tCLEtBQVAsQ0FBYSxDQUFiLEVBQWdCTCxTQUFTTSxJQUF6QjtBQUNILFNBRkQ7QUFHQUgsV0FBRyw4RUFBSCxFQUFtRixNQUFNO0FBQ3JGaEIsbUJBQU9rQixLQUFQLENBQWEsSUFBYixFQUFtQkwseUNBQW5CO0FBQ0gsU0FGRDtBQUdILEtBUkQ7QUFVSDs7QUFFRCxTQUFTQyxPQUFULEdBQW1COztBQUVmQyxhQUFTLDZCQUFULEVBQXdDLE1BQU07O0FBRTFDLFlBQUlFLE9BQU8sNkJBQVg7QUFBQSxZQUNJRSxPQUFPLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxDQURYO0FBRUFBLGFBQUtDLEdBQUwsQ0FBU0MsTUFBSUosS0FBS1YsTUFBTCxDQUFZYyxFQUFaLENBQWI7O0FBRUEsWUFBSUcsUUFBUVAsS0FBS0gsT0FBTCxFQUFaOztBQUVBRSxXQUFHLGtEQUFILEVBQXNELE1BQU07QUFDeERoQixtQkFBT2tCLEtBQVAsQ0FBYSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBVU8sSUFBVixDQUFlLEVBQWYsQ0FBYixFQUFpQ0QsTUFBTUMsSUFBTixDQUFXLEVBQVgsQ0FBakM7QUFDSCxTQUZEO0FBR0gsS0FYRDtBQWFIIiwiZmlsZSI6IkxpbmtlZExpc3RTcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtMaW5rZWRMaXN0LCBMaXN0SXRlbX0gZnJvbSAnLi4vLi4vc3JjL2xpYi9kYXRhLXN0cnVjdHVyZS9saW5rZWQtbGlzdC9MaW5rZWRfTGlzdC5qcyc7XG5cbnZhciBhc3NlcnQgPSByZXF1aXJlKCdhc3NlcnQnKTtcblxuZXhwb3J0IGNsYXNzIExpbmtlZExpc3RTcGVjIHtcbiAgICBzdGF0aWMgcnVuKF90ZXN0KXtcbiAgICAgICAgcmV0dXJuIGFjdGlvbnNbX3Rlc3RdKCk7XG4gICAgfVxufVxuXG52YXIgYWN0aW9ucyA9IHtcbiAgICBpbml0OiBpbml0LFxuICAgIGFwcGVuZDogYXBwZW5kLFxuICAgIHByZXBlbmQ6IHByZXBlbmQsXG4gICAgZGVsZXRlQnlWYWw6IGRlbGV0ZUJ5VmFsLFxuICAgIGNvbnRhaW5zOiBjb250YWlucyxcbiAgICBjbGVhbjogY2xlYW4sXG4gICAgbGVuZ3RoOiBsZW5ndGgsXG4gICAgbGFzdEl0ZW06IGxhc3RJdGVtLFxuICAgIHRvQXJyYXk6IHRvQXJyYXksXG59O1xuXG5mdW5jdGlvbiBpbml0KCkge1xuXG4gICAgZGVzY3JpYmUoJ0luaXQgTGlua2VkTGlzdCcsICgpID0+IHtcbiAgICAgICAgaXQoJ0luc3RhbmNlIG9mIExpbmtlZExpc3QnLCgpID0+IHtcblxuICAgICAgICAgICAgbGV0IGxpc3QgPSBuZXcgTGlua2VkTGlzdCgpO1xuXG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwodHJ1ZSwgbGlzdCBpbnN0YW5jZW9mIExpbmtlZExpc3QpXG4gICAgICAgIH0pXG4gICAgfSk7XG5cbn07XG5cbmZ1bmN0aW9uIGFwcGVuZCgpIHtcblxuICAgIGRlc2NyaWJlKCdMaW5rZWRMaXN0IGFwcGVuZCgpIG1ldGhvZCcsICgpID0+IHtcbiAgICAgICAgaXQoJ0FkZGVkIGVsZW1lbnQgdG8gZW5kIG9mIExpbmtlZCBMaXN0JywoKSA9PiB7XG5cbiAgICAgICAgICAgIGxldCBsaXN0ID0gbmV3IExpbmtlZExpc3QoKSxcbiAgICAgICAgICAgICAgICBkYXRhID0gWzEsMl07XG4gICAgICAgICAgICBkYXRhLm1hcChlbD0+bGlzdC5hcHBlbmQoZWwpKTtcblxuICAgICAgICAgICAgbGlzdC5hcHBlbmQoMyk7XG5cbiAgICAgICAgICAgIGFzc2VydC5lcXVhbCgzLCBsaXN0LmhlYWQubmV4dC5uZXh0LmRhdGEpXG4gICAgICAgIH0pXG4gICAgfSk7XG5cbn07XG5cbmZ1bmN0aW9uIHByZXBlbmQoKSB7XG5cbiAgICBkZXNjcmliZSgnTGlua2VkTGlzdCBwcmVwZW5kKCkgbWV0aG9kJywgKCkgPT4ge1xuICAgICAgICBpdCgnQWRkZWQgZWxlbWVudCB0byBzdGFydCBvZiBMaW5rZWQgTGlzdCcsKCkgPT4ge1xuXG4gICAgICAgICAgICBsZXQgbGlzdCA9IG5ldyBMaW5rZWRMaXN0KCksXG4gICAgICAgICAgICAgICAgZGF0YSA9IFsxLDJdO1xuICAgICAgICAgICAgZGF0YS5tYXAoZWw9Pmxpc3QuYXBwZW5kKGVsKSk7XG5cbiAgICAgICAgICAgIGxpc3QucHJlcGVuZCgnc3RhcnQnKTtcblxuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKCdzdGFydCcsIGxpc3QuaGVhZC5kYXRhKVxuICAgICAgICB9KVxuICAgIH0pO1xuXG59O1xuXG5mdW5jdGlvbiBkZWxldGVCeVZhbCgpIHtcblxuICAgIGRlc2NyaWJlKCdMaW5rZWRMaXN0IGRlbGV0ZUJ5VmFsKCkgbWV0aG9kJywgKCkgPT4ge1xuICAgICAgICBpdCgnRGVsZXRlIGVsZW1lbnQgb2YgTGlua2VkTGlzdCBieSB2YWx1ZScsKCkgPT4ge1xuXG4gICAgICAgICAgICBsZXQgbGlzdCA9IG5ldyBMaW5rZWRMaXN0KCksXG4gICAgICAgICAgICAgICAgZGF0YSA9IFsxLDIsMyw0XTtcbiAgICAgICAgICAgIGRhdGEubWFwKGVsPT5saXN0LmFwcGVuZChlbCkpO1xuXG4gICAgICAgICAgICBsaXN0LmRlbGV0ZUJ5VmFsKDMpO1xuXG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwoZmFsc2UsIGxpc3QuY29udGFpbnMoMykpXG4gICAgICAgIH0pXG4gICAgfSk7XG5cbn07XG5cbmZ1bmN0aW9uIGNvbnRhaW5zKCkge1xuXG4gICAgZGVzY3JpYmUoJ0xpbmtlZExpc3QgY29udGFpbnMoKSBtZXRob2QnLCAoKSA9PiB7XG4gICAgICAgIGl0KCdJZiB2YWx1ZSBjb250YWlucyBpbiBMaW5rZWRMaXN0JywoKSA9PiB7XG5cbiAgICAgICAgICAgIGxldCBsaXN0ID0gbmV3IExpbmtlZExpc3QoKSxcbiAgICAgICAgICAgICAgICBkYXRhID0gWzEsMiwzLDRdO1xuICAgICAgICAgICAgZGF0YS5tYXAoZWw9Pmxpc3QuYXBwZW5kKGVsKSk7XG5cbiAgICAgICAgICAgIGFzc2VydC5lcXVhbCh0cnVlLCBsaXN0LmNvbnRhaW5zKDMpKVxuICAgICAgICB9KVxuICAgIH0pO1xuXG59O1xuXG5mdW5jdGlvbiBjbGVhbigpIHtcblxuICAgIGRlc2NyaWJlKCdMaW5rZWRMaXN0IGNsZWFuKCkgbWV0aG9kJywgKCkgPT4ge1xuICAgICAgICBpdCgnQ2xlYXIgb3V0IExpbmtlZExpc3QnLCgpID0+IHtcblxuICAgICAgICAgICAgbGV0IGxpc3QgPSBuZXcgTGlua2VkTGlzdCgpLFxuICAgICAgICAgICAgICAgIGRhdGEgPSBbMSwyLDMsNF07XG4gICAgICAgICAgICBkYXRhLm1hcChlbD0+bGlzdC5hcHBlbmQoZWwpKTtcblxuICAgICAgICAgICAgbGlzdC5jbGVhbih0cnVlKTtcblxuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKDAsIGxpc3QubGVuZ3RoKCkpXG4gICAgICAgIH0pXG4gICAgfSk7XG5cbn07XG5cbmZ1bmN0aW9uIGxlbmd0aCgpIHtcblxuICAgIGRlc2NyaWJlKCdMaW5rZWRMaXN0IGxlbmd0aCgpIG1ldGhvZCcsICgpID0+IHtcbiAgICAgICAgaXQoJ1JldHVybiBsZW5ndGggb2YgTGlrZWRMaXN0IGVsZW1lbnRzJywoKSA9PiB7XG5cbiAgICAgICAgICAgIGxldCBsaXN0ID0gbmV3IExpbmtlZExpc3QoKSxcbiAgICAgICAgICAgICAgICBkYXRhID0gWzEsMiwzLDRdO1xuICAgICAgICAgICAgZGF0YS5tYXAoZWw9Pmxpc3QuYXBwZW5kKGVsKSk7XG5cbiAgICAgICAgICAgIGFzc2VydC5lcXVhbCg0LCBsaXN0Lmxlbmd0aCgpKVxuICAgICAgICB9KVxuICAgIH0pO1xuXG59O1xuXG5mdW5jdGlvbiBsYXN0SXRlbSgpIHtcblxuICAgIGxldCBsaXN0ID0gbmV3IExpbmtlZExpc3QoKSxcbiAgICAgICAgZGF0YSA9IFsxLDIsMyw0XTtcbiAgICBkYXRhLm1hcChlbD0+bGlzdC5hcHBlbmQoZWwpKTtcblxuICAgIGxldCBsYXN0SXRlbSA9IGxpc3QubGFzdEl0ZW0oKTtcblxuICAgIGRlc2NyaWJlKCdMaW5rZWRMaXN0IGxhc3RJdGVtKCkgbWV0aG9kJywgKCkgPT4ge1xuXG4gICAgICAgIGl0KCdSZXR1cm4gbGFzdCBlbGVtZW50IG9mIExpbmtlZExpc3QnLCgpID0+IHtcbiAgICAgICAgICAgIGFzc2VydC5lcXVhbCg0LCBsYXN0SXRlbS5kYXRhKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGl0KCdMYXN0IGVsZW1lbnQgaW5zdGFuY2Ugb2YgTGlzdEl0ZW0gKExpbmtlZExpc3QgY29uc2lzdHMgb2YgTGlzdEl0ZW0gZWxlbWVudHMpJywgKCkgPT4ge1xuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKHRydWUsIGxhc3RJdGVtIGluc3RhbmNlb2YgTGlzdEl0ZW0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxufTtcblxuZnVuY3Rpb24gdG9BcnJheSgpIHtcblxuICAgIGRlc2NyaWJlKCdMaW5rZWRMaXN0IHRvQXJyYXkoKSBtZXRob2QnLCAoKSA9PiB7XG5cbiAgICAgICAgbGV0IGxpc3QgPSBuZXcgTGlua2VkTGlzdCgpLFxuICAgICAgICAgICAgZGF0YSA9IFsxLDIsMyw0XTtcbiAgICAgICAgZGF0YS5tYXAoZWw9Pmxpc3QuYXBwZW5kKGVsKSk7XG5cbiAgICAgICAgbGV0IGFycmF5ID0gbGlzdC50b0FycmF5KCk7XG5cbiAgICAgICAgaXQoJ1JldHJpZXZlIGFsbCB0aGUgZWxlbWVudHMgb2YgTGlua2VkTGlzdCB0byBhcnJheScsKCkgPT4ge1xuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKFsxLDIsMyw0XS5qb2luKCcnKSwgYXJyYXkuam9pbignJykpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxufTtcblxuXG5cbiJdfQ==
},{"../../src/lib/data-structure/linked-list/Linked_List.js":11,"assert":5}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.QueueSpec = undefined;

var _Queue = require('../../src/lib/data-structure/queue/Queue.js');

var assert = require('assert');

let QueueSpec = exports.QueueSpec = class QueueSpec {
    static run(_test) {
        return actions[_test]();
    }
};


var actions = {
    init: init,
    store: store,
    access: access,
    peek: peek,
    isEmpty: isEmpty,
    length: length
};

function init() {

    let queue = new _Queue.Queue();

    describe('Init Queue', () => {
        it('Instance of Queue', () => {
            assert.equal(true, queue instanceof _Queue.Queue);
        });
    });
};

function store() {

    let queue = new _Queue.Queue(),
        data = ['first', 2, 3, 4, 5, 'last'];

    data.map(el => queue.store(el));

    describe('Queue store method', () => {
        it('Add element to end of Queue', () => {
            assert.equal('first', queue.queue[5]);
        });
    });
};

function access() {

    let queue = new _Queue.Queue(),
        data = ['first', 2, 3, 4, 5, 'last'];

    data.map(el => queue.store(el));

    let lastElement = queue.access();

    let elementExist = queue.queue.find(el => el == lastElement);

    describe('Queue access method', () => {
        it('Return element value from end of Queue', () => {
            assert.equal('first', lastElement);
        });
        it('Remove element from end of Queue', () => {
            assert.equal(undefined, elementExist);
        });
    });
};

function peek() {

    let queue = new _Queue.Queue(),
        data = ['first', 2, 3, 4, 5, 'last'];

    data.map(el => queue.store(el));

    let lastElement = queue.peek();

    let elementExist = queue.queue.find(el => el == lastElement);

    describe('Queue peek method', () => {
        it('Return element value from end of Queue', () => {
            assert.equal('first', lastElement);
        });
        it("Don't remove element from end of Queue", () => {
            assert.equal('first', elementExist);
        });
    });
};

function isEmpty() {

    let queue = new _Queue.Queue(),
        data = ['first', 2, 3, 4, 5, 'last'];

    data.map(el => queue.store(el));

    let anotherQueue = new _Queue.Queue();

    describe('Queue isEmpty method', () => {
        it('Return false if Queue is not empty', () => {
            assert.equal(false, queue.isEmpty());
        });
        it('Return true if Queue is empty', () => {
            assert.equal(true, anotherQueue.isEmpty());
        });
    });
};

function length() {

    let queue = new _Queue.Queue(),
        data = ['first', 2, 3, 4, 5, 'last'],
        dataLength = data.length;

    data.map(el => queue.store(el));

    describe('Queue length method', () => {
        it('Return Queue length', () => {
            assert.equal(dataLength, queue.length());
        });
    });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvZXMtNi1kYXRhLXN0cnVjdHVyZS9lMmUvc3JjL1F1ZXVlU3BlYy5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwiUXVldWVTcGVjIiwicnVuIiwiX3Rlc3QiLCJhY3Rpb25zIiwiaW5pdCIsInN0b3JlIiwiYWNjZXNzIiwicGVlayIsImlzRW1wdHkiLCJsZW5ndGgiLCJxdWV1ZSIsImRlc2NyaWJlIiwiaXQiLCJlcXVhbCIsImRhdGEiLCJtYXAiLCJlbCIsImxhc3RFbGVtZW50IiwiZWxlbWVudEV4aXN0IiwiZmluZCIsInVuZGVmaW5lZCIsImFub3RoZXJRdWV1ZSIsImRhdGFMZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFJQSxTQUFTQyxRQUFRLFFBQVIsQ0FBYjs7SUFFYUMsUyxXQUFBQSxTLEdBQU4sTUFBTUEsU0FBTixDQUFnQjtBQUNuQixXQUFPQyxHQUFQLENBQVdDLEtBQVgsRUFBa0I7QUFDZCxlQUFPQyxRQUFRRCxLQUFSLEdBQVA7QUFDSDtBQUhrQixDOzs7QUFNdkIsSUFBSUMsVUFBVTtBQUNWQyxVQUFNQSxJQURJO0FBRVZDLFdBQU9BLEtBRkc7QUFHVkMsWUFBUUEsTUFIRTtBQUlWQyxVQUFNQSxJQUpJO0FBS1ZDLGFBQVNBLE9BTEM7QUFNVkMsWUFBUUE7QUFORSxDQUFkOztBQVNBLFNBQVNMLElBQVQsR0FBZ0I7O0FBRVosUUFBSU0sUUFBUSxrQkFBWjs7QUFFQUMsYUFBUyxZQUFULEVBQXVCLE1BQU07QUFDekJDLFdBQUcsbUJBQUgsRUFBd0IsTUFBTTtBQUMxQmQsbUJBQU9lLEtBQVAsQ0FBYSxJQUFiLEVBQW1CSCw2QkFBbkI7QUFDSCxTQUZEO0FBR0gsS0FKRDtBQU1IOztBQUVELFNBQVNMLEtBQVQsR0FBaUI7O0FBRWIsUUFBSUssUUFBUSxrQkFBWjtBQUFBLFFBQ0lJLE9BQU8sQ0FBQyxPQUFELEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QUFBLFFBRUlRLGFBQWFSLEtBQUtMLE1BRnRCOztBQUlBSyxTQUFLQyxHQUFMLENBQVNDLE1BQUlOLE1BQU1MLEtBQU4sQ0FBWVcsRUFBWixDQUFiOztBQUVBTCxhQUFTLHFCQUFULEVBQWdDLE1BQU07QUFDbENDLFdBQUcscUJBQUgsRUFBMEIsTUFBTTtBQUM1QmQsbUJBQU9lLEtBQVAsQ0FBYVMsVUFBYixFQUF5QlosTUFBTUQsTUFBTixFQUF6QjtBQUNILFNBRkQ7QUFHSCxLQUpEO0FBTUgiLCJmaWxlIjoiUXVldWVTcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtRdWV1ZX0gZnJvbSAnLi4vLi4vc3JjL2xpYi9kYXRhLXN0cnVjdHVyZS9xdWV1ZS9RdWV1ZS5qcyc7XG5cbnZhciBhc3NlcnQgPSByZXF1aXJlKCdhc3NlcnQnKTtcblxuZXhwb3J0IGNsYXNzIFF1ZXVlU3BlYyB7XG4gICAgc3RhdGljIHJ1bihfdGVzdCkge1xuICAgICAgICByZXR1cm4gYWN0aW9uc1tfdGVzdF0oKTtcbiAgICB9XG59XG5cbnZhciBhY3Rpb25zID0ge1xuICAgIGluaXQ6IGluaXQsXG4gICAgc3RvcmU6IHN0b3JlLFxuICAgIGFjY2VzczogYWNjZXNzLFxuICAgIHBlZWs6IHBlZWssXG4gICAgaXNFbXB0eTogaXNFbXB0eSxcbiAgICBsZW5ndGg6IGxlbmd0aCxcbn07XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG5cbiAgICBsZXQgcXVldWUgPSBuZXcgUXVldWUoKTtcblxuICAgIGRlc2NyaWJlKCdJbml0IFF1ZXVlJywgKCkgPT4ge1xuICAgICAgICBpdCgnSW5zdGFuY2Ugb2YgUXVldWUnLCAoKSA9PiB7XG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwodHJ1ZSwgcXVldWUgaW5zdGFuY2VvZiBRdWV1ZSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG59O1xuXG5mdW5jdGlvbiBzdG9yZSgpIHtcblxuICAgIGxldCBxdWV1ZSA9IG5ldyBRdWV1ZSgpLFxuICAgICAgICBkYXRhID0gWydmaXJzdCcsIDIsIDMsIDQsIDUsICdsYXN0J107XG5cbiAgICBkYXRhLm1hcChlbD0+cXVldWUuc3RvcmUoZWwpKTtcblxuICAgIGRlc2NyaWJlKCdRdWV1ZSBzdG9yZSBtZXRob2QnLCAoKSA9PiB7XG4gICAgICAgIGl0KCdBZGQgZWxlbWVudCB0byBlbmQgb2YgUXVldWUnLCAoKSA9PiB7XG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwoJ2ZpcnN0JywgcXVldWUucXVldWVbNV0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxufTtcblxuZnVuY3Rpb24gYWNjZXNzKCkge1xuXG4gICAgbGV0IHF1ZXVlID0gbmV3IFF1ZXVlKCksXG4gICAgICAgIGRhdGEgPSBbJ2ZpcnN0JywgMiwgMywgNCwgNSwgJ2xhc3QnXTtcblxuICAgIGRhdGEubWFwKGVsPT5xdWV1ZS5zdG9yZShlbCkpO1xuXG4gICAgbGV0IGxhc3RFbGVtZW50ID0gcXVldWUuYWNjZXNzKCk7XG5cbiAgICBsZXQgZWxlbWVudEV4aXN0ID0gcXVldWUucXVldWUuZmluZChcbiAgICAgICAgZWw9PmVsID09IGxhc3RFbGVtZW50XG4gICAgKTtcblxuICAgIGRlc2NyaWJlKCdRdWV1ZSBhY2Nlc3MgbWV0aG9kJywgKCkgPT4ge1xuICAgICAgICBpdCgnUmV0dXJuIGVsZW1lbnQgdmFsdWUgZnJvbSBlbmQgb2YgUXVldWUnLCAoKSA9PiB7XG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwoJ2ZpcnN0JywgbGFzdEVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgaXQoJ1JlbW92ZSBlbGVtZW50IGZyb20gZW5kIG9mIFF1ZXVlJywgKCkgPT4ge1xuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKHVuZGVmaW5lZCwgZWxlbWVudEV4aXN0KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbn07XG5cbmZ1bmN0aW9uIHBlZWsoKSB7XG5cbiAgICBsZXQgcXVldWUgPSBuZXcgUXVldWUoKSxcbiAgICAgICAgZGF0YSA9IFsnZmlyc3QnLCAyLCAzLCA0LCA1LCAnbGFzdCddO1xuXG4gICAgZGF0YS5tYXAoZWw9PnF1ZXVlLnN0b3JlKGVsKSk7XG5cbiAgICBsZXQgbGFzdEVsZW1lbnQgPSBxdWV1ZS5wZWVrKCk7XG5cbiAgICBsZXQgZWxlbWVudEV4aXN0ID0gcXVldWUucXVldWUuZmluZChcbiAgICAgICAgZWw9PmVsID09IGxhc3RFbGVtZW50XG4gICAgKTtcblxuICAgIGRlc2NyaWJlKCdRdWV1ZSBwZWVrIG1ldGhvZCcsICgpID0+IHtcbiAgICAgICAgaXQoJ1JldHVybiBlbGVtZW50IHZhbHVlIGZyb20gZW5kIG9mIFF1ZXVlJywgKCkgPT4ge1xuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKCdmaXJzdCcsIGxhc3RFbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGl0KFwiRG9uJ3QgcmVtb3ZlIGVsZW1lbnQgZnJvbSBlbmQgb2YgUXVldWVcIiwgKCkgPT4ge1xuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKCdmaXJzdCcsIGVsZW1lbnRFeGlzdCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG59O1xuXG5mdW5jdGlvbiBpc0VtcHR5KCkge1xuXG4gICAgbGV0IHF1ZXVlID0gbmV3IFF1ZXVlKCksXG4gICAgICAgIGRhdGEgPSBbJ2ZpcnN0JywgMiwgMywgNCwgNSwgJ2xhc3QnXTtcblxuICAgIGRhdGEubWFwKGVsPT5xdWV1ZS5zdG9yZShlbCkpO1xuXG4gICAgbGV0IGFub3RoZXJRdWV1ZSA9IG5ldyBRdWV1ZSgpO1xuXG4gICAgZGVzY3JpYmUoJ1F1ZXVlIGlzRW1wdHkgbWV0aG9kJywgKCkgPT4ge1xuICAgICAgICBpdCgnUmV0dXJuIGZhbHNlIGlmIFF1ZXVlIGlzIG5vdCBlbXB0eScsICgpID0+IHtcbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChmYWxzZSwgcXVldWUuaXNFbXB0eSgpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGl0KCdSZXR1cm4gdHJ1ZSBpZiBRdWV1ZSBpcyBlbXB0eScsICgpID0+IHtcbiAgICAgICAgICAgIGFzc2VydC5lcXVhbCh0cnVlLCBhbm90aGVyUXVldWUuaXNFbXB0eSgpKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbn07XG5cbmZ1bmN0aW9uIGxlbmd0aCgpIHtcblxuICAgIGxldCBxdWV1ZSA9IG5ldyBRdWV1ZSgpLFxuICAgICAgICBkYXRhID0gWydmaXJzdCcsIDIsIDMsIDQsIDUsICdsYXN0J10sXG4gICAgICAgIGRhdGFMZW5ndGggPSBkYXRhLmxlbmd0aDtcblxuICAgIGRhdGEubWFwKGVsPT5xdWV1ZS5zdG9yZShlbCkpO1xuXG4gICAgZGVzY3JpYmUoJ1F1ZXVlIGxlbmd0aCBtZXRob2QnLCAoKSA9PiB7XG4gICAgICAgIGl0KCdSZXR1cm4gUXVldWUgbGVuZ3RoJywgKCkgPT4ge1xuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKGRhdGFMZW5ndGgsIHF1ZXVlLmxlbmd0aCgpKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbn07Il19
},{"../../src/lib/data-structure/queue/Queue.js":12,"assert":5}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StackSpec = undefined;

var _Stack = require('../../src/lib/data-structure/stack/Stack.js');

var assert = require('assert');

let StackSpec = exports.StackSpec = class StackSpec {
    static run(_test) {
        return actions[_test]();
    }
};


var actions = {
    init: init,
    push: push,
    pop: pop,
    pip: pip,
    length: length,
    isEmpty: isEmpty,
    clean: clean
};

function init() {

    let stack = new _Stack.Stack();

    describe('Init Stack', () => {
        it('Instance of Stack', () => {
            assert.equal(true, stack instanceof _Stack.Stack);
        });
    });
};

function push() {

    let stack = new _Stack.Stack(),
        data = [1, 2, 3, 'end'];

    data.map(el => stack.push(el));

    describe('Stack push method.', () => {
        it('Added element to Stack', () => {
            assert.equal('end', stack.pop().data);
        });
    });
};

function pop() {

    let stack = new _Stack.Stack(),
        data = [1, 2, 3, 'end'];

    data.map(el => stack.push(el));

    let lastPop = stack.pop();

    describe('Stack pop method.', () => {
        it('Return last element', () => {
            assert.equal(true, lastPop instanceof _Stack.StackItem);
        });
    });
};

function pip() {

    let stack = new _Stack.Stack(),
        data = [1, 2, 3, 'end'];

    data.map(el => stack.push(el));

    let content = stack.pip();

    describe('Stack pip method.', () => {
        it('Return content of Stack', () => {
            assert.equal(data.join(''), content.join(''));
        });
    });
};

function length() {

    let stack = new _Stack.Stack(),
        data = [1, 2, 3, 'end'];
    data.map(el => stack.push(el));

    describe('Stack length method.', () => {
        it('Return length of Stack', () => {
            assert.equal(4, stack.length());
        });
    });
};

function isEmpty() {

    let stack = new _Stack.Stack();

    describe('Stack isEmpty method.', () => {
        it('Return true if stack is empty, otherwise false', () => {
            assert.equal(true, stack.isEmpty());
        });
    });
};

function clean() {

    let stack = new _Stack.Stack(),
        data = [1, 2, 3, 'end'];
    data.map(el => stack.push(el));
    stack.clean(true);

    describe('Stack clean method.', () => {
        it('Clear out stack', () => {
            assert.equal(0, stack.length());
        });
    });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvZXMtNi1kYXRhLXN0cnVjdHVyZS9lMmUvc3JjL1N0YWNrU3BlYy5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwiU3RhY2tTcGVjIiwicnVuIiwiX3Rlc3QiLCJhY3Rpb25zIiwiaW5pdCIsInB1c2giLCJwb3AiLCJwaXAiLCJsZW5ndGgiLCJpc0VtcHR5IiwiY2xlYW4iLCJzdGFjayIsImRlc2NyaWJlIiwiaXQiLCJlcXVhbCIsImRhdGEiLCJtYXAiLCJlbCIsImxhc3RQb3AiLCJjb250ZW50Iiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBLElBQUlBLFNBQVNDLFFBQVEsUUFBUixDQUFiOztJQUVhQyxTLFdBQUFBLFMsR0FBTixNQUFNQSxTQUFOLENBQWdCO0FBQ25CLFdBQU9DLEdBQVAsQ0FBV0MsS0FBWCxFQUFpQjtBQUNiLGVBQU9DLFFBQVFELEtBQVIsR0FBUDtBQUNIO0FBSGtCLEM7OztBQU12QixJQUFJQyxVQUFVO0FBQ1ZDLFVBQU1BLElBREk7QUFFVkMsVUFBTUEsSUFGSTtBQUdWQyxTQUFLQSxHQUhLO0FBSVZDLFNBQUtBLEdBSks7QUFLVkMsWUFBUUEsTUFMRTtBQU1WQyxhQUFTQSxPQU5DO0FBT1ZDLFdBQU9BO0FBUEcsQ0FBZDs7QUFVQSxTQUFTTixJQUFULEdBQWdCOztBQUVaLFFBQUlPLFFBQVEsa0JBQVo7O0FBRUFDLGFBQVMsWUFBVCxFQUF1QixNQUFNO0FBQ3pCQyxXQUFHLG1CQUFILEVBQXVCLE1BQU07QUFDekJmLG1CQUFPZ0IsS0FBUCxDQUFhLElBQWIsRUFBbUJILDZCQUFuQjtBQUNILFNBRkQ7QUFHSCxLQUpEO0FBTUg7O0FBRUQsU0FBU04sSUFBVCxHQUFnQjs7QUFFWixRQUFJTSxRQUFRLGtCQUFaO0FBQUEsUUFDSUksT0FBTyxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLEtBQVAsQ0FEWDs7QUFHQUEsU0FBS0MsR0FBTCxDQUFTQyxNQUFJTixNQUFNTixJQUFOLENBQVdZLEVBQVgsQ0FBYjs7QUFFQUwsYUFBUyxvQkFBVCxFQUErQixNQUFNO0FBQ2pDQyxXQUFHLHdCQUFILEVBQTRCLE1BQU07QUFDOUJmLG1CQUFPZ0IsS0FBUCxDQUFhLEtBQWIsRUFBb0JILE1BQU1MLEdBQU4sR0FBWVMsSUFBaEM7QUFDSCxTQUZEO0FBR0gsS0FKRDtBQU1IOztBQUVELFNBQVNULEdBQVQsR0FBZTs7QUFFWCxRQUFJSyxRQUFRLGtCQUFaO0FBQUEsUUFDSUksT0FBTyxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLEtBQVAsQ0FEWDs7QUFHQUEsU0FBS0MsR0FBTCxDQUFTQyxNQUFJTixNQUFNTixJQUFOLENBQVdZLEVBQVgsQ0FBYjs7QUFFQSxRQUFJQyxVQUFVUCxNQUFNTCxHQUFOLEVBQWQ7O0FBRUFNLGFBQVMsbUJBQVQsRUFBOEIsTUFBTTtBQUNoQ0MsV0FBRyxxQkFBSCxFQUF5QixNQUFNO0FBQzNCZixtQkFBT2dCLEtBQVAsQ0FBYSxJQUFiLEVBQW1CSSxtQ0FBbkI7QUFDSCxTQUZEO0FBR0gsS0FKRDtBQU1IOztBQUVELFNBQVNYLEdBQVQsR0FBZTs7QUFFWCxRQUFJSSxRQUFRLGtCQUFaO0FBQUEsUUFDSUksT0FBTyxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLEtBQVAsQ0FEWDs7QUFHQUEsU0FBS0MsR0FBTCxDQUFTQyxNQUFJTixNQUFNTixJQUFOLENBQVdZLEVBQVgsQ0FBYjs7QUFFQSxRQUFJRSxVQUFVUixNQUFNSixHQUFOLEVBQWQ7O0FBRUFLLGFBQVMsbUJBQVQsRUFBOEIsTUFBTTtBQUNoQ0MsV0FBRyx5QkFBSCxFQUE2QixNQUFNO0FBQy9CZixtQkFBT2dCLEtBQVAsQ0FBYUMsS0FBS0ssSUFBTCxDQUFVLEVBQVYsQ0FBYixFQUE0QkQsUUFBUUMsSUFBUixDQUFhLEVBQWIsQ0FBNUI7QUFDSCxTQUZEO0FBR0gsS0FKRDtBQU1IOztBQUVELFNBQVNaLE1BQVQsR0FBa0I7O0FBRWQsUUFBSUcsUUFBUSxrQkFBWjtBQUFBLFFBQ0lJLE9BQU8sQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxLQUFQLENBRFg7QUFFQUEsU0FBS0MsR0FBTCxDQUFTQyxNQUFJTixNQUFNTixJQUFOLENBQVdZLEVBQVgsQ0FBYjs7QUFFQUwsYUFBUyxzQkFBVCxFQUFpQyxNQUFNO0FBQ25DQyxXQUFHLHdCQUFILEVBQTRCLE1BQU07QUFDOUJmLG1CQUFPZ0IsS0FBUCxDQUFhLENBQWIsRUFBZ0JILE1BQU1ILE1BQU4sRUFBaEI7QUFDSCxTQUZEO0FBR0gsS0FKRDtBQU1IOztBQUVELFNBQVNDLE9BQVQsR0FBbUI7O0FBRWYsUUFBSUUsUUFBUSxrQkFBWjs7QUFFQUMsYUFBUyx1QkFBVCxFQUFrQyxNQUFNO0FBQ3BDQyxXQUFHLGdEQUFILEVBQW9ELE1BQU07QUFDdERmLG1CQUFPZ0IsS0FBUCxDQUFhLElBQWIsRUFBbUJILE1BQU1GLE9BQU4sRUFBbkI7QUFDSCxTQUZEO0FBR0gsS0FKRDtBQU1IOztBQUVELFNBQVNDLEtBQVQsR0FBaUI7O0FBRWIsUUFBSUMsUUFBUSxrQkFBWjtBQUFBLFFBQ0lJLE9BQU8sQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxLQUFQLENBRFg7QUFFQUEsU0FBS0MsR0FBTCxDQUFTQyxNQUFJTixNQUFNTixJQUFOLENBQVdZLEVBQVgsQ0FBYjtBQUNBTixVQUFNRCxLQUFOLENBQVksSUFBWjs7QUFFQUUsYUFBUyxxQkFBVCxFQUFnQyxNQUFNO0FBQ2xDQyxXQUFHLGlCQUFILEVBQXFCLE1BQU07QUFDdkJmLG1CQUFPZ0IsS0FBUCxDQUFhLENBQWIsRUFBZ0JILE1BQU1ILE1BQU4sRUFBaEI7QUFDSCxTQUZEO0FBR0gsS0FKRDtBQU1IIiwiZmlsZSI6IlN0YWNrU3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3RhY2ssIFN0YWNrSXRlbX0gZnJvbSAnLi4vLi4vc3JjL2xpYi9kYXRhLXN0cnVjdHVyZS9zdGFjay9TdGFjay5qcyc7XG5cbnZhciBhc3NlcnQgPSByZXF1aXJlKCdhc3NlcnQnKTtcblxuZXhwb3J0IGNsYXNzIFN0YWNrU3BlYyB7XG4gICAgc3RhdGljIHJ1bihfdGVzdCl7XG4gICAgICAgIHJldHVybiBhY3Rpb25zW190ZXN0XSgpO1xuICAgIH1cbn1cblxudmFyIGFjdGlvbnMgPSB7XG4gICAgaW5pdDogaW5pdCxcbiAgICBwdXNoOiBwdXNoLFxuICAgIHBvcDogcG9wLFxuICAgIHBpcDogcGlwLFxuICAgIGxlbmd0aDogbGVuZ3RoLFxuICAgIGlzRW1wdHk6IGlzRW1wdHksXG4gICAgY2xlYW46IGNsZWFuLFxufTtcblxuZnVuY3Rpb24gaW5pdCgpIHtcblxuICAgIGxldCBzdGFjayA9IG5ldyBTdGFjaygpO1xuXG4gICAgZGVzY3JpYmUoJ0luaXQgU3RhY2snLCAoKSA9PiB7XG4gICAgICAgIGl0KCdJbnN0YW5jZSBvZiBTdGFjaycsKCkgPT4ge1xuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKHRydWUsIHN0YWNrIGluc3RhbmNlb2YgU3RhY2spO1xuICAgICAgICB9KVxuICAgIH0pO1xuXG59O1xuXG5mdW5jdGlvbiBwdXNoKCkge1xuXG4gICAgbGV0IHN0YWNrID0gbmV3IFN0YWNrKCksXG4gICAgICAgIGRhdGEgPSBbMSwyLDMsJ2VuZCddO1xuXG4gICAgZGF0YS5tYXAoZWw9PnN0YWNrLnB1c2goZWwpKTtcblxuICAgIGRlc2NyaWJlKCdTdGFjayBwdXNoIG1ldGhvZC4nLCAoKSA9PiB7XG4gICAgICAgIGl0KCdBZGRlZCBlbGVtZW50IHRvIFN0YWNrJywoKSA9PiB7XG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwoJ2VuZCcsIHN0YWNrLnBvcCgpLmRhdGEpO1xuICAgICAgICB9KVxuICAgIH0pO1xuXG59O1xuXG5mdW5jdGlvbiBwb3AoKSB7XG5cbiAgICBsZXQgc3RhY2sgPSBuZXcgU3RhY2soKSxcbiAgICAgICAgZGF0YSA9IFsxLDIsMywnZW5kJ107XG5cbiAgICBkYXRhLm1hcChlbD0+c3RhY2sucHVzaChlbCkpO1xuXG4gICAgbGV0IGxhc3RQb3AgPSBzdGFjay5wb3AoKTtcblxuICAgIGRlc2NyaWJlKCdTdGFjayBwb3AgbWV0aG9kLicsICgpID0+IHtcbiAgICAgICAgaXQoJ1JldHVybiBsYXN0IGVsZW1lbnQnLCgpID0+IHtcbiAgICAgICAgICAgIGFzc2VydC5lcXVhbCh0cnVlLCBsYXN0UG9wIGluc3RhbmNlb2YgU3RhY2tJdGVtKTtcbiAgICAgICAgfSlcbiAgICB9KTtcblxufTtcblxuZnVuY3Rpb24gcGlwKCkge1xuXG4gICAgbGV0IHN0YWNrID0gbmV3IFN0YWNrKCksXG4gICAgICAgIGRhdGEgPSBbMSwyLDMsJ2VuZCddO1xuXG4gICAgZGF0YS5tYXAoZWw9PnN0YWNrLnB1c2goZWwpKTtcblxuICAgIGxldCBjb250ZW50ID0gc3RhY2sucGlwKCk7XG5cbiAgICBkZXNjcmliZSgnU3RhY2sgcGlwIG1ldGhvZC4nLCAoKSA9PiB7XG4gICAgICAgIGl0KCdSZXR1cm4gY29udGVudCBvZiBTdGFjaycsKCkgPT4ge1xuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKGRhdGEuam9pbignJyksIGNvbnRlbnQuam9pbignJykpO1xuICAgICAgICB9KVxuICAgIH0pO1xuXG59O1xuXG5mdW5jdGlvbiBsZW5ndGgoKSB7XG5cbiAgICBsZXQgc3RhY2sgPSBuZXcgU3RhY2soKSxcbiAgICAgICAgZGF0YSA9IFsxLDIsMywnZW5kJ107XG4gICAgZGF0YS5tYXAoZWw9PnN0YWNrLnB1c2goZWwpKTtcblxuICAgIGRlc2NyaWJlKCdTdGFjayBsZW5ndGggbWV0aG9kLicsICgpID0+IHtcbiAgICAgICAgaXQoJ1JldHVybiBsZW5ndGggb2YgU3RhY2snLCgpID0+IHtcbiAgICAgICAgICAgIGFzc2VydC5lcXVhbCg0LCBzdGFjay5sZW5ndGgoKSk7XG4gICAgICAgIH0pXG4gICAgfSk7XG5cbn07XG5cbmZ1bmN0aW9uIGlzRW1wdHkoKSB7XG5cbiAgICBsZXQgc3RhY2sgPSBuZXcgU3RhY2soKTtcblxuICAgIGRlc2NyaWJlKCdTdGFjayBpc0VtcHR5IG1ldGhvZC4nLCAoKSA9PiB7XG4gICAgICAgIGl0KCdSZXR1cm4gdHJ1ZSBpZiBzdGFjayBpcyBlbXB0eSwgb3RoZXJ3aXNlIGZhbHNlJywoKSA9PiB7XG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwodHJ1ZSwgc3RhY2suaXNFbXB0eSgpKTtcbiAgICAgICAgfSlcbiAgICB9KTtcblxufTtcblxuZnVuY3Rpb24gY2xlYW4oKSB7XG5cbiAgICBsZXQgc3RhY2sgPSBuZXcgU3RhY2soKSxcbiAgICAgICAgZGF0YSA9IFsxLDIsMywnZW5kJ107XG4gICAgZGF0YS5tYXAoZWw9PnN0YWNrLnB1c2goZWwpKTtcbiAgICBzdGFjay5jbGVhbih0cnVlKVxuXG4gICAgZGVzY3JpYmUoJ1N0YWNrIGNsZWFuIG1ldGhvZC4nLCAoKSA9PiB7XG4gICAgICAgIGl0KCdDbGVhciBvdXQgc3RhY2snLCgpID0+IHtcbiAgICAgICAgICAgIGFzc2VydC5lcXVhbCgwLCBzdGFjay5sZW5ndGgoKSk7XG4gICAgICAgIH0pXG4gICAgfSk7XG5cbn07Il19
},{"../../src/lib/data-structure/stack/Stack.js":13,"assert":5}],4:[function(require,module,exports){
'use strict';

var _LinkedListSpec = require('./LinkedListSpec.js');

var _StackSpec = require('./StackSpec.js');

var _QueueSpec = require('./QueueSpec.js');

_LinkedListSpec.LinkedListSpec.run('init');
_LinkedListSpec.LinkedListSpec.run('append');
_LinkedListSpec.LinkedListSpec.run('prepend');
_LinkedListSpec.LinkedListSpec.run('deleteByVal');
_LinkedListSpec.LinkedListSpec.run('contains');
_LinkedListSpec.LinkedListSpec.run('clean');
_LinkedListSpec.LinkedListSpec.run('length');
_LinkedListSpec.LinkedListSpec.run('lastItem');
_LinkedListSpec.LinkedListSpec.run('toArray');

_StackSpec.StackSpec.run('init');
_StackSpec.StackSpec.run('push');
_StackSpec.StackSpec.run('pop');
_StackSpec.StackSpec.run('pip');
_StackSpec.StackSpec.run('length');
_StackSpec.StackSpec.run('isEmpty');
_StackSpec.StackSpec.run('clean');

_QueueSpec.QueueSpec.run('init');
_QueueSpec.QueueSpec.run('store');
_QueueSpec.QueueSpec.run('access');
_QueueSpec.QueueSpec.run('peek');
_QueueSpec.QueueSpec.run('isEmpty');
_QueueSpec.QueueSpec.run('length');
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvZXMtNi1kYXRhLXN0cnVjdHVyZS9lMmUvc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbInJ1biJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQSwrQkFBZUEsR0FBZixDQUFtQixNQUFuQjtBQUNBLCtCQUFlQSxHQUFmLENBQW1CLFFBQW5CO0FBQ0EsK0JBQWVBLEdBQWYsQ0FBbUIsU0FBbkI7QUFDQSwrQkFBZUEsR0FBZixDQUFtQixhQUFuQjtBQUNBLCtCQUFlQSxHQUFmLENBQW1CLFVBQW5CO0FBQ0EsK0JBQWVBLEdBQWYsQ0FBbUIsT0FBbkI7QUFDQSwrQkFBZUEsR0FBZixDQUFtQixRQUFuQjtBQUNBLCtCQUFlQSxHQUFmLENBQW1CLFVBQW5CO0FBQ0EsK0JBQWVBLEdBQWYsQ0FBbUIsU0FBbkI7O0FBRUEscUJBQVVBLEdBQVYsQ0FBYyxNQUFkO0FBQ0EscUJBQVVBLEdBQVYsQ0FBYyxNQUFkO0FBQ0EscUJBQVVBLEdBQVYsQ0FBYyxLQUFkO0FBQ0EscUJBQVVBLEdBQVYsQ0FBYyxLQUFkO0FBQ0EscUJBQVVBLEdBQVYsQ0FBYyxRQUFkO0FBQ0EscUJBQVVBLEdBQVYsQ0FBYyxTQUFkO0FBQ0EscUJBQVVBLEdBQVYsQ0FBYyxPQUFkOztBQUVBLHFCQUFVQSxHQUFWLENBQWMsTUFBZDtBQUNBLHFCQUFVQSxHQUFWLENBQWMsT0FBZDtBQUNBLHFCQUFVQSxHQUFWLENBQWMsUUFBZDtBQUNBLHFCQUFVQSxHQUFWLENBQWMsTUFBZDtBQUNBLHFCQUFVQSxHQUFWLENBQWMsU0FBZDtBQUNBLHFCQUFVQSxHQUFWLENBQWMsUUFBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TGlua2VkTGlzdFNwZWN9IGZyb20gJy4vTGlua2VkTGlzdFNwZWMuanMnO1xuaW1wb3J0IHtTdGFja1NwZWN9IGZyb20gJy4vU3RhY2tTcGVjLmpzJztcbmltcG9ydCB7UXVldWVTcGVjfSBmcm9tICcuL1F1ZXVlU3BlYy5qcyc7XG5cbkxpbmtlZExpc3RTcGVjLnJ1bignaW5pdCcpO1xuTGlua2VkTGlzdFNwZWMucnVuKCdhcHBlbmQnKTtcbkxpbmtlZExpc3RTcGVjLnJ1bigncHJlcGVuZCcpO1xuTGlua2VkTGlzdFNwZWMucnVuKCdkZWxldGVCeVZhbCcpO1xuTGlua2VkTGlzdFNwZWMucnVuKCdjb250YWlucycpO1xuTGlua2VkTGlzdFNwZWMucnVuKCdjbGVhbicpO1xuTGlua2VkTGlzdFNwZWMucnVuKCdsZW5ndGgnKTtcbkxpbmtlZExpc3RTcGVjLnJ1bignbGFzdEl0ZW0nKTtcbkxpbmtlZExpc3RTcGVjLnJ1bigndG9BcnJheScpO1xuXG5TdGFja1NwZWMucnVuKCdpbml0Jyk7XG5TdGFja1NwZWMucnVuKCdwdXNoJyk7XG5TdGFja1NwZWMucnVuKCdwb3AnKTtcblN0YWNrU3BlYy5ydW4oJ3BpcCcpO1xuU3RhY2tTcGVjLnJ1bignbGVuZ3RoJyk7XG5TdGFja1NwZWMucnVuKCdpc0VtcHR5Jyk7XG5TdGFja1NwZWMucnVuKCdjbGVhbicpO1xuXG5RdWV1ZVNwZWMucnVuKCdpbml0Jyk7XG5RdWV1ZVNwZWMucnVuKCdzdG9yZScpO1xuUXVldWVTcGVjLnJ1bignYWNjZXNzJyk7XG5RdWV1ZVNwZWMucnVuKCdwZWVrJyk7XG5RdWV1ZVNwZWMucnVuKCdpc0VtcHR5Jyk7XG5RdWV1ZVNwZWMucnVuKCdsZW5ndGgnKTtcbiJdfQ==
},{"./LinkedListSpec.js":1,"./QueueSpec.js":2,"./StackSpec.js":3}],5:[function(require,module,exports){
// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
//
// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
//
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

// when used in node, this will actually load the util module we depend on
// versus loading the builtin util module as happens otherwise
// this is a bug in node module loading as far as I am concerned
var util = require('util/');

var pSlice = Array.prototype.slice;
var hasOwn = Object.prototype.hasOwnProperty;

// 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.

var assert = module.exports = ok;

// 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })

assert.AssertionError = function AssertionError(options) {
  this.name = 'AssertionError';
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;
  if (options.message) {
    this.message = options.message;
    this.generatedMessage = false;
  } else {
    this.message = getMessage(this);
    this.generatedMessage = true;
  }
  var stackStartFunction = options.stackStartFunction || fail;

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, stackStartFunction);
  }
  else {
    // non v8 browsers so we can have a stacktrace
    var err = new Error();
    if (err.stack) {
      var out = err.stack;

      // try to strip useless frames
      var fn_name = stackStartFunction.name;
      var idx = out.indexOf('\n' + fn_name);
      if (idx >= 0) {
        // once we have located the function frame
        // we need to strip out everything before it (and its line)
        var next_line = out.indexOf('\n', idx + 1);
        out = out.substring(next_line + 1);
      }

      this.stack = out;
    }
  }
};

// assert.AssertionError instanceof Error
util.inherits(assert.AssertionError, Error);

function replacer(key, value) {
  if (util.isUndefined(value)) {
    return '' + value;
  }
  if (util.isNumber(value) && (isNaN(value) || !isFinite(value))) {
    return value.toString();
  }
  if (util.isFunction(value) || util.isRegExp(value)) {
    return value.toString();
  }
  return value;
}

function truncate(s, n) {
  if (util.isString(s)) {
    return s.length < n ? s : s.slice(0, n);
  } else {
    return s;
  }
}

function getMessage(self) {
  return truncate(JSON.stringify(self.actual, replacer), 128) + ' ' +
         self.operator + ' ' +
         truncate(JSON.stringify(self.expected, replacer), 128);
}

// At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.

// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.

function fail(actual, expected, message, operator, stackStartFunction) {
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
}

// EXTENSION! allows for well behaved errors defined elsewhere.
assert.fail = fail;

// 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, !!guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.

function ok(value, message) {
  if (!value) fail(value, true, message, '==', assert.ok);
}
assert.ok = ok;

// 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);

assert.equal = function equal(actual, expected, message) {
  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
};

// 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);

assert.notEqual = function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, '!=', assert.notEqual);
  }
};

// 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);

assert.deepEqual = function deepEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected)) {
    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
  }
};

function _deepEqual(actual, expected) {
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (util.isBuffer(actual) && util.isBuffer(expected)) {
    if (actual.length != expected.length) return false;

    for (var i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) return false;
    }

    return true;

  // 7.2. If the expected value is a Date object, the actual value is
  // equivalent if it is also a Date object that refers to the same time.
  } else if (util.isDate(actual) && util.isDate(expected)) {
    return actual.getTime() === expected.getTime();

  // 7.3 If the expected value is a RegExp object, the actual value is
  // equivalent if it is also a RegExp object with the same source and
  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
    return actual.source === expected.source &&
           actual.global === expected.global &&
           actual.multiline === expected.multiline &&
           actual.lastIndex === expected.lastIndex &&
           actual.ignoreCase === expected.ignoreCase;

  // 7.4. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!util.isObject(actual) && !util.isObject(expected)) {
    return actual == expected;

  // 7.5 For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected);
  }
}

function isArguments(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
}

function objEquiv(a, b) {
  if (util.isNullOrUndefined(a) || util.isNullOrUndefined(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  //~~~I've managed to break Object.keys through screwy arguments passing.
  //   Converting to array solves the problem.
  if (isArguments(a)) {
    if (!isArguments(b)) {
      return false;
    }
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b);
  }
  try {
    var ka = objectKeys(a),
        kb = objectKeys(b),
        key, i;
  } catch (e) {//happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key])) return false;
  }
  return true;
}

// 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);

assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
  if (_deepEqual(actual, expected)) {
    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
  }
};

// 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);

assert.strictEqual = function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, '===', assert.strictEqual);
  }
};

// 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    fail(actual, expected, message, '!==', assert.notStrictEqual);
  }
};

function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }

  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
    return expected.test(actual);
  } else if (actual instanceof expected) {
    return true;
  } else if (expected.call({}, actual) === true) {
    return true;
  }

  return false;
}

function _throws(shouldThrow, block, expected, message) {
  var actual;

  if (util.isString(expected)) {
    message = expected;
    expected = null;
  }

  try {
    block();
  } catch (e) {
    actual = e;
  }

  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
            (message ? ' ' + message : '.');

  if (shouldThrow && !actual) {
    fail(actual, expected, 'Missing expected exception' + message);
  }

  if (!shouldThrow && expectedException(actual, expected)) {
    fail(actual, expected, 'Got unwanted exception' + message);
  }

  if ((shouldThrow && actual && expected &&
      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
    throw actual;
  }
}

// 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);

assert.throws = function(block, /*optional*/error, /*optional*/message) {
  _throws.apply(this, [true].concat(pSlice.call(arguments)));
};

// EXTENSION! This is annoying to write outside this module.
assert.doesNotThrow = function(block, /*optional*/message) {
  _throws.apply(this, [false].concat(pSlice.call(arguments)));
};

assert.ifError = function(err) { if (err) {throw err;}};

var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    if (hasOwn.call(obj, key)) keys.push(key);
  }
  return keys;
};

},{"util/":9}],6:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
}

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

},{}],7:[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],8:[function(require,module,exports){
module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}
},{}],9:[function(require,module,exports){
(function (process,global){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = require('./support/isBuffer');

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = require('inherits');

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

}).call(this,require("g5I+bs"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./support/isBuffer":8,"g5I+bs":6,"inherits":7}],10:[function(require,module,exports){
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
},{}],11:[function(require,module,exports){
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
},{"../../_utl.js":10}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Queue
 */
let Queue = exports.Queue = class Queue {
    constructor() {
        this.queue = [];
        this._length = 0;
    }
    /**
     * Add element to start of Queue
     * @param data {Any} queue element value
     */
    store(data) {
        this.queue.unshift(data);
        this._length++;
    }
    /**
     * Return and remove element value from end of Queue
     * @returns {Any}
     */
    access() {
        if (this._length == 0) return false;
        let res = this.queue.pop();
        this._length--;
        return res;
    }
    /**
     * Returns, but does not delete element form end of Queue
     * @returns {*}
     */
    peek() {
        if (this._length == 0) return false;
        return this.queue[this._length - 1];
    }
    /**
     * Return true if Queue is empty, otherwise false
     * @returns {boolean}
     */
    isEmpty() {
        return this._length === 0;
    }
    /**
     * Return Queue length
     * @returns {number} Queue length
     */
    length() {
        return this._length;
    }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvZXMtNi1kYXRhLXN0cnVjdHVyZS9zcmMvbGliL2RhdGEtc3RydWN0dXJlL3F1ZXVlL1F1ZXVlLmpzIl0sIm5hbWVzIjpbIlF1ZXVlIiwiY29uc3RydWN0b3IiLCJxdWV1ZSIsIl9sZW5ndGgiLCJzdG9yZSIsImRhdGEiLCJ1bnNoaWZ0IiwiYWNjZXNzIiwicmVzIiwicG9wIiwicGVlayIsImlzRW1wdHkiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7OztJQUdhQSxLLFdBQUFBLEssR0FBTixNQUFNQSxLQUFOLENBQVk7QUFDZkMsa0JBQWE7QUFDVCxhQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUNBLGFBQUtDLE9BQUwsR0FBZSxDQUFmO0FBQ0g7QUFDRDs7OztBQUlBQyxVQUFNQyxJQUFOLEVBQVk7QUFDUixhQUFLSCxLQUFMLENBQVdJLE9BQVgsQ0FBbUJELElBQW5CO0FBQ0EsYUFBS0YsT0FBTDtBQUNIO0FBQ0Q7Ozs7QUFJQUksYUFBUztBQUNMLFlBQUcsS0FBS0osT0FBTCxJQUFnQixDQUFuQixFQUFzQixPQUFPLEtBQVA7QUFDdEIsWUFBSUssTUFBTSxLQUFLTixLQUFMLENBQVdPLEdBQVgsRUFBVjtBQUNBLGFBQUtOLE9BQUw7QUFDQSxlQUFPSyxHQUFQO0FBQ0g7QUFDRDs7OztBQUlBRSxXQUFPO0FBQ0gsWUFBRyxLQUFLUCxPQUFMLElBQWdCLENBQW5CLEVBQXNCLE9BQU8sS0FBUDtBQUN0QixlQUFPLEtBQUtELEtBQUwsQ0FBVyxLQUFLQyxPQUFMLEdBQWUsQ0FBMUIsQ0FBUDtBQUNIO0FBQ0Q7Ozs7QUFJQVEsY0FBVTtBQUNOLGVBQU8sS0FBS1IsT0FBTCxLQUFpQixDQUF4QjtBQUNIO0FBQ0Q7Ozs7QUFJQVMsYUFBUztBQUNMLGVBQU8sS0FBS1QsT0FBWjtBQUNIO0FBNUNjLEMiLCJmaWxlIjoiUXVldWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFF1ZXVlXG4gKi9cbmV4cG9ydCBjbGFzcyBRdWV1ZSB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5xdWV1ZSA9IFtdO1xuICAgICAgICB0aGlzLl9sZW5ndGggPSAwO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGQgZWxlbWVudCB0byBzdGFydCBvZiBRdWV1ZVxuICAgICAqIEBwYXJhbSBkYXRhIHtBbnl9IHF1ZXVlIGVsZW1lbnQgdmFsdWVcbiAgICAgKi9cbiAgICBzdG9yZShkYXRhKSB7XG4gICAgICAgIHRoaXMucXVldWUudW5zaGlmdChkYXRhKTtcbiAgICAgICAgdGhpcy5fbGVuZ3RoKys7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybiBhbmQgcmVtb3ZlIGVsZW1lbnQgdmFsdWUgZnJvbSBlbmQgb2YgUXVldWVcbiAgICAgKiBAcmV0dXJucyB7QW55fVxuICAgICAqL1xuICAgIGFjY2VzcygpIHtcbiAgICAgICAgaWYodGhpcy5fbGVuZ3RoID09IDApIHJldHVybiBmYWxzZTtcbiAgICAgICAgbGV0IHJlcyA9IHRoaXMucXVldWUucG9wKCk7XG4gICAgICAgIHRoaXMuX2xlbmd0aC0tO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zLCBidXQgZG9lcyBub3QgZGVsZXRlIGVsZW1lbnQgZm9ybSBlbmQgb2YgUXVldWVcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBwZWVrKCkge1xuICAgICAgICBpZih0aGlzLl9sZW5ndGggPT0gMCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gdGhpcy5xdWV1ZVt0aGlzLl9sZW5ndGggLSAxXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRydWUgaWYgUXVldWUgaXMgZW1wdHksIG90aGVyd2lzZSBmYWxzZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGlzRW1wdHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sZW5ndGggPT09IDA7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybiBRdWV1ZSBsZW5ndGhcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSBRdWV1ZSBsZW5ndGhcbiAgICAgKi9cbiAgICBsZW5ndGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sZW5ndGg7XG4gICAgfVxufSJdfQ==
},{}],13:[function(require,module,exports){
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
},{"../../_utl.js":10}]},{},[4])