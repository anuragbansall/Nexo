import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Landing from "./Landing";
import Booking from "./Booking";
import Captain from "./Captain";

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

  if (role === "user") {
    return <Booking />;
  }

  if (role === "captain") {
    return <Captain />;
  }
}
export default Home;
