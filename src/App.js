import React, { useEffect } from "react";
import { useAuthContext } from "./contexts/AuthContext";
import MainRoutes from "./routes/MainRoutes";

function App() {
  const { checkAuth } = useAuthContext();
  useEffect(() => {
    checkAuth();
  }, []);
  return <MainRoutes />;
}

export default App;
