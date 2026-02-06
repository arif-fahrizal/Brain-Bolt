import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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
    path: '/score',
    element: <ScoresPage />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QuestionsProvider>
      <RouterProvider router={router} />
    </QuestionsProvider>
  </StrictMode>
);
