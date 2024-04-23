import navBg from "/nav-bg.jpg";
import navLogo from "/nav-logo.png";


const Navbar = () => {
  return (
    <nav className="w-full bg-cover bg-no-repeat bg-center py-4 flex justify-center items-center gap-3" style={{background: `url(${navBg})`}}>
      <div className="h-12 md:h-16">
        <img src={navLogo} alt="" className="h-full"/>
      </div>
      <h3 className="text-white">Espressso Emporium</h3>
    </nav>
  );
};

export default Navbar;