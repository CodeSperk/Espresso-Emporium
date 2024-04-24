import { Link, useLoaderData } from "react-router-dom";
import SecHeader from "../../components/secHeader/SecHeater";
import { BsCup } from "react-icons/bs";
import CoffeeCard from "./CoffeeCard";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Home = () => {
  const initialCoffeeData = useLoaderData();
  const [newCoffeeData, setNewCoffeeData] = useState(initialCoffeeData);
  const {user} = useContext(AuthContext);


  const coffeeAfterDelete = (id) => {
    const coffeeData = initialCoffeeData.filter(coffee => coffee._id !== id);
    setNewCoffeeData(coffeeData);
  }

  return (
    <main>
        
        <section className="max-w-7xl mx-auto px-4 md:px-10 lg:px-16 mt-10 md:mt-16 lg:mt-24 text-center">
          <SecHeader
            subTitle="Sip & Savor"
            title="Our Popular Products"
          ></SecHeader>
          <Link to="addCoffee">
              <button className="bg-[var(--clr-accent)] text-[var(--clr-heading)] rounded hover:rounded-xl hover:scale-90 duration-500 flex items-center gap-2 py-2 px-3 border-2 border-[var(--clr-heading)] w-fit mx-auto mt-4">
                <h6 className="text-white text-lg">Add Coffee</h6><BsCup className="text-2xl"/>
              </button>
          </Link>

          <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center">
            {
            newCoffeeData.map((singleCoffee) => 
              <CoffeeCard
                singleCoffee={singleCoffee}
                key={singleCoffee._id}
                coffeeAfterDelete={coffeeAfterDelete}
                user={user}
              >
               
              </CoffeeCard>
            )}
          </div>
        </section>
      </main>
  );
};

export default Home;