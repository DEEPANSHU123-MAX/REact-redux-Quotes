import QuoteReducer from './QuoteReducer';
import { configureStore   } from '@reduxjs/toolkit'
import { persistReducer ,  FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from 'redux';
import { getDefaultMiddleware } from '@reduxjs/toolkit';




const reducers = combineReducers({
    QuoteReducer,
});


const persistConfig ={
    key:"persist-key",
    storage
  }
const persistedReducer = persistReducer(persistConfig ,reducers)

export const store = configureStore({
  
    reducer : persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
    

 
})