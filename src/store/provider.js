import { createStore } from 'redux';
import rootReducer from './rootreducer';

export const provider = createStore(rootReducer);
