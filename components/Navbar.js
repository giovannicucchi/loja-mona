import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between ml-6 mr-6 mt-4">
      <Link href="/">
        <a>
          <img
            src="/logo-mona.png"
            alt="home"
            className="logo"
            height="150"
            width="150"
          />
        </a>
      </Link>
      <div>
        <Link href="/signup">
          <a style={{marginRight: 8}}>Registrar
        </a>
        </Link>
        <Link href="/signin">
          <a>Entrar
        </a>
        </Link>

      </div>
    </div>
  );
};

export default Navbar;
