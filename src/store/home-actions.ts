import homeSlice from "./home-slice";
import { AnyAction, ThunkAction } from '@reduxjs/toolkit';
import { RootState } from './index';
import { HomeModel } from "../models/redux-models";
import HomeService from '../service/homeService';

export const homeActions = homeSlice.actions

export const fetchHomes = (): ThunkAction <void, RootState, unknown, AnyAction> => {
    return async(dispatch, getState) => {
        if(getState()) {
            const response: HomeModel [] = await HomeService.getAllHomes();
            dispatch(homeActions.setHomes(response))
        }
    }
}



