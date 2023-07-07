const foo = Symbol('foo');
const bar = Symbol('bar');
const obj = { [foo]: 'foo' };

it('symbol: objectContaining should fail', () => {
  expect(obj).toEqual(expect.objectContaining({ [bar]: 'bar' }));
});

it('symbol: objectNotContaing should pass', () => {
  expect(obj).toEqual(expect.not.objectContaining({ [bar]: 'bar' }));
});
