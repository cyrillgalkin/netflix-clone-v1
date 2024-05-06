'use client';

import Input from '@/components/input';
import Image from 'next/image';
import { useState } from 'react';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [variant, setVariant] = useState('login');

  const toggleVariant = () =>
    setVariant((prevState) => (prevState === 'login' ? 'register' : 'login'));

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-cover bg-fixed bg-center bg-no-repeat">
      <div className='h-full w-full bg-black lg:bg-opacity-50'>
        <nav className='px-12 py-5'>
          <Image src='/images/logo.png' alt='Logo' height={48} width={130} />
        </nav>
        <div className='flex justify-center'>
          <div className='mt-2 w-full self-center rounded-md bg-black bg-opacity-70 px-16 py-16 lg:w-2/5 lg:max-w-md'>
            <h2 className='mb-8 text-4xl font-semibold text-white'>
              {variant === 'login' ? 'Sign In' : 'Register'}
            </h2>
            <div className='flex flex-col gap-4'>
              {variant === 'register' && (
                <Input
                  label='Username'
                  onChange={(e) => setUsername(e.target.value)}
                  id='username'
                  value={username}
                />
              )}
              <Input
                label='Email'
                onChange={(e) => setEmail(e.target.value)}
                id='email'
                value={email}
                type='email'
              />
              <Input
                label='Password'
                onChange={(e) => setPassword(e.target.value)}
                id='password'
                value={password}
                type='password'
              />
            </div>
            <button className='mt-10 w-full rounded-md bg-red-600 py-3 text-white transition hover:bg-red-700'>
              {variant === 'login' ? 'Login' : 'Sign Up'}
            </button>
            <p className='mt-12 text-center text-sm text-neutral-500'>
              {variant === 'login'
                ? 'First time using Netflix?'
                : 'Already have an account?'}
              <span
                className='ml-1 cursor-pointer text-white hover:underline'
                onClick={toggleVariant}>
                {variant === 'login' ? 'Create an account' : 'Login'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
