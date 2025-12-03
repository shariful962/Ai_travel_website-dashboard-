import { createBrowserRouter, Navigate } from "react-router";
import Signin from "../pages/auth/Signin";
import Layout from "../layout/Layout";
import Error from "../pages/error/Error";
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
import SupportLayout from "../pages/support/layout/SupportLayout";
import Inbox from "../pages/support/inbox/Inbox";
import Starred from "../pages/support/starred/Starred";
import Sent from "../pages/support/sent/Sent";
import Draft from "../pages/support/draft/Draft";
import EmailView from "../pages/support/email view/EmailView";
// import SupportLayout from "../pages/support/layout/SupportLayout";

export const router = createBrowserRouter([
  {
    path: "/signin",
    Component: Signin,
  },
  {
    path: "/forgotpassword",
    Component: ForgotPassword,
  },
  {
    path: "/otp",
    Component: OtpVerification,
  },
  {
    path: "/resetpassword",
    Component: ResetPassword,
  },

  {
    path: "/",
    Component: Layout,
    errorElement: <Error />,
    children: [
      { index: true, element: <Navigate to="/signin" replace /> },
      {
        path: "/dashboard",
        Component: Dashboard,
      },
      {
        path: "earnings",
        Component: Earnings,
      },
      {
        path: "users",
        Component: Users,
      },
      {
        path: "settings",
        Component: Settings,
      },
      {
        path: "settings/personal-information",
        Component: PernonalInformation,
      },
      {
        path: "settings/change-password",
        Component: ChangePassword,
      },
      {
        path: "settings/terms-conditions",
        Component: TermsConditions,
      },
      {
        path: "settings/privacy-policy",
        Component: PrivacyPolicy,
      },
      {
        path: "settings/faq",
        Component: FAQ,
      },
      // {
      //     path: 'support',
      //     Component: Support
      // }

      {
        path: "support",
        Component: SupportLayout,
        children: [
          { path: "inbox", Component: Inbox },
          { path: "starred", Component: Starred },
          { path: "drafts", Component: Draft },
          { path: "sent", Component: Sent },
          { index: true, element: <Navigate to="inbox" replace /> },
          { path: "inbox/:emailId", Component: EmailView },
        ],
      },
    ],
  },
]);
