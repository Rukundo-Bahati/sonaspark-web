'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

const interests = [
  'Climate Change',
  'Sustainability',
  'Renewable Energy',
  'Water Management',
  'Agriculture',
  'Disaster Management',
  'Community Development',
  'Environmental Education',
];

const registerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string(),
  phoneNumber: z.string().optional(),
  organization: z.string().optional(),
  role: z.string().optional(),
  country: z.string().min(1, 'Country is required'),
  city: z.string().min(1, 'City is required'),
  interests: z.array(z.string()).min(1, 'Select at least one interest'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type RegisterFormData = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const { register: registerUser, registerWithGoogle } = useAuth();
  const router = useRouter();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      interests: [],
    },
  });

  const selectedInterests = watch('interests');

  const onSubmit = async (data: RegisterFormData) => {
    try {
      setIsLoading(true);
      await registerUser({
        ...data,
        location: {
          country: data.country,
          city: data.city,
        },
      });
      router.push('/');
    } catch (err) {
      setError('Registration failed');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleRegister = async () => {
    try {
      setIsLoading(true);
      await registerWithGoogle();
      router.push('/');
    } catch (err) {
      setError('Google registration failed');
    } finally {
      setIsLoading(false);
    }
  };

  const toggleInterest = (interest: string) => {
    const currentInterests = selectedInterests || [];
    if (currentInterests.includes(interest)) {
      setValue('interests', currentInterests.filter((i) => i !== interest));
    } else {
      setValue('interests', [...currentInterests, interest]);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
        </div>

        <Button
          type="button"
          variant="outline"
          className="w-full"
          onClick={handleGoogleRegister}
          disabled={isLoading}
        >
          <img
            src="https://www.google.com/favicon.ico"
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          Continue with Google
        </Button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <Separator className="w-full" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or continue with email</span>
          </div>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                {...register('name')}
                className="mt-1"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                type="email"
                {...register('email')}
                className="mt-1"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                {...register('password')}
                className="mt-1"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                {...register('confirmPassword')}
                className="mt-1"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="phoneNumber">Phone Number (Optional)</Label>
              <Input
                id="phoneNumber"
                type="tel"
                {...register('phoneNumber')}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="organization">Organization (Optional)</Label>
              <Input
                id="organization"
                type="text"
                {...register('organization')}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="role">Role (Optional)</Label>
              <Input
                id="role"
                type="text"
                {...register('role')}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="country">Country</Label>
              <Input
                id="country"
                type="text"
                {...register('country')}
                className="mt-1"
              />
              {errors.country && (
                <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                type="text"
                {...register('city')}
                className="mt-1"
              />
              {errors.city && (
                <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
              )}
            </div>
          </div>

          <div>
            <Label>Interests</Label>
            <div className="mt-2 grid grid-cols-2 md:grid-cols-4 gap-4">
              {interests.map((interest) => (
                <div key={interest} className="flex items-center space-x-2">
                  <Checkbox
                    id={interest}
                    checked={selectedInterests?.includes(interest)}
                    onCheckedChange={() => toggleInterest(interest)}
                  />
                  <Label htmlFor={interest} className="text-sm">
                    {interest}
                  </Label>
                </div>
              ))}
            </div>
            {errors.interests && (
              <p className="text-red-500 text-sm mt-1">{errors.interests.message}</p>
            )}
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting || isLoading}
          >
            {isSubmitting || isLoading ? 'Creating account...' : 'Create account'}
          </Button>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link href="/login" className="text-blue-600 hover:text-blue-500">
                Sign in here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
} 