const login = require('../../src/server/service/authenticate').login;
test('Login test -> ', async ()=> {
  expect.assertions(1)
  var verifiedUser = await login('admin', '123')
  expect(verifiedUser.password).toBe('123')
})
