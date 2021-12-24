import { createSlice, configureStore } from '@reduxjs/toolkit';

const appointmentSlice = createSlice({
  name: 'appointments',
  initialState: {
    booked: []
  },
  reducers: {
    bookAppt: (state, action) => {
      let name = action.payload.name;
      if (state.booked.includes(name)) return
      state.booked.push(name);
    },
    cancelAppt: (state, action) => {
      let name = action.payload.name;
      let availableIndex = state.booked.findIndex(n => n === name);
      if (availableIndex !== -1) {
        state.booked.splice(availableIndex, 1);
      }
    }
  }
})

export const { bookAppt, cancelAppt } = appointmentSlice.actions

const store = configureStore({
  reducer: { appointments: appointmentSlice.reducer }
})

export default store;