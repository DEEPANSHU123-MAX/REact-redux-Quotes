import _ from 'lodash';
import { createSlice } from '@reduxjs/toolkit'


export const QuoteReducer = createSlice({
  name: 'Quote',
  initialState: {
    
  },
  reducers: {
    ADD_QUOTE: (state , action) => {
     
      state[action.payload.id  ]  = action.payload;
    },
    DELETE_QUOTE: (state , action) => {
      // _.omit(state, action.payload);
      delete state[action.payload]
    },
    UPDATE_QUOTE: (state , action) => {
      state[action.payload.id]  = action.payload;
    }
  }
})

export const { ADD_QUOTE, DELETE_QUOTE , UPDATE_QUOTE} = QuoteReducer.actions
export default QuoteReducer.reducer


