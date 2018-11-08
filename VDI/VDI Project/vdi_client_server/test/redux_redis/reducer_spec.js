import {expect} from 'chai';
import * as actions from '../../src/redux/actions';
import reducer from '../../src/redux/reducer';
import mori from 'mori';
import {loadData} from '../../src/index'
import Client,{createClient} from '../../src/model/Client';
describe('redux_redis',()=>{
  it('setEntries',(done)=>{
    loadData();
      done()
    

  })
})
