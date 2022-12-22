import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

// create a slice 
export const iconslice= createSlice({
name:"icon",
initialState:{
     icon:'moon'
},
reducers:{
     iconMoon:state=>{
      console.log("state",state)
        state.icon= 'moon'
     },
     iconSun:state=>{
        state.icon= 'sun'
    },
   }
})
// export const iconslice=iconslice.reducer; 
// config the store 

// export the action
export const iconAction = iconslice.actions
export const iconReducer = iconslice.reducer