import { Link, useFetcher, useSearchParams } from '@remix-run/react';
import { DataFunctionArgs, json, redirect } from '@remix-run/server-runtime';
import { login } from '~/providers/account/account';
import { ErrorResult } from '~/generated/graphql';
import { XCircleIcon } from '@heroicons/react/24/solid';
import { Button } from '~/components/Button';
import { ArrowPathIcon } from '@heroicons/react/24/solid';
import { useTranslation } from 'react-i18next';
import { Icon } from '@iconify/react';
import type { SVGProps } from 'react';

export async function action({ params, request }: DataFunctionArgs) {
  const body = await request.formData();
  const email = body.get('email');
  const password = body.get('password');
  if (typeof email === 'string' && typeof password === 'string') {
    const rememberMe = !!body.get('rememberMe');
    const redirectTo = (body.get('redirectTo') || '/account') as string;
    const result = await login(email, password, rememberMe, { request });
    if (result.__typename === 'CurrentUser') {
      return redirect(redirectTo, { headers: result._headers });
    } else {
      return json(result, {
        status: 401,
      });
    }
  }
}

export default function SignInPage() {
  const [searchParams] = useSearchParams();
  const login = useFetcher<ErrorResult>();
  const { t } = useTranslation();

  return (
    <>
      <div className="flex">
        <div className="flex-1 bg-greyishblack p-4">
        </div>
        <div className="flex-1 bg-greyishblack p-4">
        </div>
        <div className="flex-1 bg-white p-4 text-left">
          <div className="py-28 pl-6 w-96">
            <h2 className="text-3xl font-inter font-semibold">Welcome</h2>
            <h5 className="text-xs font-inter text-gold pt-2">Please login here</h5>
            <div className='pt-8'>
              <h5 className="text-xs font-inter text-black">Email Address</h5>
              <input
                type="email"
                className="border-1 border-black rounded-[10px] bg-transparent p-2 mt-1 w-full"
              />
            </div>
            <div className='pt-8'>
              <h5 className="text-xs font-inter text-black">Password</h5>
              <input
                type="password"
                className="border-1 border-black rounded-[10px] bg-transparent p-2 mt-1 w-full"
              />
            </div>
            <div className="flex justify-between items-center pt-4 text-xs">
              <div className="flex items-center">
              <input 
                type="checkbox" 
                id="rememberMe" 
                className="mr-2 w-4 h-4 rounded border-1 border-black checked:bg-gold checked:border-gold" 
              />
              <label htmlFor="rememberMe" className="flex items-center">
                Remember Me
              </label>
              </div>
              <div>Forgot Password</div>
            </div>
            <button className="bg-gold text-white text-sm rounded-[10px] p-2 mt-4 w-full h-10">
              Login
            </button>
            <div className="flex pt-4 text-xs space-x-1">
              <div>No Account?</div>
              <a href="/sign-up" className="text-gold underline">Register</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
