import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="w-full bg-gray-900 text-yellow-50 py-[5%]">
      <div className="max-w-screen mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h3 className="py-6 text-2xl sm:text-5xl font-serif font-semibold text-center text-white">
            About Us
          </h3>
          <p className="py-4 px-4 sm:text-left text-center">
            Hazina Storage will provide a convenient, safe, and secure self
            storage solution for anyone in Nairobi or Mombasa area who needs to store their
            belongings. We will ensure that every storage need of the customer
            is being met. Hazina Self Storage will be the ultimate choice in
            these cities for self storage solutions while being the best-priced
            company in the area.
          </p>
          <br></br>
          <p className="py-4 pr-6">
            The following are the self storage solutions that Hazina Storage
            will provide:
          </p>
          <ul className="py-4 pr-8 max-w-md">
            <li>✔️ Small Storage Units (5 × 5)</li>
            <li>✔️ Medium Storage Units (10 × 10)</li>
            <li>✔️ Large Storage Units (10 × 25)</li>
            <li>✔️ Pickup & Delivery Services</li>
          </ul>

          <div>
            <Link
              to="/storages"
              smooth
              duration={500}
              className="group text-yellow-50 w-fit px-8 py-3 mt-2 mb-8 flex items-center rounded-md bg-gradient-to-r from-blue-500 to-sky-800 cursor-pointer"
            >
              Storage Options
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            className=" float-right h-[550px] mx-auto w-[2000px] rounded-md mb-12"
            src="https://images.unsplash.com/photo-1529148482759-b35b25c5f217?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0b3JhZ2UlMjB1bml0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="metal warehouse"
          />
        </div>
      </div>
    </div>
  );
};

export default About;