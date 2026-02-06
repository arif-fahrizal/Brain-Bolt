import { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../components/Layouts/AuthLayout';
import AuthInput from '../components/UI/Inputs/AuthInput';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <AuthLayout>
      <h1 className="mb-10 text-3xl font-semibold text-center">Sign In</h1>
      <form
        onSubmit={handleSignIn}
        className="flex flex-col justify-center items-center gap-5 md:h-full mx-auto md:mt-0"
      >
        <AuthInput
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          autoFocus
        />
        <AuthInput
          label="Password"
          type="password"
          placeholder="************"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <button className="btn-primary w-full mt-10">Sign In</button>
        <p className="text-center">
          Don't have an account?{' '}
          <Link to="/sign-up" className="text-purple-400 underline cursor-pointer">
            Sign Up
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}
