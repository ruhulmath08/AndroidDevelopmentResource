// @flow
import {expect} from 'chai'
import * as actions from '../src/redux/actions'
import reducer from '../src/redux/reducer'
import mori from 'mori'
import {describe,it} from 'mocha'
import Client from '../src/model/Client'
import {createClient} from '../src/model/Client_Service'
describe('reducer test',()=>{
	it('handles set entries ',(done)=>{
			const action=actions.setEntries(mori.vector(mori.hashMap('mac1', createClient(false,1,'192.168.223.101',String(new Date().getTime()),'JS',['ms'])),
			mori.hashMap('mac2',createClient(false,2,'192.168.223.102',String(new Date().getTime()),'JS',['ms']))))

		const nextState=reducer(undefined,action)
		mori.each(mori.get(nextState,'entries'),(entry)=>{
			expect(Object.values(mori.toJs(entry))[0].active).is.eql(false)
		})

		//expect(nextState).to.equal(fromJS({entries:List.of('Trianspotting')}))
		//
		done();

	})
	it('handles update',()=>{
		const initialState=actions.setEntries(mori.vector(mori.hashMap('mac1', createClient(false,1,'192.168.223.101',String(new Date().getTime()),'JS',['ms'])),
		mori.hashMap('mac2',createClient(false,2,'192.168.223.102',String(new Date().getTime()),'JS',['ms']))))
		const action = actions.updateStatus(true,'mac1')
		const nextState=reducer(reducer(undefined,initialState),action)
		expect(mori.toJs(mori.get(nextState,'entries')).map(entry=>{
			return Object.values(entry)[0].active
		})[0]).is.eql(true)
	})
	//
	// it('handles vote',(done)=>{
	// 	const initialState = fromJS({
	// 	      vote: {
	// 	        pair: List.of('Trainspotting', '28 Days Later')
	// 	      },
	// 	      entries: []
  //   	});
  //   	const action={type:'VOTE',entry: 'Trainspotting'}
  //   	const nextState=reducer(initialState,action)
  //   	expect(nextState).is.equal(fromJS({
  //   		vote: {
	// 	        pair: List.of('Trainspotting', '28 Days Later'),
	// 	        tally: fromJS({Trainspotting:1})
	// 	      },
	// 	      entries: []
  //   	}))
  //   	done()
	// })
	//
	// it('can be used with reducer',(done)=>{
	// 	const actions = [
	// 	    {type: 'SET_ENTRIES', entries: List.of('Trainspotting', '28 Days Later')},
	// 	    {type: 'NEXT'},
	// 	    {type: 'VOTE', entry: 'Trainspotting'},
	// 	    {type: 'VOTE', entry: '28 Days Later'},
	// 	    {type: 'VOTE', entry: 'Trainspotting'},
	// 	    {type: 'NEXT'}
  // 		];
  // 		const finalState=actions.reduce(reducer,Map())
  // 		expect(finalState).is.equal(fromJS({winner:'Trainspotting'}))
  // 		done()
	//
	// })




})
