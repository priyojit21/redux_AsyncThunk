import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//CREATE OPERATION ---> PUT 
export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://641dd63d945125fff3d75742.mockapi.io/crud",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//READ OPERATION --->GET (by default) tai method:get,headers esob line likhte hbena
export const showUser = createAsyncThunk("showUser", async (args, { rejectWithValue }) => {
  try {
    const response = await fetch("https://641dd63d945125fff3d75742.mockapi.io/crud");
    const result = await response.json();
    return result;
  }
  catch (error) {
    return rejectWithValue(error);
  }
})

//DELETE OPERATION --->DELETE(so method is "DELETE")
export const deleteUser = createAsyncThunk("deleteUser", async (id, { rejectWithValue }) => {
  try {
    const response = await fetch(`https://641dd63d945125fff3d75742.mockapi.io/crud/${id}`,
    {method : "DELETE"}
    );
    const result = await response.json();
    return result;
  }
  catch (error) {
    return rejectWithValue(error);
  }
})



//update action
export const updateUser = createAsyncThunk(
  "updateUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://641dd63d945125fff3d75742.mockapi.io/crud/${data.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);



export const userDetail = createSlice({
  name: "userDetail",
  initialState: {
    users: [],
    loading: false,
    error: null,
    searchData: [],
  },

  reducers: {
    searchUser: (state, action) => {
      console.log(action.payload);
      state.searchData = action.payload;
    },
  },

// ExtraReducers used to handle promise
// builder is syntax
  extraReducers: (builder) => {
    builder
        //promise pending
        .addCase(createUser.pending, (state) => {
            state.loading = true;
        })
        //promise fulfilled
        .addCase(createUser.fulfilled, (state, action) => {
            state.loading = false;
            state.users.push(action.payload);
        })
        //promise rejected
        .addCase(createUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        })
        //promise pending
        .addCase(showUser.pending, (state) => {
            state.loading = true;
        })
        //promise fulfilled
        .addCase(showUser.fulfilled, (state, action) => {
            state.loading = false;
            state.users=(action.payload);
        })
        //promise rejected
        .addCase(showUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        })
        //promise pending
        .addCase(deleteUser.pending, (state) => {
          state.loading = true;
        })
        //promise fulfilled
        .addCase(deleteUser.fulfilled, (state, action) => {
          state.loading = false;
          const {id} = action.payload;
          if (id)
          {
            // amar jei data gulo(ele.id) ei id r sathe match khabena shei data gulo amar original data te add koro (delete er logic)
              state.users = state.users.filter((ele) => ele.id !== id)
          }
        })
        //promise rejected
        .addCase(deleteUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload.message;
        })
        .addCase(updateUser.pending, (state) => {
          state.loading = true;
      })
        //promise fulfilled
        .addCase(updateUser.fulfilled, (state, action) => {
          state.loading = false;
          state.users = state.users.map((ele) => 
            ele.id === action.payload.id ? action.payload : ele
          );
        })
        //promise rejected
        .addCase(updateUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload.message;
        })


}




export default userDetail.reducer;

export const {searchUser} = userDetail.actions;




