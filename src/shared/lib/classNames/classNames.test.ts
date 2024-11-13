import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first params', () => {
        expect(classNames('black')).toBe('black');
    });
    test('with additional classes', () => {
        expect(classNames('black', {}, ['blue', 'white'])).toBe('black blue white');
    });
    test('with mods classes', () => {
        expect(
            classNames(
                'black',
                {
                    hovered: true,
                    scrollable: false,
                },
                ['blue', 'white'],
            ),
        ).toBe('black blue white hovered');
    });
    test('with mods classes undefined', () => {
        expect(
            classNames(
                'black',
                {
                    hovered: true,
                    scrollable: undefined,
                },
                ['blue', 'white'],
            ),
        ).toBe('black blue white hovered');
    });
});
