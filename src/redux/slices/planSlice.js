import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  plans: [], // 전체 플랜 리스트
  currentPlan: null, // 특정 플랜 상세 정보
  error: null, // 오류 메시지
};

const planSlice = createSlice({
  name: 'plan',
  initialState,
  reducers: {
    fetchPlanDetail(state, action) {
      state.currentPlan = action.payload;
    },
    fetchPlans(state, action) {
      state.plans = action.payload;
    },
    createPlan(state, action) {
      state.plans.push(action.payload);
      state.currentPlan = action.payload;
    },
    updatePlan(state, action) {
      const updatedPlanIndex = state.plans.findIndex(plan => plan.id === action.payload.id);
      if (updatedPlanIndex !== -1) {
        state.plans[updatedPlanIndex] = { ...state.plans[updatedPlanIndex], ...action.payload };
      }
      if (state.currentPlan?.id === action.payload.id) {
        state.currentPlan = { ...state.currentPlan, ...action.payload };
      }
    },
    deletePlan(state, action) {
      state.plans = state.plans.filter(plan => plan.id !== action.payload);
      if (state.currentPlan?.id === action.payload) {
        state.currentPlan = null;
      }
    },
  },
});

export const { fetchPlans, createPlan, updatePlan, deletePlan, fetchPlanDetail } =
  planSlice.actions;

export default planSlice.reducer;
