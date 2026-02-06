import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../components/Layouts/AuthLayout';
import AuthInput from '../components/UI/Inputs/AuthInput';
import AuthContext from '../contexts/Auth/AuthContext';
import { signIn } from '../services/auth';
import type { User } from '../types/auth.types';

export default function SignInPage() {
  const { setUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = signIn({ username, password });

      if (!res) return alert('Terjadi kesalahan, silahkan coba lagi');
      if (!res.status) return alert(res.message);

      navigate('/');
      setUser(res.user as User);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthLayout>
      <h1 className="mb-10 text-3xl font-semibold text-center">Sign In</h1>
      <form
        onSubmit={handleSignIn}
        className="flex flex-col justify-center items-center gap-5 md:h-full mx-auto md:mt-0"
      >
        <AuthInput
          label="Username"
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
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
