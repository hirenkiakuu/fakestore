import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames test', () => {
  test('with only first param', () => {
    const expected = 'testClass';
    expect(classNames('testClass')).toBe(expected);
  });

  test('with first and second params', () => {
    const expected = 'testClass mod1';
    expect(classNames('testClass', { mod1: true })).toBe(expected);
  });

  test('with first, second and third params', () => {
    const expected = 'testClass additional mod1';
    expect(classNames('testClass', { mod1: true }, ['additional'])).toBe(
      expected,
    );
  });
});
