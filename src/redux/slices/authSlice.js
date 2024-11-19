import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login, signUp } from '../../api/user/user';

export const loginAsync = createAsyncThunk(
  'auth/loginAsync',
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await login(username, password);
      return response; // 성공하면 payload로 반환
    } catch (error) {
      console.error('❌ 로그인 에러:', error);
      return rejectWithValue(error.response?.data || '로그인 중 오류 발생');
    }
  }
);

export const signUpAsync = createAsyncThunk(
  'auth/signUpAsync',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await signUp(userData);
      return response; // 성공하면 payload로 반환
    } catch (error) {
      console.error('❌ 회원가입 에러:', error);
      return rejectWithValue(error.response?.data || '회원가입 중 오류 발생');
    }
  }
);

const initialState = {
  isLoggedIn: !!localStorage.getItem('accessToken'),
  accessToken: localStorage.getItem('accessToken') || null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.isLoggedIn = false;
      state.accessToken = null;
      localStorage.removeItem('accessToken'); // 로컬 스토리지에서 토큰 제거
    },
  },
  extraReducers: builder => {
    // loginAsync
    builder
      .addCase(loginAsync.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.accessToken = action.payload.accessToken;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || '로그인 실패';
      });

    // signUpAsync
    builder
      .addCase(signUpAsync.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUpAsync.fulfilled, state => {
        state.loading = false;
      })
      .addCase(signUpAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || '회원가입 실패';
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
