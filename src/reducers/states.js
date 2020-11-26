import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sidebarShow: 'responsive'
}

const statesSlice = createSlice({
  name: 'states',
  initialState,
  reducers: {
    setSidebarShow(state, action) {
      state.sidebarShow = action.payload
    },
  }
})

export const { setSidebarShow } = statesSlice.actions

export default statesSlice.reducer
