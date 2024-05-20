import { createStore } from 'vuex';
import state from './state';
import * as actions from './actions';   
import * as mutations from './mutations';
// import * as getters from './getters';
import { State } from '../types';

const store = createStore<State>({
    state,
    actions,
    mutations,
    // getters
});

export default store;