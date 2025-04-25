import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice'


export let { changeName,increase } =  user.actions

let stork = createSlice({
  name : 'stork',
  initialState : [10,11,12]
})

let cart = createSlice({
  name : 'cart',
  initialState : [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ],
  reducers : {
    addCount(state, action){
      state[action.payload].count++
    }
  }
})

export default configureStore({
  reducer: { 
    user : user.reducer,
    stork : stork.reducer,
    cart : cart.reducer
  }
}) 