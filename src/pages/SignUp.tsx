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
    const { username, password, confirmPassword } = data;

    try {
      const res = signUp({ username, password, confirmPassword });

      if (!res) return setError('root', { message: 'Terjadi kesalahan, silahkan coba lagi' });
      if (!res.status) return setError('root', { message: res.message });

      alert(res.message);
      navigate('/sign-in');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthLayout title="Sign Up" error={errors.root?.message}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center items-center gap-5 md:h-full mx-auto md:mt-0"
      >
        <AuthInput
          label="Username"
          type="text"
          placeholder="Enter your username"
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
        <AuthInput
          label="Confirm Password"
          type="password"
          placeholder="************"
          {...register('confirmPassword')}
          error={errors.confirmPassword?.message}
        />
        <button className="btn-primary w-full mt-10 px-4 py-2">Sign Up</button>
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
