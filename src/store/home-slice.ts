import { HomeModel, HomeArrayModel } from "../models/redux-models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialHomeState: HomeArrayModel = {
    all_homes: [],
}


const homeSlice = createSlice({
    name: 'home',
    initialState: initialHomeState,
    reducers: {
        setHomes(state, action:PayloadAction<HomeModel[]>){
            state.all_homes = action.payload
        },
    }
})

export default homeSlice;