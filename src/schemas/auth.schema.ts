import z from 'zod';

const SignInSchema = z.object({
  username: z
    .string()
    .nonempty('Username cannot be empty')
    .min(6, 'Username must be at least 6 characters')
    .max(20, 'Username must be at most 20 characters')
    .regex(/^[a-zA-Z0-9]+$/, 'Username must contain only letters and numbers')
    .trim(),
  password: z
    .string()
    .nonempty('Password cannot be empty')
    .min(6, 'Password must be at least 8 characters')
    .max(20, 'Password must be at most 20 characters')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      'Password must contain at least one uppercase letter, one lowercase letter, and one number'
    )
    .trim(),
});

const SignUpSchema = z.clone(SignInSchema).extend({
  confirmPassword: z
    .string()
    .nonempty('Confirm Password cannot be empty')
    .min(6, 'Password must be at least 8 characters')
    .max(20, 'Password must be at most 20 characters')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      'Password must contain at least one uppercase letter, one lowercase letter, and one number'
    )
    .trim(),
});

export { SignInSchema, SignUpSchema };
