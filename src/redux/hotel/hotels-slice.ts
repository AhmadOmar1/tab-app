import { createSlice, PayloadAction, combineReducers } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

interface FormValues {
  location: string;
  checkin: dayjs.Dayjs;
  checkout: dayjs.Dayjs;
  adults: number;
  children: number;
  rooms: number;
}

const initialFormState: FormValues = {
  location: '',
  checkin: dayjs(),
  checkout: dayjs().add(1, 'day'),
  adults: 2,
  children: 0,
  rooms: 1,
};




const searchSlice = createSlice({
  name: 'search',
  initialState: initialFormState,
  reducers: {
    updateFormValues: (state, action: PayloadAction<Partial<FormValues>>) => {
      return { ...state, ...action.payload };
    },
  },
});

interface RoomDateState {
  checkin: string;
  checkout: string;
}

const initialRoomDateState: RoomDateState = {
  checkin: '',
  checkout: '',
};

const searchRoomDateSlice = createSlice({
  name: 'searchRoomDate',
  initialState: initialRoomDateState,
  reducers: {
    updateCheckDates: (state, action: PayloadAction<{ checkin: string; checkout: string }>) => {
      state.checkin = action.payload.checkin;
      state.checkout = action.payload.checkout;
    },
  },
});

export const { updateFormValues } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
export const { updateCheckDates } = searchRoomDateSlice.actions;
export const searchRoomDateReducer = searchRoomDateSlice.reducer;

const rootReducer = combineReducers({
  search: searchReducer,
  searchRoomDate: searchRoomDateReducer,
});

export default rootReducer;
