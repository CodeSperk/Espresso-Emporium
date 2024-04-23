import { FaRegEye } from "react-icons/fa";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const CoffeeCard = ({ singleCoffee, coffeeAfterDelete }) => {
  const { _id, name, chef, price, photo } = singleCoffee;

  const handleDeleteCoffee = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#D1B38D",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              coffeeAfterDelete(_id);
              Swal.fire({
                icon: "success",
                title: "Deleted Successful",
                timer: 1500,
              });
            }
          });
      }
    });
  };

  return (
    <div className="bg-[var(--bg-primary)] p-8 flex items-center gap-4 justify-between">
      <div className="w-36">
        <img src={photo} alt={name} className="w-full" />
      </div>
      <div className="space-y-2 text-start flex-grow">
        <p>
          <span className="font-bold">Name : </span> {name}
        </p>
        <p>
          <span className="font-bold">Chef : </span> {chef}
        </p>
        <p>
          <span className="font-bold">Price : </span> {price} Taka
        </p>
      </div>

      <div className="text-white text-3xl flex flex-col gap-2 text-center">
        <FaRegEye className="bg-[var(--clr-accent)] p-1 hover:scale-110 duration-500 rounded-sm" />
        <Link to={`/updateCoffee/${_id}`}>
          <MdModeEditOutline
            className="bg-black p-1 hover:scale-110 duration-500 rounded-sm"
            title="update"
          />
        </Link>

        <MdDelete
          className="bg-red-500 p-1 hover:scale-110 duration-500 rounded-sm"
          title="Delete"
          onClick={() => handleDeleteCoffee(_id)}
        />
      </div>
    </div>
  );
};

export default CoffeeCard;
