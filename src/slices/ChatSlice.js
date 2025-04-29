import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chats: JSON.parse(localStorage.getItem('chats')) || [],
  response: JSON.parse(localStorage.getItem('response'))||[],
};

const ChatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setChats(state, action) {
      state.chats = action.payload; 
    },
    setResponse(state,action){
      state.response=action.payload;
    }
  },
});

export const { setChats ,setResponse} = ChatSlice.actions;
export default ChatSlice.reducer;
