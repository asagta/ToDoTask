import { createStore } from 'redux';
import rootReducer from './rootreducer';

const provider = createStore(rootReducer);

export default provider;