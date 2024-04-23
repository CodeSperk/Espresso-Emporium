import { IoIosArrowRoundBack } from "react-icons/io";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const updatableCoffee = useLoaderData();
  const {_id, name, chef, quantity, price, supplier, taste, category, details, photo} = updatableCoffee;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const chef = form.chef.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
      price,
      quantity,
    };

    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers:{
        "content-type": "application/json"
      },
      body:JSON.stringify(updatedCoffee)
    }).then(res => res.json()).then(data => {
      if (data.modifiedCount > 0) {
        Swal.fire({
          title: "Success!",
          text: "Coffee Updated Successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
      }
    })
  }


  return (
    <main className="max-w-[1440px] px-4 md:px-8 lg:px-16 mx-auto">
        <section>
          {/* Back home button */}
          <Link
            to="/"
            className="flex items-center text-[var(--clr-heading)] hover:text-[var(--clr-coffee)] mt-8 md:mt-10 lg:mt-12"
          >
            <IoIosArrowRoundBack className="text-2xl mb-1 mr-1" />
            <h5 className="font-bold">Back to Home</h5>
          </Link>

          <form
            className="bg-[var(--bg-primary)] mt-8 md:mt-10 lg:mt-12 p-10 rounded"
            onSubmit={handleUpdateCoffee}
          >
            <div className="text-center md:w-4/5 mx-auto space-y-4 mb-6">
              <h2>Update Existing Coffee Details</h2>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content
                here.
              </p>
            </div>
            <div>
              {/* form name and chef row */}
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="name"
                      defaultValue={name}
                      className="input input-bordered w-full focus:outline-none"
                    />
                  </label>
                </div>
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Chef</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="chef"
                      defaultValue={chef}
                      className="input focus:outline-none input-bordered w-full"
                    />
                  </label>
                </div>
              </div>

              {/* form quantity and price row */}
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="number"
                      name="price"
                      defaultValue={price}
                      className="input input-bordered w-full focus:outline-none"
                    />
                  </label>
                </div>
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Quantity</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="number"
                      name="quantity"
                      defaultValue={quantity}
                      className="input focus:outline-none input-bordered w-full"
                    />
                  </label>
                </div>
              </div>

              {/* form supplier row */}
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Supplier</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="supplier"
                      defaultValue={supplier}
                      className="input focus:outline-none input-bordered w-full"
                    />
                  </label>
                </div>
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Taste</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="taste"
                      defaultValue={taste}
                      className="input focus:outline-none input-bordered w-full"
                    />
                  </label>
                </div>
              </div>

              {/* form category and details row */}
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Category</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="category"
                      defaultValue={category}
                      className="input focus:outline-none input-bordered w-full"
                    />
                  </label>
                </div>
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Details</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="details"
                      defaultValue={details}
                      className="input focus:outline-none input-bordered w-full"
                    />
                  </label>
                </div>
              </div>

              {/* form Photo url row */}
              <div className="mb-8">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="photo"
                      defaultValue={photo}
                      className="input focus:outline-none input-bordered w-full"
                    />
                  </label>
                </div>
              </div>
              <input
                type="submit"
                value="Update Coffee"
                className="button w-full"
              />
            </div>
          </form>
        </section>
      </main>
  );
};

export default UpdateCoffee;