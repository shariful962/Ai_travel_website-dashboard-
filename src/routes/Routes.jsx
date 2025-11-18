import { createBrowserRouter, Navigate } from "react-router";
import Signin from '../pages/auth/Signin'
import Layout from '../layout/Layout'
import Error from '../pages/error/Error'
import Dashboard from "../pages/dashboard/Dashboard";
import Earnings from "../pages/earnings/Earnings";
import Users from "../pages/users/Users";
import Settings from "../pages/Settings/Settings";
import Support from "../pages/support/Support";
import ForgotPassword from "../pages/auth/ForgotPassword";
import OtpVerification from "../pages/auth/OtpVerification";
import ResetPassword from "../pages/auth/ResetPassword";
import PernonalInformation from "../pages/Settings/personal information/PernonalInformation";
import ChangePassword from "../pages/Settings/change password/ChangePassword";
import TermsConditions from "../pages/Settings/terms & conditions/TermsConditions";
import PrivacyPolicy from "../pages/Settings/privacy and policy/PrivacyPolicy";
import FAQ from "../pages/Settings/faq/FAQ";


export const router = createBrowserRouter([
    {
        path:'/signin',
        Component: Signin
    },
    {
        path:'/forgotpassword',
        Component: ForgotPassword
    },
    {
        path: '/otp',
        Component: OtpVerification
    },
    {
        path: '/resetpassword',
        Component: ResetPassword
    },
     
    {
        path: '/',
        Component: Layout,
        errorElement: <Error/>,
        children: [
            {index: true, element: <Navigate to='/signin' replace /> },
            {
                path: '/dashboard',
                Component: Dashboard
            },
            {
                path: 'earnings',
                Component: Earnings
            },
            {
                path: 'users',
                Component: Users
            },
            {
                path: 'settings',
                Component: Settings
            },
            {
                path: 'settings/personal-information',
                Component: PernonalInformation
            },
            {
                path: 'settings/change-password',
                Component: ChangePassword
            },
            {
                path: 'settings/terms-conditions',
                Component: TermsConditions
            },
            {
                path: 'settings/privacy-policy',
                Component: PrivacyPolicy
            },
            {
                path: 'settings/faq',
                Component: FAQ
            },
            {
                path: 'support',
                Component: Support
            }
            
        ]
    }

])