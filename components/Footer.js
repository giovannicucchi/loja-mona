const Footer = () => {
  return (
    <section  style={{ background: "var(--color-primary-2)" }}>

      <div className="flex justify-between m-6">
        <p className="text-xs font-semibold text-gray-600">
          Nova Loja da Mona
      </p>
        <div className="flex gap-3 ml-4">
        
        <a href="https://www.facebook.com/Lojinhadamona-107874274368278" className="ml-3">
          <img src="/facebook.svg" alt="Facebook" />
        </a>
        <a
          href="https://www.instagram.com/lojinhadamona/"
          className="ml-3"
        >
          <img style={{height:20, width:20}} src="/instagram.svg" alt="instagram" />
        </a>
      </div>
      </div>
    </section>
  );
};

export default Footer;
