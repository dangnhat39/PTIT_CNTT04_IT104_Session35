/* eslint-disable @typescript-eslint/no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// ham lay du lieu tren server(json-server)
const getAllUser = createAsyncThunk("getAllUser", async () => {
    try {
        const response = await axios.get("http://localhost:8080/users")
        console.log("res", response);
        return response.data

    } catch (error) {
        console.log(error);
    }
})
const userSlice = createSlice({
    name: "user",
    initialState: {
        user: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllUser.pending, () => {
                console.log("Dang trong qua trinh ");

            }
            )
            .addCase(getAllUser.fulfilled, (state, action) => {
                console.log("Lay du lieu thanh cong ");

            }
            )
            .addCase(getAllUser.rejected, () => {
                console.log(" qua trinh lay du lieu that bai");

            }
        )
            
    }
})
export default userSlice.reducer