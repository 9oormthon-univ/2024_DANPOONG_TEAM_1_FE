import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login, signUp } from '../../api/user/user';

export const loginAsync = createAsyncThunk(
  'auth/loginAsync',
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await login(username, password);
      return response; // 성공 시 payload로 반환
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
      return response; // 성공 시 payload로 반환
    } catch (error) {
      console.error('❌ 회원가입 에러:', error);
      return rejectWithValue(error.response?.data || '회원가입 중 오류 발생');
    }
  }
);

// export const reissueTokenAsync = createAsyncThunk(
//   'auth/reissueTokenAsync',
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await reissueToken();
//       return response; // 재발급된 토큰 반환
//     } catch (error) {
//       console.error('❌ 토큰 재발급 에러:', error);
//       return rejectWithValue('토큰 재발급 실패: 다시 로그인해주세요.');
//     }
//   }
// );

const initialState = {
  isLoggedIn: !!localStorage.getItem('accessToken'),
  accessToken: localStorage.getItem('accessToken'),
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
      localStorage.removeItem('accessToken');
      document.cookie = 'refreshToken=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT;';
      window.location.href = '/login';
    },
  },
  extraReducers: builder => {
    builder
      // loginAsync
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
      })

      // signUpAsync
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

    // reissueTokenAsync
    // .addCase(reissueTokenAsync.fulfilled, (state, action) => {
    //   state.accessToken = action.payload.accessToken;
    // });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
