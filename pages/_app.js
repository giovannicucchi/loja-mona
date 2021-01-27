import React from "react";
import App from "next/app";
import Head from "next/head";
import Layout from "../components/Layout";
import { getCategories } from "../utils/api";
import Cookie from "js-cookie";
import AuthContext from '../context/AuthContext'
import "../styles/index.css";
import "../styles/colors.css";

const MyApp = ({ Component, pageProps }) => {

  const [user, setUser ] =  React.useState(null)

  React.useEffect(()=> {
    const token = Cookie.get("token");

    if (token) {
      // authenticate the token on the server and place set user object
      fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/users/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then(async (res) => {
        // if res comes back not valid, token is not valid
        // delete the token and log the user out on client
        if (!res.ok) {
          Cookie.remove("token");
          setUser(null)
          return null;
        }
        const user = await res.json();
        setUserState(user)
      });
    }
  }, [])

  const setUserState = (user)=> {
    setUser(user);
  }

  return (
    <AuthContext.Provider
      value={{
        user: user,
        isAuthenticated: !!user,
        setUser: setUserState,
      }}
      >

      <Layout categories={pageProps.categories}>
        <Head>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </AuthContext.Provider>  
  );
};

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So [[...slug]] pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const categories = await getCategories();
  // Pass the data to our page via props
  return { ...appProps, pageProps: { categories, path: ctx.pathname } };
};

export default MyApp;
