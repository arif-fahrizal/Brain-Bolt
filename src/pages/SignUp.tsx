import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../components/Layouts/AuthLayout';
import AuthInput from '../components/UI/Inputs/AuthInput';
import { signUp } from '../services/auth.service';

export default function SignUpPage() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = signUp({ username, password, confirmPassword });

      if (!res) return alert('Terjadi kesalahan, silahkan coba lagi');
      if (!res.status) return alert(res.message);

      alert(res.message);
      navigate('/sign-in');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthLayout>
      <h1 className="mb-10 text-3xl font-semibold text-center">Sign Up</h1>
      <form
        onSubmit={handleSignUp}
        className="flex flex-col justify-center items-center gap-5 md:h-full mx-auto md:mt-0"
      >
        <AuthInput
          label="Username"
          type="text"
          placeholder="Enter your username"
          onChange={({ target }) => setUsername(target.value)}
        />
        <AuthInput
          label="Password"
          type="password"
          placeholder="************"
          onChange={({ target }) => setPassword(target.value)}
        />
        <AuthInput
          label="Confirm Password"
          type="password"
          placeholder="************"
          onChange={({ target }) => setConfirmPassword(target.value)}
        />
        <button className="btn-primary w-full mt-10">Sign Up</button>
        <p className="text-center">
          Already have an account?{' '}
          <Link to="/sign-in" className="text-purple-400 underline cursor-pointer">
            Sign In
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}
