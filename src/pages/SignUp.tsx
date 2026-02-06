import { Link } from 'react-router-dom';
import AuthLayout from '../components/Layouts/AuthLayout';
import AuthInput from '../components/UI/Inputs/AuthInput';

export default function SignUpPage() {
  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <AuthLayout>
      <h1 className="mb-10 text-3xl font-semibold text-center">Sign Up</h1>
      <form
        onSubmit={handleSignUp}
        className="flex flex-col justify-center items-center gap-5 md:h-full mx-auto md:mt-0"
      >
        <AuthInput label="Email" type="email" placeholder="Enter your email" />
        <AuthInput label="Password" type="password" placeholder="************" />
        <AuthInput label="Confirm Password" type="password" placeholder="************" />
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
