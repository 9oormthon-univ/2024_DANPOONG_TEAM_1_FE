import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import planReducer from './slices/planSlice';
import historyReducer from './slices/historySlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    plan: planReducer,
    history: historyReducer,
  },
});

export default store;
