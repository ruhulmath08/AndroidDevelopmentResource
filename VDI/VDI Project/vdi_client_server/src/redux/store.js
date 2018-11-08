import reducer from './reducer'
import {createStore} from 'redux'

/**
 * @function makeStore
 * @returns createStore - is a redux function
 */
export function makeStore(){
	return createStore(reducer);
}