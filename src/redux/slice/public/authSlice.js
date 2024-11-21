import { createSlice } from '@reduxjs/toolkit';
import { userLogin } from '../../api/public/authService';
const authCases = [
    {
        api: userLogin,
        name: 'userLogin',
    },
];
const initialState = {
    authProducts: [],
};
authCases.forEach((cases) => {
    initialState[cases.name] = {
        loading: false,
        data: undefined,
        error: null,
    };
});
export const authSlice = createSlice({
    name: 'publicAuth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        authCases.forEach((cases) => {
            builder
                .addCase(cases.api.fulfilled, (state, { payload }) => {
                state[cases.name].loading = false;
                state[cases.name].data = payload;
                state[cases.name].error = null;
            })
                .addCase(cases.api.pending, (state) => {
                state[cases.name].loading = true;
                state[cases.name].error = null;
                state[cases.name].data = null;
            })
                .addCase(cases.api.rejected, (state, { payload }) => {
                state[cases.name].loading = false;
                state[cases.name].error = payload;
                state[cases.name].data = null;
            });
        });
    },
});
export default authSlice.reducer;
