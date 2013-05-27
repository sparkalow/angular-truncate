/*global module, inject, beforeEach, expect, describe, it */

'use strict';

describe('truncate', function () {

    var characterFilter;

    beforeEach(module('truncate'));
    beforeEach(inject(function ($filter) {
        characterFilter = $filter('characters');
    }));

    it('should do nothing to this string', function () {
        expect(characterFilter('1234567890')).toEqual('1234567890');
    });

    it('should fail', function () {
        expect(characterFilter(null, 30)).toNotEqual('1234567890');
    });

    it('should not trim these down', function () {
        expect(characterFilter('1234567890', 30)).toEqual('1234567890');
    });

    it('should trim these down', function () {
        expect(characterFilter('1234567890', 5)).toEqual('12345...');
    });

    it('should trim this down ignoring the space', function () {
        expect(characterFilter('123456789 10 11 12 13 14', 13)).toEqual('123456789 10...');
    });

});
