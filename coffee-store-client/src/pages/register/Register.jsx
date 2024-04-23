import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { IoIosArrowRoundBack, IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const { createUser, logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegisterUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        // to send registered user data  at mongoDB database
        const createdAt = result.user.metadata.creationTime;
        const registeredUser = { email, creationTime: createdAt };

        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(registeredUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                text: "Registration Successful!",
                icon: "success",
                iconColor: "#D1B38D",
                color: "#331A15",
                confirmButtonText: "Cool",
                confirmButtonColor: "#D1B38D",
              });
              form.reset();
            }
          });
        //To prevent auto login after registration
        logOutUser()
          .then()
          .catch((error) => {
            console.log(error.code);
          });
        navigate("/login");
      })
      .catch((error) => {
        alert(error.code);
      });
  };
  return (
    <main className="max-w-7xl mx-auto px-4 md:px-10 lg:px-16">
      <div className="mt-10 md:mt-16 lg:mt-24 h-[calc(100vh-200px)]">
        {/* Back home button */}
        <Link
          to="/"
          className="flex items-center text-[var(--clr-heading)] hover:text-[var(--clr-coffee)] mt-8 md:mt-10 lg:mt-12"
        >
          <IoIosArrowRoundBack className="text-2xl mb-1 mr-1" />
          <h5 className="font-bold">Back to Home</h5>
        </Link>
        <section className="flex justify-center items-center max-w-md mx-auto mt-4">
          {/* form */}
          <form
            className="bg-[var(--bg-primary)] p-10 rounded-md w-full"
            onSubmit={handleRegisterUser}
          >
            <div className="text-center mx-auto space-y-4 mb-6">
              <h2 className="uppercase">Please Register</h2>
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
                  <div
                    className="absolute top-1/2 -translate-y-1/2 right-4 text-xl"
                    onClick={() => setShowPass(!showPass)}
                  >
                    {showPass ? <IoMdEyeOff /> : <IoMdEye />}
                  </div>
                </label>
              </div>

              <div className="pt-8">
                <input type="submit" value="Signup" className="button w-full" />
              </div>
            </div>

            <Link to="/login" className="text-center">
              <p className="my-4">
                Already have an account?{" "}
                <span className="font-bold text-[var(--clr-heading)] hover:underline cursor-pointer duration-700 ml-1">
                  Login
                </span>
              </p>
            </Link>
          </form>
        </section>
      </div>
    </main>
  );
};

export default Register;
