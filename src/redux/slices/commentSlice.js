import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCommentAPI } from '../../api/comment/comment';

const initialState = {
  comments: [],
  planId: null,
  error: null, // 오류 메시지
};

export const fetchCommentAsync = createAsyncThunk(
  'comment/fetchCommentAsync',
  async (planId, { getState, rejectWithValue }) => {
    const state = getState().comment;
    if (state.planId === planId) {
      return state; // 캐시된 데이터 반환
    }
    try {
      const response = await fetchCommentAPI();
      return { planId, response };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCommentAsync.fulfilled, (state, action) => {
        const { planId, comments } = action.payload;
        state.comments = comments;
        state.planId = planId;
      })
      .addCase(fetchCommentAsync.rejected, (state, action) => {
        state.error = action.payload || 'Failed to fetch comments';
      });
  },
});

export default commentSlice.reducer;
