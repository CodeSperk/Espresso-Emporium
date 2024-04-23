import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoIosArrowRoundBack, IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";


const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const {loginUser, googleLogin} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLoginUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    loginUser(email, password)
    .then(result => {
      Swal.fire({
        icon: "success",
        title: "Login Successful !",
        timer: 1500
      });

      const user = {
        email,
        createdTime: result.user.metadata.creationTime,
        lastLoginTime: result.user.metadata.lastSignInTime
      }

      fetch("http://localhost:5000/users", {
        method: "PATCH",
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      form.reset();
      navigate(location.state? location.state : "/");
    })
    .catch(error => {
      console.log(error.code);
    })
  }

  const handleGoogleLogin = () => {
    googleLogin()
    .then(result => {
      Swal.fire({
        icon: "success",
        title: "Login Successful !",
        timer: 1500
      });
            // to update userInfo
            const user = {
              email: result.user.email,
              createdTime: result.user.metadata.creationTime,
              lastLoginTime: result.user.metadata.lastSignInTime
            }
      
            fetch("http://localhost:5000/users", {
              method: "PATCH",
              headers: {
                'content-type' : 'application/json'
              },
              body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => {
              console.log(data);
            })
            navigate(location.state? location.state : "/");
    })
    .catch(error => {
      alert(error.code);
    })
  };
  return (
    <main className="max-w-7xl mx-auto px-4 md:px-10 lg:px-16">
      <div className="mt-10 md:mt-16 lg:mt-24 h-[calc(100vh-200px)]">
      {/* Back home button */}
      <Link to="/" className="flex items-center text-[var(--clr-heading)] hover:text-[var(--clr-coffee)] mt-8 md:mt-10 lg:mt-12">
    <IoIosArrowRoundBack className="text-2xl mb-1 mr-1"/>
      <h5 className="font-bold">Back to Home</h5>
    </Link>
        <section className="flex justify-center items-center max-w-md mx-auto mt-4">
        <form className="bg-[var(--bg-primary)] p-10 rounded-md w-full" onSubmit={handleLoginUser}>
        <div
          className="text-center mx-auto space-y-4 mb-6">
          <h2 className="uppercase">Please Login</h2>
        </div>
        <div className="space-y-4">
            {/* email field */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Your email</span>
              </label>
              <label className="input-group">
                <input
                  type="email"
                  name="email"
                  className="input focus:outline-none input-bordered w-full"
                  required
                />
              </label>
            </div>

            {/* password field */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Your password</span>
              </label>
              <label className="input-group relative">
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  className="input focus:outline-none input-bordered w-full"
                  required
                />
                  <div className="absolute top-1/2 -translate-y-1/2 right-4 text-xl" onClick={() => setShowPass(!showPass)}>
                  {showPass? <IoMdEyeOff /> : <IoMdEye />}                
                </div>
              </label>
            </div>
         
            <div className="pt-8">
            <input type="submit" value="Login" className="button w-full" />
            </div>
        </div>

        <Link to="/register" className="text-center">
              <p className="my-4">
                Not registered yet?{" "}
                <span className="font-bold text-[var(--clr-heading)] hover:underline cursor-pointer duration-700 ml-1">
                  Register
                </span>
              </p>
        </Link>
        <div className="mt-8 border-2 border-[var(--clr-accent)] text-[var(--clr-heading)] py-2 px-4 rounded-md text-center flex justify-center gap-6 items-center hover:cursor-pointer hover:rounded-2xl" onClick={handleGoogleLogin}>
           
           <p className=" font-medium">Login with</p>
           <FcGoogle className="text-2xl" />
 </div>
      </form>
        </section>
        </div>
      </main>
  );
};

export default Login;