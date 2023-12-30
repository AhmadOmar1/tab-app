import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

interface FormValues {
    location: string;
    checkin: dayjs.Dayjs;
    checkout: dayjs.Dayjs;
    adults: number;
    children: number;
    rooms: number;
}

const initialState: FormValues = {
    location: '',
    checkin: dayjs(),
    checkout: dayjs().add(1, 'day'),
    adults: 2,
    children: 0,
    rooms: 1,
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        updateFormValues: (state, action: PayloadAction<Partial<FormValues>>) => {
            return { ...state, ...action.payload };
        },
    },
});

export const { updateFormValues } = searchSlice.actions;

export default searchSlice.reducer;
