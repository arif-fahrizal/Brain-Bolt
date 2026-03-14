import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import z from 'zod';
import AuthLayout from '../components/Layouts/AuthLayout';
import AuthInput from '../components/UI/Inputs/AuthInput';
import useAuth from '../hooks/useAuth';
import { SignInSchema } from '../schemas/auth.schema';
import { signIn } from '../services/auth.service';
import type { User } from '../types/auth.types';

type SignInForm = z.infer<typeof SignInSchema>;

export default function SignInPage() {
  const { setUser } = useAuth();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SignInForm>({ resolver: zodResolver(SignInSchema) });

  const onSubmit = (data: SignInForm) => {
    const { username, password } = data;

    try {
      const res = signIn({ username, password });

      if (!res) return setError('root', { message: 'Terjadi kesalahan, silahkan coba lagi' });
      if (!res.status) return setError('root', { message: res.message });

      navigate('/');
      setUser(res.user as User);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthLayout title="Sign In" error={errors.root?.message}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center items-center gap-5 md:h-full mx-auto md:mt-0"
      >
        <AuthInput
          label="Username"
          type="text"
          placeholder="Enter your username"
          autoFocus
          {...register('username')}
          error={errors.username?.message}
        />
        <AuthInput
          label="Password"
          type="password"
          placeholder="************"
          {...register('password')}
          error={errors.password?.message}
        />
        <button className="btn-primary w-full mt-10 px-4 py-2">Sign In</button>
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
