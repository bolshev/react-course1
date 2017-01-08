import {createStore} from 'redux';
import RootReducer from '../redux/RootReducer';

export default function configureStore(initialState) {
    return createStore(RootReducer, initialState);
}