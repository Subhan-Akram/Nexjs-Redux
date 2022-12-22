import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  entities: [],
  loading: false,
  err:""
}

export const getPosts = createAsyncThunk(
  'getPosts',
  async (thunkAPI,{dispatch, getState, rejectWithValue, fulfillWithValue}) => {
  try{
    console.log("dispatch run")
    // https://jsonplaceholder.typicode.com/posts
    const res = await fetch('https://jsonplaceholder.typicode.com/posts').then(
    (data) => data.json()
  )
  console.log("res.status",res.length==undefined)
  if (!res.length) {
    return rejectWithValue(`${res} error is showing `)
}
  return fulfillWithValue(res)
  }catch{(err=>{

  throw rejectWithValue(err)
  })}
})


export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getStatic:(state)=>state.entities.push("slaman")
  },
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.loading = true
    },
    [getPosts.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.entities = payload
    },
    [getPosts.rejected]: (state,{payload}) => {
      state.loading = "working "
      state.err=payload
    },
  },
})
export const postActions=postSlice.actions;
export const postReducer = postSlice.reducer