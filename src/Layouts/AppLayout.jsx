import { Outlet, useLocation, useNavigation } from "react-router";
import LoadingSpinner from "../components/LoadingSpinner";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useMemo } from "react";
import { useAppContext } from "../context/AppContext";

const AppLayout = () => {
  const navigation = useNavigation();
  const { setIsHomePage } = useAppContext();
  const location = useLocation();
  const isInvertoryPage = useMemo(
    () => location.pathname === "/inventory",
    [location.pathname]
  );

  useEffect(() => {
    setIsHomePage(location.pathname === "/");
  }, [location.pathname, setIsHomePage]);

  const isLoading = useMemo(
    () => navigation.state === "loading",
    [navigation.state]
  );

  return (
    <div>
      {isLoading && <LoadingSpinner />}
      {isInvertoryPage || <Header />}
      <div>
        <Outlet />
      </div>
      {isInvertoryPage || <Footer />}
    </div>
  );
};

export default AppLayout;
