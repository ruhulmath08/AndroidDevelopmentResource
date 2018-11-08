import {encrypterFun, decrypterFun} from '../../src/server/helper/encrypter';
test('Encrypter test -> ', ()=> {
  var encrypted = encrypterFun({name:'Rakin', age:'29'})
  expect(decrypterFun(encrypted).name).toBe('Rakin')
})
