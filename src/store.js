import { configureStore, createSlice } from '@reduxjs/toolkit'

// useState랑 같은 역할임
let user = createSlice({
  name : 'user',
  initialState : 'kim',
  reducers : {
    changeName(state){
      return 'john' + state
    }
  }
})

export let { changeName } =  user.actions

let stork = createSlice({
  name : 'stork',
  initialState : [10,11,12]
})

let cart = createSlice({
  name : 'cart',
  initialState : [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ]
})

export default configureStore({
  reducer: { 
    user : user.reducer,
    stork : stork.reducer,
    cart : cart.reducer
  }
}) 