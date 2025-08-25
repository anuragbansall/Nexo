import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Landing from "./Landing";

function Home() {
  const { isAuthenticated, user, role, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <main className="flex h-screen w-screen items-center justify-center">
        <h1>Loading...</h1>
      </main>
    );
  }

  if (!isAuthenticated) {
    return <Landing />;
  }

  return (
    <main>
      <h1>Welcome back!</h1>
    </main>
  );
}

export default Home;
