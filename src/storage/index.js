import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage'

import usersModule from './modules/user.module';
import workshopModule from './modules/workshop.module';

const middleware = [
  thunk,
];

const persistConfig = {
  key: 'root',
  storage: storage,
};


const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(...middleware))(createStore);


// this is what they call rootReducer
const reducer = combineReducers({
  usersModule,
  workshopModule,
});


const persistedReducer = persistReducer(persistConfig, reducer);
const ehnancer = applyMiddleware(...middleware);


const configureStore = () => createStoreWithMiddleware(persistedReducer);


// eslint-disable-next-line import/no-mutable-exports
let store = null;
// eslint-disable-next-line import/no-mutable-exports
let persistor;

store = createStore(persistedReducer, undefined, ehnancer);

persistor = persistStore(store);

store = configureStore();


export default store;
export {
  persistor,
};