import { IoIosArrowRoundBack } from "react-icons/io";
import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

const Users = () => {
  const registeredUsers = useLoaderData();
  const [currentUsers, setCurrentUsers] = useState(registeredUsers);



  const handleDeleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#D1B38D",
      confirmButtonText: "DELETE !"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/${id}`, {
          method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
          if(data.deletedCount > 0){
            const remainingUsers = currentUsers.filter(user => user._id !== id);
            setCurrentUsers(remainingUsers)
            Swal.fire({
              title: "Your file has been deleted.",
              icon: "success"
            });
          }
        }) 
      }
    });
  }

  return (

      <main className="max-w-[1440px] px-4 md:px-8 lg:px-16 mx-auto min-h-screen">
        <section>
          {/* Back home button */}
          <Link
            to="/"
            className="flex items-center text-[var(--clr-heading)] hover:text-[var(--clr-coffee)] mt-8 md:mt-10 lg:mt-12"
          >
            <IoIosArrowRoundBack className="text-2xl mb-1 mr-1" />
            <h5 className="font-bold">Back to Home</h5>
          </Link>

          <div className="border-2 border-[var(--clr-accent)] mt-8 md:mt-10 lg:mt-12 p-10 rounded">
            <h3 className="mb-4 border-b-2 border-[var(--clr-accent)] w-fit mx-auto pb-2">
              List of Registered users : {currentUsers.length}
            </h3>

            <div className="overflow-x-auto">
              <table className="table table-zebra">
                {/* head */}
                <thead>
                  <tr className="uppercase">
                    <th></th>
                    <th>Email</th>
                    <th>Created AT</th>
                    <th>Last Login</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {currentUsers.map((user, idx) => (
                    <tr key={user._id}>
                      <th>{idx + 1}</th>
                      <td>{user.email}</td>
                      <td>{user.creationTime}</td>
                      <td>{user.lastLoginTime}</td>
                      <td className="text-center"><button className="bg-red-500  px-2 text-white hover:scale-75 duration-500" onClick={() => handleDeleteUser(user._id)}>X</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>

  );
};

export default Users;
