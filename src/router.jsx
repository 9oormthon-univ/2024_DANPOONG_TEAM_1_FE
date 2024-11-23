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
import Step2 from './components/createFestival/Steps/Step2';
import SearchPlanPage from './pages/searchPlan/SearchPlanPage';
import SignUp from './pages/signup/SignUp';
import ThemePage from './pages/theme/ThemePage';

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
        element: <CreateFestival />,
      },
      {
        path: 'create-festival/step2',
        element: <Step2 />,
      },
      {
        path: 'login',
        element: <Login />,
        children: [
          {
            path: 'form/:userType',
            element: <LoginForm />,
          },
          {
            path: 'individual-signup',
            element: <IndividualSignUp />,
          },
          {
            path: 'company-signup',
            element: <CompanySignUp />,
          },
          {
            path: 'signup-complete',
            element: <SignUpComplete />,
          },
          {
            path: 'forgot-password-individual',
            element: <ForgotPasswdIndividual />,
          },
          {
            path: 'forgot-password-company',
            element: <ForgotPasswdCompany />,
          },
        ],
      },
      {
        path: 'signup',
        element: <SignUp />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'plan/:planId',
        element: <PlanDetailPage />,
      },
      {
        path: 'search/:searchContent',
        element: <SearchPlanPage />,
      },
      {
        path: 'plan/:planId',
        element: <PlanDetailPage />,
      },
      {
        path: 'theme/:categoryName',
        element: <ThemePage />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
