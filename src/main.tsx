import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthProvider from './contexts/Auth/AuthProvider';
import QuestionsProvider from './contexts/Questions/QuestionsProvider';
import './index.css';
import HomePage from './pages/Home';
import QuizPage from './pages/Quiz';
import ScoresPage from './pages/Scores';
import SignInPage from './pages/SignIn';
import SignUpPage from './pages/SignUp';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/sign-in',
    element: <SignInPage />,
  },
  {
    path: '/sign-up',
    element: <SignUpPage />,
  },
  {
    path: '/quiz',
    element: <QuizPage />,
  },
  {
    path: '/scores',
    element: <ScoresPage />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <QuestionsProvider>
        <RouterProvider router={router} />
      </QuestionsProvider>
    </AuthProvider>
  </StrictMode>
);
