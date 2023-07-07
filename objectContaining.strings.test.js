const foo = 'foo';
const bar = 'bar';
const obj = { [foo]: 'foo' };

it('string: objectContaining should fail', () => {
  expect(obj).toEqual(expect.objectContaining({ [bar]: 'bar' }));
});

it('string: objectNotContaing should pass', () => {
  expect(obj).toEqual(expect.not.objectContaining({ [bar]: 'bar' }));
});

