import { createAsyncThunk } from '@reduxjs/toolkit';
import PUBLICSERVER from '../../../utils/helpers/Server';
export const workCategoryAdd = createAsyncThunk('workCategoryAdd', async (params, thunkAPI) => {
    try {
        const response = await PUBLICSERVER.post(`/workCategory`, params);
        return response;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});
export const workCategoryEdit = createAsyncThunk('workCategoryEdit', async (params, thunkAPI) => {
    try {
        const response = await PUBLICSERVER.put(`/workCategory/${params?.work_id}`, params);
        return response;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});
export const workCategoryList = createAsyncThunk('workCategoryList', async (params, thunkAPI) => {
    try {
        const response = await PUBLICSERVER.get(`/workCategory`, { params });
        return response?.data;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});
export const workCategoryView = createAsyncThunk('workCategoryView', async (id, thunkAPI) => {
    try {
        const response = await PUBLICSERVER.get(`/workCategory/${id}`);
        return response?.data;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});
export const workCategoryDelete = createAsyncThunk('workCategoryDelete', async (id, thunkAPI) => {
    try {
        const response = await PUBLICSERVER.delete(`/workCategory/${id}`);
        return response;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});
