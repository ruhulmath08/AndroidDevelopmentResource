//const store = require('../../src/server/main').store;
const User = require('../../src/server/models/User').User;
test('USER fetch async ', async()=> {
  expect.assertions(1);
  const users = await User.find();
  expect(users[0].userId).toBe('admin')
})
