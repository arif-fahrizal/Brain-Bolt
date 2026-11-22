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
    try {
      const res = signIn({ username: data.username, password: data.password });

      if (!res) return setError('root', { message: 'Something went wrong, please try again' });
      if (!res.status) return setError('root', { message: res.message });

      navigate('/');
      setUser(res.user as User);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthLayout title="Welcome back" error={errors.root?.message}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <AuthInput
          label="Username"
          type="text"
          placeholder="Enter username"
          autoFocus
          {...register('username')}
          error={errors.username?.message}
        />
        <AuthInput
          label="Password"
          type="password"
          placeholder="Enter password"
          {...register('password')}
          error={errors.password?.message}
        />
        <button className="btn-primary mt-3 w-full px-4 py-3.5">Sign in to BrainBolt</button>
        <p className="text-center text-sm text-zinc-500">
          Don&apos;t have an account?{' '}
          <Link to="/sign-up" className="font-semibold text-[#ff0513] hover:text-red-300">
            Sign up now
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}
