import {expect} from 'chai';
import loadAllMacIps from '../../src/service/loadAllMacIps';
import loadAllApps from '../../src/service/loadAllApps';
import loadAllMachineData from '../../src/service/loadAllMachineData';
import mori from 'mori';
describe('service',()=>{
  it('loadAllMacIps',(done)=>{
    loadAllMacIps().then(result=>{
      console.log(result.reduce(function(obj,single,index){
        return mori.into(obj,single);
      },mori.hashMap()))
      done()
    })
  })
  it('loadAllApps',(done)=>{
    loadAllApps().then(result=>{
      console.log(result.reduce(function(obj,single,index){
        return mori.into(obj,single)
      },mori.hashMap()))
      done();
    })

  })
  it('loadAllMachineData',(done)=>{

    loadAllMachineData().then(res=>{
      // console.log(res);
      done()
    });
  })
})
