
import { useRouter } from "next/router";
import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'
import { logout } from "../lib/auth";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  const router = useRouter();
  const {user, setUser} = useContext(AuthContext)

  return (
    <nav id="header" className="w-full z-30 top-0 py-1">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">


        <button htmlFor="menu-toggle" className="cursor-pointer md:hidden block " onClick={() => setNavbarOpen(!navbarOpen)}>
          <svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>

        <div className={"md:flex md:items-center md:w-auto w-full order-3 md:order-1" +
          (navbarOpen ? " flex" : " hidden")} id="menu">
          <nav>
            <ul className="md:flex items-center justify-between text-base text-gray-800 pt-4 md:pt-0">
              {user ?
              <li><a className="inline-block no-underline hover:text-black hover:underline py-2 px-4 md:hidden" onClick={() => {
                logout();
                setUser(null);
              }}href="/">Logout</a></li>
              :
              <>
              <li><a className="inline-block no-underline hover:text-black hover:underline py-2 px-4 md:hidden" onClick={()=> {
                router.push("/signin")
                setNavbarOpen(false)}}>Login</a></li>
              <li><a className="inline-block no-underline hover:text-black hover:underline py-2 px-4 md:hidden" onClick={()=> {
                router.push("/signup")
                setNavbarOpen(false)}}>Registrar</a></li>
              </>
              }
              <li><a className="inline-block no-underline hover:text-black hover:underline py-2 px-4" href="/">Shop</a></li>
              <li><a className="inline-block no-underline hover:text-black hover:underline py-2 px-4" href="/">About</a></li>
            </ul>
          </nav>
        </div>

        <div className="order-1 md:order-2">
          <a className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-900 text-xl " href="/">
                    LOJA DA MONA
          </a>
        </div>

        <div className="order-2 md:order-3 flex items-center " id="nav-content">

          <div className="no-underline hover:text-black hidden md:flex">
            <svg className="fill-current hover:text-black" style={{alignSelf: 'center'}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <circle fill="none" cx="12" cy="7" r="3" />
              <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z" />
            </svg>
            {user 
              ? <>
                <ul className="md:flex items-center justify-between text-base text-gray-800 pt-4 md:pt-0">
                  <li>
                    <a  className="inline-block no-underline hover:text-black hover:underline py-2 px-4" style={{paddingRight: 16, fontWeight: 'bold'}}>{user.username}</a> 
                  </li>
                  |
                  <li>
                    <a  
                      className="inline-block no-underline text-gray-800 hover:text-black hover:underline py-2 px-4"
                      style={{paddingLeft: 16}}
                      onClick={() => {
                        logout();
                        setUser(null);
                      }}
                    >
                      Logout
                    </a>
                  </li>
                </ul>
                </>
              :  <ul className="md:flex items-center justify-between text-base text-gray-800 pt-4 md:pt-0">
                    <li>
                      <a  className="inline-block no-underline hover:text-black hover:underline py-2 px-4"  onClick={()=> router.push("/signin")}>Login </a>
                    </li>
                    /
                    <li>
                      <a  className="inline-block no-underline hover:text-black hover:underline py-2 px-4" onClick={()=> router.push("/signup")}> Registrar</a>
                    </li>
                  </ul>
                
            }
          </div>

         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
