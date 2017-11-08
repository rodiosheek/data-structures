import {AAMap} from '../../src/lib/data-structure/Map/.js';

import {expect} from 'chai';

export class AAMapSpec {
    static run(_test){
        return actions[_test]();
    }
}

var actions = {
    init: init,
};

function init() {

    describe('Map', () => {
        it('Add element to Map',() => {

            let map_1 = new AAMap();

            map_1.set('one', 1);
            map_1.set('two', 2);
            map_1.set('three', 3);

            let mapSize = map_1.size();

            expect(mapSize).to.equal(3);


        })
    });

};