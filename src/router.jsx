import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import MainPage from './pages/main/MainPage';
import NotFound from './pages/error/NotFound';
import Login from './pages/login/Login';
import LoginOption from './pages/login/LoginOption';
import LoginForm from './components/login/LoginForm';
import IndividualSignUp from './pages/signup/IndividualSignUp';
import CompanySignUp from './pages/signup/CompanySignUp';
import SignUpComplete from './components/login/SignUpComplete';
import ForgotPasswdIndividual from './pages/login/ForgotPasswdIndividual';
import ForgotPasswdCompany from './pages/login/ForgotPasswdCompany';
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
        path: 'login',
        element: <Login />,
        children: [
          {
            index: true,
            element: <LoginOption />, // 기본 로그인 옵션 화면
          },
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
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
