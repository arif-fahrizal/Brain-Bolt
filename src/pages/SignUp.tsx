import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import type z from 'zod';
import AuthLayout from '../components/Layouts/AuthLayout';
import AuthInput from '../components/UI/Inputs/AuthInput';
import { SignUpSchema } from '../schemas/auth.schema';
import { signUp } from '../services/auth.service';

type SignUpForm = z.infer<typeof SignUpSchema>;

export default function SignUpPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SignUpForm>({ resolver: zodResolver(SignUpSchema) });

  const onSubmit = (data: SignUpForm) => {
    try {
      const res = signUp({ username: data.username, password: data.password, confirmPassword: data.confirmPassword });

      if (!res) return setError('root', { message: 'Something went wrong, please try again' });
      if (!res.status) return setError('root', { message: res.message });

      alert(res.message);
      navigate('/sign-in');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthLayout title="Create a new account" error={errors.root?.message}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <AuthInput
          label="Username"
          type="text"
          placeholder="Choose a username"
          {...register('username')}
          error={errors.username?.message}
        />
        <AuthInput
          label="Password"
          type="password"
          placeholder="Create a password"
          {...register('password')}
          error={errors.password?.message}
        />
        <AuthInput
          label="Confirm Password"
          type="password"
          placeholder="Repeat your password"
          {...register('confirmPassword')}
          error={errors.confirmPassword?.message}
        />
        <button className="btn-primary mt-3 w-full px-4 py-3.5">Create account</button>
        <p className="text-center text-sm text-zinc-500">
          Already have an account?{' '}
          <Link to="/sign-in" className="font-semibold text-[#ff0513] hover:text-red-300">
            Sign in
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}
