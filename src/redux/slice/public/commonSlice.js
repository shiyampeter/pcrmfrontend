import { essentials } from '@/redux/api/public/commonService';
import { createSlice } from '@reduxjs/toolkit';
const commonCases = [
    {
        api: essentials,
        name: 'essentials',
    },
];
const initialState = {
    authProducts: [],
};
commonCases.forEach((cases) => {
    initialState[cases.name] = {
        loading: false,
        data: undefined,
        error: null,
    };
});
export const commonSlice = createSlice({
    name: 'publicAuth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        commonCases.forEach((cases) => {
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
export default commonSlice.reducer;
