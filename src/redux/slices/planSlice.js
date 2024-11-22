import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPlanAPI, postLikePlanAPI } from '../../api/plan/detail';
import {
  fetchCommentAPI,
  postCommentAPI,
  deleteCommentAPI,
  updateCommentAPI,
  postLikeCommentAPI,
} from '../../api/plan/comment';

const initialState = {
  plans: [], // 전체 플랜 리스트
  currentPlan: null, // 특정 플랜 상세 정보(댓글 리스트 포함)
  error: null, // 오류 메시지
};

export const fetchPlanAsync = createAsyncThunk(
  'plan/fetchPlanAsyne',
  async (planId, { getState, rejectWithValue }) => {
    const state = getState().plan;
    if (state.currentPlan?.id === planId) {
      return state.currentPlan;
    }
    try {
      const [plan, comments] = await Promise.all([fetchPlanAPI(planId), fetchCommentAPI(planId)]);
      return { ...plan, comments: Array.isArray(comments) ? comments : [] };
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.message);
    }
  }
);

export const postCommentAsync = createAsyncThunk(
  'plan/postCommentAsync',
  async ({ planId, commentData }, { rejectWithValue }) => {
    try {
      await postCommentAPI({ planId, commentData });
      const comments = await fetchCommentAPI(planId);
      return { planId, comments };
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.message);
    }
  }
);

export const deleteCommentAsync = createAsyncThunk(
  'plan/deleteCommentAsync',
  async ({ planId, commentId }, { getState, rejectWithValue }) => {
    try {
      await deleteCommentAPI({ planId, commentId });

      // 기존 Redux 상태에서 삭제된 댓글을 바로 필터링하여 반환
      const state = getState().plan;
      const updatedComments = state.currentPlan.comments.filter(
        comment => comment.id !== commentId
      );

      return { planId, updatedComments };
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.message);
    }
  }
);

export const updateCommentAsync = createAsyncThunk(
  'plan/updateCommentAsync',
  async ({ planId, commentId, commentBody }, { rejectWithValue }) => {
    try {
      await updateCommentAPI({ planId, commentId, commentBody });
      const updatedComments = await fetchCommentAPI(planId);

      return { planId, updatedComments };
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.message);
    }
  }
);

export const postLikePlanAsync = createAsyncThunk(
  'plan/postLikePlanAsync',
  async (planId, { rejectWithValue }) => {
    try {
      const response = await postLikePlanAPI(planId);
      const likesCount = response.likesCount;
      const checkLike = response.checkLike;
      return { planId, likesCount, checkLike };
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.message);
    }
  }
);

export const postLikeCommentAsync = createAsyncThunk(
  'plan/postLikeCommentAsync',
  async ({ planId, commentId }, { rejectWithValue }) => {
    try {
      const likesCount = await postLikeCommentAPI({ planId, commentId });
      return { planId, commentId, likesCount };
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.message);
    }
  }
);

const planSlice = createSlice({
  name: 'plan',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // 플랜 상세 정보 가져오기
      .addCase(fetchPlanAsync.fulfilled, (state, action) => {
        state.currentPlan = action.payload;
        state.error = null;
      })
      .addCase(fetchPlanAsync.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(postCommentAsync.fulfilled, (state, action) => {
        const { planId, updatedComments } = action.payload;

        if (state.currentPlan && state.currentPlan.id === planId) {
          state.currentPlan.comments = updatedComments; // comments를 새롭게 대체
        }

        // 전체 플랜 리스트에서도 업데이트
        const planIndex = state.plans.findIndex(plan => plan.id === planId);
        if (planIndex !== -1) {
          state.plans[planIndex].comments = updatedComments; // 새 배열로 대체
        }

        state.error = null;
      })
      .addCase(postCommentAsync.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(deleteCommentAsync.fulfilled, (state, action) => {
        const { planId, updatedComments } = action.payload;

        if (state.currentPlan && state.currentPlan.id === planId) {
          state.currentPlan.comments = updatedComments; // 댓글 업데이트
        }

        const planIndex = state.plans.findIndex(plan => plan.id === planId);
        if (planIndex !== -1) {
          state.plans[planIndex].comments = updatedComments; // 전체 플랜에서도 업데이트
        }

        state.error = null;
      })
      .addCase(deleteCommentAsync.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(updateCommentAsync.fulfilled, (state, action) => {
        const { planId, updatedComments } = action.payload;

        if (state.currentPlan && state.currentPlan.id === planId) {
          state.currentPlan.comments = updatedComments; // 댓글 업데이트
        }

        const planIndex = state.plans.findIndex(plan => plan.id === planId);
        if (planIndex !== -1) {
          state.plans[planIndex].comments = updatedComments; // 전체 플랜에서도 업데이트
        }

        state.error = null;
      })
      .addCase(updateCommentAsync.rejected, (state, action) => {
        state.error = action.payload;
      });

    builder
      .addCase(postLikePlanAsync.fulfilled, (state, action) => {
        const { planId, likesCount, checkLike } = action.payload;

        // 현재 선택된 플랜의 좋아요 수 업데이트
        if (state.currentPlan && state.currentPlan.id === planId) {
          state.currentPlan = {
            ...state.currentPlan,
            likesCount,
            checkLike,
          };
        }

        // 전체 플랜 리스트에서도 좋아요 수 업데이트
        const planIndex = state.plans.findIndex(plan => plan.id === planId);
        if (planIndex !== -1) {
          state.plans[planIndex] = {
            ...state.plans[planIndex],
            likesCount,
            checkLike,
          };
        }

        state.error = null;
      })
      .addCase(postLikePlanAsync.rejected, (state, action) => {
        state.error = action.payload;
      })

      .addCase(postLikeCommentAsync.fulfilled, (state, action) => {
        const { planId, commentId, likesCount } = action.payload;

        if (state.currentPlan && state.currentPlan.id === planId) {
          const comment = state.currentPlan.comments.find(comment => comment.id === commentId);
          if (comment) {
            comment.likesCount = likesCount;
          }
        }

        // 전체 플랜 리스트에서도 댓글 좋아요 수 업데이트
        const planIndex = state.plans.findIndex(plan => plan.id === planId);
        if (planIndex !== -1) {
          const comment = state.plans[planIndex]?.comments?.find(
            comment => comment.id === commentId
          );
          if (comment) {
            comment.likesCount = likesCount;
          }
        }
        state.error = null;
      })
      .addCase(postLikeCommentAsync.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default planSlice.reducer;
