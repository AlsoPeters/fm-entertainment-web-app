const Header = () => {
  return (
    <nav className="flex h-14 w-auto items-center justify-between bg-ewa-semi-dark-blue px-4 sm:mx-4 sm:mt-4 sm:rounded-lg lg:h-[960px] lg:w-24 lg:flex-col lg:justify-start lg:py-6">
      <div className="logo h-[20px] w-[25px] bg-ewa-red"></div>
      <section className="flex gap-4 lg:mb-auto lg:mt-16 lg:flex-col lg:gap-10">
        <div className="home h-[16px] w-[16px] bg-ewa-grayish-blue"></div>
        <div className="movies h-[16px] w-[16px] bg-ewa-grayish-blue"></div>
        <div className="tv h-[16px] w-[16px] bg-ewa-grayish-blue"></div>
        <div className="bookmark h-[16px] w-[16px] bg-ewa-grayish-blue"></div>
      </section>

      <div className="avatar h-[24px] w-[24px] rounded-full bg-ewa-pure-white"></div>
    </nav>
  );
};

const Layout = ({ children }) => {
  return (
    <div className="lg:flex">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
