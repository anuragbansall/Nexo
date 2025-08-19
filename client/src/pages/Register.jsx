import React from "react";
import AuthForm from "../components/AuthForm";
import { NavLink, useParams, useLocation } from "react-router-dom";
import RegisterBgImage from "../assets/register-bg.jpg";

function Register() {
  const { role } = useParams();
  const location = useLocation();

  return (
    <main className="flex h-screen w-full">
      <section className="flex h-full w-full flex-col items-center justify-center overflow-y-auto p-6 md:w-1/2">
        <div className="flex w-lg max-w-full flex-col items-center gap-6">
          <h2 className="mb-6 text-4xl font-bold">Register</h2>
          <div className="flex w-full gap-2">
            {[
              {
                label: "User",
                to: "/register/user",
              },
              {
                label: "Captain",
                to: "/register/captain",
              },
            ].map((item, key) => (
              <NavLink
                key={key}
                to={item.to}
                className={`w-full cursor-pointer ${
                  item.to === location.pathname
                    ? "bg-neutral-100"
                    : "text-neutral-500"
                } rounded-md p-2 text-center text-xl transition duration-200 hover:bg-neutral-100`}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
          <AuthForm role={role} mode="register" />
        </div>
      </section>

      <section className="hidden h-full w-1/2 md:block">
        <img
          src={RegisterBgImage}
          alt="Register Background"
          className="h-full w-full object-cover"
        />
      </section>
    </main>
  );
}

export default Register;
