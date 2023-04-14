import Input from "@/components/input";
import { useCallback, useState } from "react";
import Image from "next/image";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  return (
    <div className="relative h-screen w-screen bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <Image
            src="/images/logo.png"
            alt="Logo"
            className="h-12"
            width={160}
            height={75}
          />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === "login" ? "Sign in" : "Register"}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === "register" && (
                <Input
                  id="name"
                  value={user}
                  label="User Name"
                  onChange={(ev: any) => {
                    setUser(ev.target.value);
                  }}
                />
              )}

              <Input
                id="email"
                type="email"
                value={email}
                label="Email"
                onChange={(ev: any) => {
                  setEmail(ev.target.value);
                }}
              />

              <Input
                id="password"
                type="password"
                value={password}
                label="Password"
                onChange={(ev: any) => {
                  setPassword(ev.target.value);
                }}
              />
            </div>
            <button className="bg-red-600 text-white py-3 rounded-md w-full mt-10 hover:bg-red-700 transition">
              {variant === "login" ? "Login" : "Sign up"}
            </button>
            <p className="text-neutral-500 mt-12">
              {variant === "login"
                ? "First time using NetFlix?"
                : "Already heave an account"}
              <span
                onClick={toggleVariant}
                className="text-white ml-1 hover:underline cursor-pointer"
              >
                {variant === "login" ? "Create and account" : "Login"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
