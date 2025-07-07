import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Navbar";
import Footer from "./Components/Footer";
import Loader from "./Components/Loader/loader"; // ✅ Adjust path if needed

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
