import React, { useState } from "react";
import Head from "next/head";
import axios from "axios";
import { setCookie } from "nookies";

const SignIn = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post("https://api-loja-mona.herokuapp.com/auth/local/register", {
      username,
      password,
    });

    setCookie("", "token", res.data.jwt, {
      maxAge: 30 * 24 * 60 * 60,
      path: "/"
    });
  };

  return (
    <div>
      <Head>
        <title>Entrar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center items-center" style={{marginTop: 48}}>
        <div className="w-full max-w-md">
          <form className="shadow-lg rounded p-8" style={{background:"var(--color-primary-1)"}}>
            <div className="mb-4">
              <label
                className="block text-gray-800 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Usuário
              </label>
              <input
                className="appearance-none border rounded w-full p-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="John Doe"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            
            <div className="mb-8">
              <label
                className="block text-gray-800 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Senha
              </label>
              <input
                className="appearance-none border rounded w-full p-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="text-white font-bold py-4 px-12 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleSubmit}
                style={{background:"var(--color-primary-4)"}}
              >
                Entrar
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
                style={{color:"var(--color-primary-4)"}}
              >
                Esqueceu sua senha?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;