import { Link, useFetcher, useSearchParams } from '@remix-run/react';
import { DataFunctionArgs, json, redirect } from '@remix-run/server-runtime';
import { login } from '~/providers/account/account';
import { ErrorResult } from '~/generated/graphql';
import { XCircleIcon } from '@heroicons/react/24/solid';
import { Button } from '~/components/Button';
import { ArrowPathIcon } from '@heroicons/react/24/solid';
import { useTranslation } from 'react-i18next';

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
    <h1>This is sign in</h1>
  );
}
