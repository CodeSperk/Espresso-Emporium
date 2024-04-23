import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const AddCoffee = () => {

  const handleAddCoffee = (e) => {
    
  } 
  return (
    <div>
    <main className="max-w-[1440px] px-4 md:px-8 lg:px-16 mx-auto">
      <section>

        {/* Back home button */}
      <Link to="/" className="flex items-center text-[var(--clr-heading)] hover:text-[var(--clr-coffee)] mt-8 md:mt-10 lg:mt-12">
    <IoIosArrowRoundBack className="text-2xl mb-1 mr-1"/>
      <h5 className="font-bold">Back to Home</h5>
    </Link>


    <form className="bg-[var(--bg-primary)] mt-8 md:mt-10 lg:mt-12 p-10 rounded" onSubmit={handleAddCoffee}>
      <div
        className="text-center md:w-4/5 mx-auto space-y-4 mb-6">
        <h2>Add New Coffee</h2>
        <p>
          Provide detailed information on coffee offerings: origins, roast
          levels, and flavor profiles. Ensure accuracy and clarity to inform
          customers choices effectively.
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
                placeholder="Enter coffee name"
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
                placeholder="Enter chef name"
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
                placeholder="Enter price"
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
                placeholder="Enter quantity"
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
                placeholder="Enter Supplier Name"
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
                placeholder="Enter coffee taste"
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
                placeholder="Enter coffee category"
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
                placeholder="Enter coffee details"
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
                placeholder="Enter photo URL"
                className="input focus:outline-none input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input type="submit" value="Add Coffee" className="button w-full" />
      </div>
    </form>
      </section>
    </main>
  </div>
  );
};

export default AddCoffee;