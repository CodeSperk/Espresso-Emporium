import { useContext } from "react";
import navBg from "/nav-bg.jpg";
import navLogo from "/nav-logo.png";
import {AuthContext} from "../../provider/AuthProvider";
import { Link } from "react-router-dom";

const Navbar = () => {
  const {user, logOutUser} = useContext(AuthContext);

  const handleLogout = () => {
    logOutUser()
          .then(() => {
            alert("success")
          })
          .catch((error) => {
            console.log(error.code);
          });
  }

  return (
    <nav
      className="w-full bg-cover bg-no-repeat bg-center py-4"
      style={{ background: `url(${navBg})` }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-16 flex justify-between items-center">
      <div></div>
      <div className="flex justify-center items-center gap-3">
        <div className="h-12 md:h-16">
          <img src={navLogo} alt="" className="h-full" />
        </div>
        <h3 className="text-white">Espressso Emporium</h3>
      </div>
      {user ? 
          <div className="flex gap-4">
            <Link to="/users" className="font-medium text-[var(--clr-accent)] text-lg hover:underline">Users</Link>

            <button className="font-medium text-[var(--clr-accent)] hover:underline" onClick={handleLogout}>Logout</button>
          </div>
          :  
            <Link to="/login" className="font-medium text-[var(--clr-accent)] hover:underline">Login</Link>        
        }
      </div>
      
    </nav>
  );
};

export default Navbar;
