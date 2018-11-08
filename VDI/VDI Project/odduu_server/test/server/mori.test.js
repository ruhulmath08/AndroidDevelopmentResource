import { hashMap, toJs, assoc, get} from 'mori';
test('hashMap testing ', ()=>{
  var data = hashMap('afser', 1)
  var newData = get(data,"afser")
  
  expect(newData).toBe(1)
})
