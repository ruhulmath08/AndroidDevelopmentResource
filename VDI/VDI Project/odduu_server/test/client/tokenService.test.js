import {hashMap,get} from 'mori';
import {addClientList} from '../../src/App/stores/client/tokenServices';
test('addClientList test -> ', ()=> {
  var addClientLists = addClientList(hashMap(), [{orgName:'AIUB'},{orgName:'DAFODIL'}]) //[should be valid obj with necessary attributes]
  expect(get(addClientLists,'clientList').length).toBe(2)
})
