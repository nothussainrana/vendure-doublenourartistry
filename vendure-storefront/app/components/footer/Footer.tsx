import { RootLoaderData } from '~/root';
import { Link } from '@remix-run/react';
import { useTranslation } from 'react-i18next';
import { Icon } from '@iconify/react';
import type { SVGProps } from 'react';

const navigation = {
  support: [
    { page: 'help', href: '#' },
    { page: 'trackOrder', href: '#' },
    { page: 'shipping', href: '#' },
    { page: 'returns', href: '#' },
  ],
  company: [
    { page: 'about', href: '#' },
    { page: 'blog', href: '#' },
    { page: 'responsibility', href: '#' },
    { page: 'press', href: '#' },
  ],
};

export function FaCcMastercard(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2304 1536" {...props}><path fill="currentColor" d="M1119 213q-128-85-281-85q-103 0-197.5 40.5T478 277T369.5 439T329 636q0 104 40.5 198T478 996t162 108.5t198 40.5q153 0 281-85q-131-107-178-265.5t.5-316.5T1119 213m33 24q-126 99-172 249.5t-.5 300.5t172.5 249q127-99 172.5-249t-.5-300.5T1152 237m33-24q130 107 177.5 265.5t.5 317t-178 264.5q128 85 281 85q104 0 198-40.5T1826 996t108.5-162t40.5-198q0-103-40.5-197T1826 277t-162.5-108.5T1466 128q-153 0-281 85m741 722h7v-3h-17v3h7v17h3zm29 17h4v-20h-5l-6 13l-6-13h-5v20h3v-15l6 13h4l5-13zm-8 440v2h-5v-3h5zm0 9h3l-4-5h2l1-1q1-1 1-3t-1-3l-1-1h-9v13h3v-5h1zm-1262-68q0-19 11-31t30-12q18 0 29 12.5t11 30.5q0 19-11 31t-29 12q-19 0-30-12t-11-31m473-44q30 0 35 32h-70q5-32 35-32m356 44q0-19 11-31t29-12t29.5 12.5t11.5 30.5q0 19-11 31t-30 12q-18 0-29-12t-11-31m272 0q0-18 11.5-30.5t29.5-12.5t29.5 12.5t11.5 30.5q0 19-11.5 31t-29.5 12t-29.5-12.5t-11.5-30.5m158 72q-2 0-4-1q-1 0-3-2t-2-3q-1-2-1-4q0-3 1-4q0-2 2-4l1-1q2 0 2-1q2-1 4-1q3 0 4 1l4 2l2 4v1q1 2 1 3l-1 1v3l-1 1l-1 2q-2 2-4 2q-1 1-4 1m-1345-4h30v-85q0-24-14.5-38.5T575 1262q-32 0-47 24q-14-24-45-24q-24 0-39 20v-16h-30v135h30v-75q0-36 33-36q30 0 30 36v75h29v-75q0-36 33-36q30 0 30 36zm166 0h29v-135h-29v16q-17-20-43-20q-29 0-48 20t-19 51t19 51t48 20q28 0 43-20zm178-41q0-34-47-40l-14-2q-23-4-23-14q0-15 25-15q23 0 43 11l12-24q-22-14-55-14q-26 0-41 12t-15 32q0 33 47 39l13 2q24 4 24 14q0 17-31 17q-25 0-45-14l-13 23q25 17 58 17q29 0 45.5-12t16.5-32m130 34l-8-25q-13 7-26 7q-19 0-19-22v-61h48v-27h-48v-41h-30v41h-28v27h28v61q0 50 47 50q21 0 36-10m86-132q-29 0-48 20t-19 51q0 32 19.5 51.5t49.5 19.5q33 0 55-19l-14-22q-18 15-39 15q-34 0-41-33h101v-12q0-32-18-51.5t-46-19.5m159 0q-23 0-35 20v-16h-30v135h30v-76q0-35 29-35q10 0 18 4l9-28q-9-4-21-4m30 71q0 31 19.5 51t52.5 20q29 0 48-16l-14-24q-18 13-35 12q-18 0-29.5-12t-11.5-31t11.5-31t29.5-12q19 0 35 12l14-24q-20-16-48-16q-33 0-52.5 20t-19.5 51m245 68h30v-135h-30v16q-15-20-42-20q-29 0-48.5 20t-19.5 51t19.5 51t48.5 20q28 0 42-20zm133-139q-23 0-35 20v-16h-29v135h29v-76q0-35 29-35q10 0 18 4l9-28q-8-4-21-4m140 139h29v-190h-29v71q-15-20-43-20t-47.5 20.5t-19.5 50.5t19.5 50.5t47.5 20.5q29 0 43-20zm78-20l-2 1h-3q-2 1-4 3q-3 1-3 4q-1 2-1 6q0 3 1 5q0 2 3 4q2 2 4 3t5 1q4 0 6-1q0-1 2-2l2-1q1-1 3-4q1-2 1-5q0-4-1-6q-1-1-3-4q0-1-2-2l-2-1q-1 0-3-.5t-3-.5m360-1253v1280q0 52-38 90t-90 38H128q-52 0-90-38t-38-90V128q0-52 38-90t90-38h2048q52 0 90 38t38 90"></path></svg>);
}
export function FaCcVisa(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2304 1536" {...props}><path fill="currentColor" d="M1975 862h-138q14-37 66-179l3-9q4-10 10-26t9-26l12 55zM531 797l-58-295q-11-54-75-54H130l-2 13q311 79 403 336m179-349L548 886l-17-89q-26-70-85-129.5T315 579l135 510h175l261-641zm139 642h166l104-642H953zm768-626q-69-27-149-27q-123 0-201 59t-79 153q-1 102 145 174q48 23 67 41t19 39q0 30-30 46t-69 16q-86 0-156-33l-22-11l-23 144q74 34 185 34q130 1 208.5-59t80.5-160q0-106-140-174q-49-25-71-42t-22-38q0-22 24.5-38.5T1455 571q70-1 124 24l15 8zm425-16h-128q-65 0-87 54l-246 588h174l35-96h212q5 22 20 96h154zm262-320v1280q0 52-38 90t-90 38H128q-52 0-90-38t-38-90V128q0-52 38-90t90-38h2048q52 0 90 38t38 90"></path></svg>);
}
export function FaCcStripe(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2304 1536" {...props}><path fill="currentColor" d="M1597 775q0 69-21 106q-19 35-52 35q-23 0-41-9V683q29-30 57-30q57 0 57 122m438-36h-110q6-98 56-98q51 0 54 98M476 874q0-59-33-91.5T342 725q-36-13-52-24t-16-25q0-26 38-26q58 0 124 33l18-112q-67-32-149-32q-77 0-123 38q-48 39-48 109q0 58 32.5 90.5T266 833q39 14 54.5 25.5T336 886q0 31-48 31q-29 0-70-12.5T146 874l-18 113q72 41 168 41q81 0 129-37q51-41 51-117m295-215l19-111h-96V413l-129 21l-18 114l-46 8l-17 103h62v219q0 84 44 120q38 30 111 30q32 0 79-11V899q-32 7-44 7q-42 0-42-50V659zm316 25V545q-15-3-28-3q-32 0-55.5 16T970 604l-10-56H829v471h150V713q26-31 82-31q16 0 26 2m37 335h150V548h-150zm622-249q0-122-45-179q-40-52-111-52q-64 0-117 56l-8-47h-132v645l150-25v-151q36 11 68 11q83 0 134-56q61-65 61-202m-468-348q0-33-23-56t-56-23t-56 23t-23 56t23 56.5t56 23.5t56-23.5t23-56.5m898 357q0-113-48-176q-50-64-144-64q-96 0-151.5 66T1777 785q0 128 63 188q55 55 161 55q101 0 160-40l-16-103q-57 31-128 31q-43 0-63-19q-23-19-28-66h248q2-14 2-52m128-651v1280q0 52-38 90t-90 38H128q-52 0-90-38t-38-90V128q0-52 38-90t90-38h2048q52 0 90 38t38 90"></path></svg>);
}
export function FontistoApplePay(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24" {...props}><path fill="currentColor" d="M33.6 24H2.4A2.4 2.4 0 0 1 0 21.6V2.4A2.4 2.4 0 0 1 2.4 0h31.2A2.4 2.4 0 0 1 36 2.4v19.2a2.4 2.4 0 0 1-2.4 2.4m-5.807-7.11V18c.159.022.342.035.528.035h.016h-.001c1.394 0 2.056-.542 2.626-2.147l2.514-7.05h-1.454l-1.686 5.446h-.03L28.62 8.838h-1.496l2.425 6.713l-.13.408a1.14 1.14 0 0 1-1.209.96h.004a8 8 0 0 1-.42-.029zM5.713 8.054h-.026a2.44 2.44 0 0 0-2.058 1.241l-.006.012c-.844 1.452-.307 3.674.627 5.027c.438.64.918 1.266 1.551 1.266h.034c.265-.017.51-.086.731-.197l-.011.005c.267-.134.581-.213.913-.216h.001c.321.002.624.08.891.216l-.011-.005c.215.112.468.18.737.186h.029c.705-.013 1.147-.66 1.538-1.23c.279-.404.51-.869.672-1.366l.011-.038v-.01l-.018-.008A2.23 2.23 0 0 1 10 10.916v-.001a2.25 2.25 0 0 1 1.055-1.887l.009-.005l.018-.012a2.3 2.3 0 0 0-1.83-.994h-.109a3.3 3.3 0 0 0-1.239.307l.021-.009a1.9 1.9 0 0 1-.583.171l-.009.001a1.9 1.9 0 0 1-.626-.181l.011.005a2.7 2.7 0 0 0-.997-.259h-.008zM23.826 9.87c.88 0 1.366.412 1.366 1.159v.509l-1.786.106c-1.675.101-2.56.78-2.56 1.963a2.022 2.022 0 0 0 2.269 1.986l-.01.001l.065.001c.869 0 1.629-.468 2.041-1.167l.006-.011h.03v1.102h1.325v-4.586c0-1.33-1.061-2.188-2.703-2.188c-1.514 0-2.64.868-2.685 2.063h1.29a1.26 1.26 0 0 1 1.359-.939l-.006-.001zM14 6.304v9.216h1.431v-3.152h1.977a2.93 2.93 0 0 0 3.082-3.046v.006a2.9 2.9 0 0 0-3.04-3.024h.007zM9.253 5.6a2.24 2.24 0 0 0-1.477.76l-.002.003a2.1 2.1 0 0 0-.531 1.55v-.006c.034 0 .07.004.11.004a1.9 1.9 0 0 0 1.378-.707l.003-.004a2.23 2.23 0 0 0 .52-1.608v.007zm14.236 8.901c-.758 0-1.249-.365-1.249-.929c0-.582.47-.917 1.36-.97l1.59-.1v.521a1.55 1.55 0 0 1-1.708 1.477zm-6.418-3.33h-1.644V7.51h1.65a1.722 1.722 0 0 1 1.951 1.832v-.006a1.728 1.728 0 0 1-1.967 1.833z"></path></svg>);
}

export default function Footer({
  collections,
}: {
  collections: RootLoaderData['collections'];
}) {
  const { t } = useTranslation();

  return (
<footer className="bg-greyishblack text-gray-200 py-5">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between space-between">
          <div className="flex-1 flex-col items-center md:items-start mb-6 md:mb-0">
            <div className="flex items-center mb-4">
              <img
              src="/logo.png"
              className="h-16"
              alt="Nour Artistry Logo"
            />
              <div className="pl-4">
              <p className="font-raleway text-lg text-[#FFB300]">Double Nour</p>
              <p className="font-raleway text-lg text-[#FFB300]">Artistry</p>
              </div>
            </div>
            <p className="text-sm text-gold">info@nourartistry.com</p>
            <p className="text-sm text-gold">+1 (123) 456 789</p>
            <p className="text-sm text-gold">Address Line 1, City Example, Ottawa, Canada</p>
            {/* Payment Methods */}
            <div className="flex space-x-2 mt-4 items-center">
            <Icon icon="fa:cc-visa" style={{color: "#FFB300"}} width="45" height="30" />
            <Icon icon="fa:cc-mastercard" style={{color: "#FFB300"}} width="45" height="30"/>
            <Icon icon="fa:cc-stripe" style={{color: "#FFB300"}} width="45" height="30"/>
            <Icon icon="fontisto:apple-pay" style={{color: "#FFB300"}} width="45" height="30"/>
            
            </div>
          </div>
          <div className="flex-1 flex justify-start md:justify-end pr-20">
            <div className="w-max">
              <div className="flex flex-col space-y-3 text-left font-thin">
                <a href="#" className="text-sm text-gold hover:underline">Privacy Policy</a>
                <a href="#" className="text-sm text-gold hover:underline">Terms & Conditions</a>
                <a href="#" className="text-sm text-gold hover:underline">Payment Methods</a>
                <a href="#" className="text-sm text-gold hover:underline">Shipping Policy</a>
                <a href="#" className="text-sm text-gold hover:underline">Returns & Refunds</a>
              </div>
            </div>
          </div>
          <div className="flex-1 flex-col items-center md:items-end">


            {/* Subscribe Form */}
            <div>
              <p className="text-gold text-xl font-bold pb-3 pt-0">Subscribe</p>
              <p className="text-sm text-gold font-thin">
                Enter your email below to be the first to know about new collections and product launches
              </p>
              <div className="flex mt-6">
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 bg-greyishblack px-4 py-2 rounded-l-md border border-gold text-gold placeholder-gold focus:outline-none focus:ring-2 focus:ring-gold font-thin text-sm"
              />
                <button className="text-gold px-4 py-2 rounded-r-md">
                  \/
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center text-sm text-gold">
          <p>© 2024 Double Nour Artistry All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
