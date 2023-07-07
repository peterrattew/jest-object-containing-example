const foo = Symbol('foo');
const bar = Symbol('bar');
const obj = { [foo]: 'foo' };

it('symbol: toMatchObject should fail', () => {
  expect(obj).toMatchObject({ [bar]: 'bar' });
});

it('symbol: toMatchObject should pass', () => {
  expect(obj).not.toMatchObject({ [bar]: 'bar' });
});
