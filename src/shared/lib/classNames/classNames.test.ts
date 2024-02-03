import {classNames} from './classNames';

describe('classNames',() => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass')
    });

    test('with additional class', () => {
        const expected = 'someClass red'
        expect(classNames('someClass', {}, ['red'])).toBe(expected)
    });

    test('with all params', () => {
        const expected = 'someClass red hovered selectable'
        expect(classNames(
            'someClass',
            {hovered: true, selectable: true, focus: false},
            ['red']
        )).toBe(expected)
    });

    test('with all params, but one is undefined', () => {
        const expected = 'someClass red hovered selectable'
        expect(classNames(
            'someClass',
            {hovered: true, selectable: true, focus: undefined},
            ['red']
        )).toBe(expected)
    });
})
