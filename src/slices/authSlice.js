import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: true,
  token:localStorage.getItem("token")? JSON.parse(localStorage.getItem("token")) : null,
  loading:false,
  user:localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):null,
  refresh:false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setOpentoggle(state) {
      state.open = !state.open;
    },
    setToken(state,value){
      state.token=value.payload;
    },
    setloading(state,value){
      state.loading=value.payload
    },
    setUser(state,value){
      state.user=value.payload
  },
  setReferesh(state){
    state.refresh=!state.refresh;
  }
  }
});

export const { setOpentoggle,setToken,setloading,setUser,setReferesh } = authSlice.actions;
export default authSlice.reducer;
