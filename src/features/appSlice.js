import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    channelId: null
  },
  reducers: {
    enterChannel: (state, action) => {
      state.channelId = action.payload.channelId;
    },
  }
});

export const { enterChannel } = appSlice.actions;

export const selectChannelId = (state) => state.app.channelId;

export default appSlice.reducer;
