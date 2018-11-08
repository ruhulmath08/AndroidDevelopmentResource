import {expect} from 'chai'
import mori from 'mori';

describe('store',()=>{
	it('sortedSet',()=>{
    var initial=[1,2,3,1,2,3];
    var next=initial.reduce((sortedSet,single,index)=>{
      return mori.conj(sortedSet,single)
    },mori.sortedSet())
    console.log(mori.intoArray(next),'----')
    expect(mori.equals([1,2,3],mori.intoArray(next))).is.eql(true)
  })
})
