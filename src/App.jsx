import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import About from "./Pages/About";
import ContactPage from "./Pages/ContactPage";
import { AppProvider } from "./context/AppContext";
import LearnMore from "./Pages/LearnMore";
import CareersPage from "./Pages/CareersPage";
import RegisterPage from "./Pages/RegisterPage";
import SignInPage from "./Pages/SignInPage";
import InventoryPage from "./Pages/InventoryPage";
import AccountPage from "./Pages/AccountPage";
import AppLayout from "./Layouts/AppLayout";
import { Suspense } from "react";
import LoadingSpinner from "./components/LoadingSpinner";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Suspense fallback={<LoadingSpinner />}>
              <Home />,
            </Suspense>
          </>
        ),
        errorElement: <Error />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <Error />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
        errorElement: <Error />,
      },
      {
        path: "/learn-more",
        element: <LearnMore />,
        errorElement: <Error />,
      },
      {
        path: "/careers",
        element: <CareersPage />,
        errorElement: <Error />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
        errorElement: <Error />,
      },
      {
        path: "/signin",
        element: <SignInPage />,
        errorElement: <Error />,
      },
      {
        path: "/inventory",
        element: <InventoryPage />,
        errorElement: <Error />,
      },
      {
        path: "/account",
        element: <AccountPage />,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return (
    <AppProvider>
      <div className="overflow-hidden ">
        <RouterProvider router={router} />
      </div>
    </AppProvider>
  );
}

export default App;
