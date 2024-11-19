import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import MainPage from './pages/main/MainPage';
import PlanDetailPage from './pages/planDetail/PlanDetailPage';
import NotFound from './pages/error/NotFound';
import Login from './pages/login/Login';
import LoginForm from './components/login/LoginForm';
import IndividualSignUp from './components/signup/IndividualSignUp';
import CompanySignUp from './components/signup/CompanySignUp';
import SignUpComplete from './components/signup/SignUpComplete';
import ForgotPasswdIndividual from './components/login/ForgotPasswdIndividual';
import ForgotPasswdCompany from './components/login/ForgotPasswdCompany';
import Profile from './pages/profile/Profile';
import CreateFestival from './pages/createFestival/CreateFestival';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <MainPage />,
      },
      {
        path: 'create-festival',
        element: <CreateFestival />, // 추가된 라우트
      },
      {
        path: 'login',
        element: <Login />, // Login 내부에서 기본 옵션 화면과 Outlet을 처리
        children: [
          {
            path: 'form/:userType', // userType을 URL 파라미터로 받음
            element: <LoginForm />, // 로그인 폼 화면
          },
          {
            path: 'individual-signup',
            element: <IndividualSignUp />, // 개인 회원가입 화면
          },
          {
            path: 'company-signup',
            element: <CompanySignUp />, // 기업 회원가입 화면
          },
          {
            path: 'signup-complete',
            element: <SignUpComplete />,
          },
          {
            path: 'forgot-password-individual',
            element: <ForgotPasswdIndividual />, // 개인 비밀번호 찾기
          },
          {
            path: 'forgot-password-company',
            element: <ForgotPasswdCompany />, // 기업 비밀번호 찾기
          },
        ],
      },
      {
        path: 'profile',
        element: <Profile />, // 프로필 페이지 추가
      },
      {
        path: 'plan/:planId',
        element: <PlanDetailPage />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
