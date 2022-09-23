import { configureStore, createSlice } from '@reduxjs/toolkit';

let user = createSlice({
    name : 'user',
    initialState : {name :'hyejin', age: 26},
    reducers:{
        changeName(state){
            state.name = '혜진';
        },
        changeAge(state,a){
            state.age = state.age+1
        }
    }
})

let stock =createSlice({
    name:'stock',
    initialState:[10,11,12]
})

let baguni= createSlice({
    name: 'baguni1',
    initialState:
    [{
        id : 0,
        name : 'White and Black',
        count : 2}
        ,
    {
        id : 2,
        name : 'Grey Yordan',
        count : 1
    }]
})

export let {changeName, changeAge} = user.actions
export default configureStore({
  reducer: { 
    user : user.reducer,
    작명 : stock.reducer,
    baguni : baguni.reducer
  }
}) 