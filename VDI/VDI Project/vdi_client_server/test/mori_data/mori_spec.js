import {expect} from 'chai'
import mori from 'mori';
import {createClient} from '../../src/model/Client_Service'
describe('mori',()=>{
  it('assoc',()=>{
    let map=mori.hashMap();
    expect(mori.equals(mori.assoc(map,'entries',1),mori.hashMap('entries',1))).is.eql(true)
  })
  it('updateIn',()=>{
    let obj=mori.hashMap('entries',mori.vector(mori.hashMap('mac1', createClient(false,1,'192.168.223.101',String(new Date().getTime()),'JS',['ms'])),
    mori.hashMap('mac2',createClient(false,2,'192.168.223.102',String(new Date().getTime()),'JS',['ms']))));
    //console.log(mori.updateIn(obj,['entries','mac1',0],true))
    let obj1=mori.hashMap('entries',mori.vector(mori.hashMap('mac1',mori.hashMap('active',false))))
    //console.log(mori.toJs(obj1))
    let obj2=mori.hashMap('entries',mori.vector(mori.hashMap('mac1',mori.hashMap('active',false))))

    let res= mori.toJs(mori.get(obj2,'entries')).map((entry,index)=>{
      if(Object.keys(entry)[0]==='mac1'){
        return mori.updateIn(obj2,['entries',index],function(){
          let keys=Object.keys(Object.values(entry)[0])
          let values=Object.values(Object.values(entry)[0])
          let newObj=mori.hashMap();
          for(var i=0;i<keys.length;i++){
            if(keys[i]==='active'){
              newObj=mori.assoc(newObj,keys[i],true)
            }
            if(keys[i]!='active'){
              newObj=mori.assoc(newObj,keys[i],values[i])
            }
          }
          return mori.hashMap('mac1',newObj)
        })
      }

      return obj2;
    })
    expect(mori.equals(res,mori.hashMap('mac1',mori.hashMap('active',true))))
  })
})
