import {expect} from 'chai'
import mori from 'mori'
import {setEntries} from '../../app/actions/core'
import reducers from '../../app/reducers'
describe('store',()=>{
	it('setEntries',()=>{
		let a=reducers(undefined, {type:'SET_ENTRIES',entries:[1,2,3,4]})
		console.log(a)
		//setEntries(mori.hashMap(),mori.hashMap('entries',mori.vector(1,2,3,4),'dropdownOpen',false))
	})
	it('setDialogIsOpen',()=>{
		let nextState=reducers(mori.hashMap('entries',[1,2,3]),{type:'IS_OPEN_DIALOG',value:false})
		console.log(mori.toJs(nextState))
	})
})
