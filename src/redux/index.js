import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import planReducer from './slices/planSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    plan: planReducer,
  },
});

export default store;
