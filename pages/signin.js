import React, { useState, useContext, useEffect} from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { login } from "../lib/auth";
import AuthContext from "../context/AuthContext";

const SignIn = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter();
  const authContext = useContext(AuthContext)

  useEffect(() => {
    if (authContext.isAuthenticated) {
      router.push("/"); 
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    login(username, password)
      .then((res) => {
        setLoading(false);
        authContext.setUser(res.data.user);
      })
      .catch((error) => {
        console.log(error.response.data);
        setLoading(false);
      });
  };

  return (
    <div>
      <Head>
        <title>Entrar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center items-center" style={{ marginTop: 48 }}>
        <div className="w-full max-w-md">
          <form className="shadow-lg rounded p-8" style={{ background: "var(--color-primary-1)" }}>
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
              {loading 
                ?  <p>Entrando...</p>
                : <div>
                    <button
                      className="text-white font-bold py-4 px-12 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                      onClick={handleSubmit}
                      style={{ background: "var(--color-primary-4)" }}
                    >
                      Entrar
                    </button>

                  </div>
              }
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;