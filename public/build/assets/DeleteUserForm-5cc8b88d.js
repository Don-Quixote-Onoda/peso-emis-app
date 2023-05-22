import{a as e,j as a}from"./app-8152747c.js";import{r as i}from"./react-9a873dbd.js";import{I as b}from"./InputError-a1a7a641.js";import{I as v}from"./InputLabel-6701bef9.js";import{t as u,S as f}from"./@headlessui-7974b500.js";import{T as N}from"./TextInput-534a9aa4.js";import{_ as F}from"./@inertiajs-ef2582a9.js";import"./jspdf-7a201d71.js";import"./@babel-e66356b2.js";import"./fflate-8981c52c.js";import"./axios-aba6f0e0.js";import"./react-dom-3eb6303a.js";import"./call-bind-2ea32180.js";import"./get-intrinsic-b9397c9a.js";import"./has-symbols-e8f3ca0e.js";import"./function-bind-22e7ee79.js";import"./has-26d28e02.js";import"./scheduler-04ce0582.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./primereact-81f5fb97.js";import"./react-transition-group-0105c8fc.js";import"./dom-helpers-9a525042.js";/* empty css                   */import"./deepmerge-89e33937.js";import"./qs-da11641f.js";import"./side-channel-9a8f457d.js";import"./object-inspect-4012e9c9.js";import"./nprogress-e0bc7c5f.js";import"./lodash.isequal-c571d922.js";function y({className:s="",disabled:o,children:t,...r}){return e("button",{...r,className:`inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 ${o&&"opacity-25"} `+s,disabled:o,children:t})}function C({children:s,show:o=!1,maxWidth:t="2xl",closeable:r=!0,onClose:n=()=>{}}){const l=()=>{r&&n()},m={sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"}[t];return e(u,{show:o,as:i.Fragment,leave:"duration-200",children:a(f,{as:"div",id:"modal",className:"fixed inset-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center z-50 transform transition-all",onClose:l,children:[e(u.Child,{as:i.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:"absolute inset-0 bg-gray-500/75"})}),e(u.Child,{as:i.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:e(f.Panel,{className:`mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto ${m}`,children:s})})]})})}function D({type:s="button",className:o="",disabled:t,children:r,...n}){return e("button",{...n,type:s,className:`inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${t&&"opacity-25"} `+o,disabled:t,children:r})}function te({className:s}){const[o,t]=i.useState(!1),r=i.useRef(),{data:n,setData:l,delete:m,processing:x,reset:p,errors:g}=F({password:""}),h=()=>{t(!0)},w=d=>{d.preventDefault(),m(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>c(),onError:()=>r.current.focus(),onFinish:()=>p()})},c=()=>{t(!1),p()};return a("section",{className:`space-y-6 ${s}`,children:[a("header",{children:[e("h2",{className:"text-lg font-medium text-gray-900",children:"Delete Account"}),e("p",{className:"mt-1 text-sm text-gray-600",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain."})]}),e(y,{onClick:h,children:"Delete Account"}),e(C,{show:o,onClose:c,children:a("form",{onSubmit:w,className:"p-6",children:[e("h2",{className:"text-lg font-medium text-gray-900",children:"Are you sure you want to delete your account?"}),e("p",{className:"mt-1 text-sm text-gray-600",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account."}),a("div",{className:"mt-6",children:[e(v,{htmlFor:"password",value:"Password",className:"sr-only"}),e(N,{id:"password",type:"password",name:"password",ref:r,value:n.password,onChange:d=>l("password",d.target.value),className:"mt-1 block w-3/4",isFocused:!0,placeholder:"Password"}),e(b,{message:g.password,className:"mt-2"})]}),a("div",{className:"mt-6 flex justify-end",children:[e(D,{onClick:c,children:"Cancel"}),e(y,{className:"ml-3",disabled:x,children:"Delete Account"})]})]})})]})}export{te as default};