import {makeStore} from '../src/redux/store'

import {expect} from 'chai'
import mori from 'mori'
import * as actions from '../src/redux/actions'
describe('store',()=>{
	it('redux store configured by correct reducer',(done)=>{
		const store=makeStore();
		store.dispatch(actions.setEntries(mori.vector(1,2,3)));
		expect(mori.equals(store.getState(),mori.hashMap('entries',mori.vector(1,2,3)))).is.equal(true)

		done()
	})

})
