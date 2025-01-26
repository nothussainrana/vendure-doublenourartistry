import { Form, Link, useActionData, useSearchParams } from '@remix-run/react';
import { ActionFunctionArgs, json, redirect } from '@remix-run/server-runtime';
import { registerCustomerAccount } from '~/providers/account/account';
import { XCircleIcon } from '@heroicons/react/24/solid';
import {
  extractRegistrationFormValues,
  RegisterValidationErrors,
  validateRegistrationForm,
} from '~/utils/registration-helper';
import { API_URL, DEMO_API_URL } from '~/constants';
import { useTranslation } from 'react-i18next';
import { getFixedT } from '~/i18next.server';

export async function action({ request }: ActionFunctionArgs) {
  if (API_URL === DEMO_API_URL) {
    const t = await getFixedT(request);

    return {
      form: t('vendure.registrationError'),
    };
  }

  const body = await request.formData();
  const fieldErrors = validateRegistrationForm(body);
  if (Object.keys(fieldErrors).length !== 0) {
    return fieldErrors;
  }

  const variables = extractRegistrationFormValues(body);
  const result = await registerCustomerAccount({ request }, variables);
  if (result.__typename === 'Success') {
    return redirect('/sign-up/success');
  } else {
    const formError: RegisterValidationErrors = {
      form: result.errorCode,
    };
    return json(formError, { status: 401 });
  }
}

export default function SignUpPage() {
  const [searchParams] = useSearchParams();
  const formErrors = useActionData<RegisterValidationErrors>();
  const { t } = useTranslation();

  return (
    <>
      <div className="flex">
        <div className="flex-1 bg-greyishblack p-4">
        </div>
        <div className="flex-1 bg-greyishblack p-4">
        </div>
        <div className="flex-1 bg-white p-4 text-left">
          <div className="py-8 pl-6 w-96">
            <h2 className="text-3xl font-inter font-semibold">Create New Account</h2>
            <h5 className="text-xs font-inter text-gold pt-2">Please enter details</h5>
            <div className='pt-6'>
              <h5 className="text-xs font-inter text-black">First Name</h5>
              <input
                type="text"
                className="border-1 border-black rounded-[10px] bg-transparent p-2 mt-1 w-full"
              />
            </div>
            <div className='pt-6'>
              <h5 className="text-xs font-inter text-black">Last Name</h5>
              <input
                type="text"
                className="border-1 border-black rounded-[10px] bg-transparent p-2 mt-1 w-full"
              />
            </div>
            <div className='pt-6'>
              <h5 className="text-xs font-inter text-black">Email Address</h5>
              <input
                type="email"
                className="border-1 border-black rounded-[10px] bg-transparent p-2 mt-1 w-full"
              />
            </div>
            <div className='pt-6'>
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
                I agree to the Terms & Conditions
              </label>
              </div>
            </div>
            <button className="bg-gold text-white text-sm rounded-[10px] p-2 mt-4 w-full h-10">
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
