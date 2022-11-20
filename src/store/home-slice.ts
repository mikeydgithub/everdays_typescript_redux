import { HomeModel, HomeArrayModel } from "../models/redux-models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialHomeState: HomeArrayModel = {

    // all_todos array and particular_todo object are state and can be accessed anywhere in the app.

    all_homes: [],

    // all_todos:[],
    // particular_todo: {
    //     "userId": 0,
    //     "id": 0,
    //     "title": "",
    //     "completed": false,
    // }
}


const homeSlice = createSlice({
    name: 'home',
    initialState: initialHomeState,
    reducers: {
        setHomes(state, action:PayloadAction<HomeModel[]>){
            state.all_homes = action.payload
        },

        
        // setParticularTodo(state, action: PayloadAction<TodoModel>) {
        //     state.particular_todo = action.payload
        // }
    }
})

export default homeSlice;