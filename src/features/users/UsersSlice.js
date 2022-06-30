import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '0', name: 'Huy Le' },
  { id: '2', name: 'Huy Pro' },
  { id: '1', name: 'Min Min' },
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
})

export default usersSlice.reducer
