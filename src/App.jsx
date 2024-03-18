import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import LoadingSpinner from "./components/LoadingSpinner";
import Error from "./Pages/Error";
import About from "./Pages/About";
import { Suspense } from "react";
import ContactPage from "./Pages/ContactPage";
import { AppProvider } from "./context/AppContext";
import Header from "./components/Header";
import LearnMore from "./Pages/LearnMore";
import CareersPage from "./Pages/CareersPage";
import RegisterPage from "./Pages/RegisterPage";
import SignInPage from "./Pages/SignInPage";
import Inventory from "./Pages/Inventory";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <Header />
        <Home />
      </Suspense>
    ),
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <Header />
        <About />
      </Suspense>
    ),
    errorElement: <Error />,
  },
  {
    path: "/contact",
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <Header />
        <ContactPage />
      </Suspense>
    ),
    errorElement: <Error />,
  },
  {
    path: "/learn-more",
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <Header />
        <LearnMore />
      </Suspense>
    ),
    errorElement: <Error />,
  },
  {
    path: "/careers",
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <Header />
        <CareersPage />
      </Suspense>
    ),
    errorElement: <Error />,
  },
  {
    path: "/register",
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <Header />
        <RegisterPage />
      </Suspense>
    ),
    errorElement: <Error />,
  },
  {
    path: "/signin",
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <Header />
        <SignInPage />
      </Suspense>
    ),
    errorElement: <Error />,
  },
  {
    path: "/inventory",
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <Header />
        <Inventory />
      </Suspense>
    ),
    errorElement: <Error />,
  },
]);

function App() {
  return (
    <>
      <AppProvider>
        <div className="overflow-hidden ">
          <RouterProvider router={router} />
        </div>
      </AppProvider>
    </>
  );
}

export default App;
