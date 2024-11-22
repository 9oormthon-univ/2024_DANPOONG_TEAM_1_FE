import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentStep: 1, // 현재 스텝 추가
  title: '',
  details: {
    location: '',
    theme: '', // 숫자로 저장됩니다.
    period: '',
    target: '',
    cost: '',
    ticket: '',
    content: '',
  },
};

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setDetail: (state, action) => {
      const { key, value } = action.payload;
      state.details[key] = value; // title로 저장
    },
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload;
    },
    resetState: () => initialState,
  },
});

export const { setTitle, setDetail, setCurrentStep, resetState } = historySlice.actions;
export default historySlice.reducer;
