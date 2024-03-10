import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import LoadingSpinner from "./components/LoadingSpinner";
import Header from "./components/Header";
import Error from "./Pages/Error";
import About from "./Pages/About";
import { Suspense } from "react";
import ContactPage from "./Pages/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <Home />
      </Suspense>
    ),
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <About />
      </Suspense>
    ),
    errorElement: <Error />,
  },
  {
    path: "/contact",
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <ContactPage />
      </Suspense>
    ),
    errorElement: <Error />,
  },
]);

function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <RouterProvider router={router} />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
