import React from "react";
import homepageImage from "../images/homepage.jpg";
import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";

const Homepage = () => {
  return (
    <div>
      <div className="flex h-full p-10 items-center justify-center">
        <div className="grid md:grid-cols-2 justify-center items-center h-full">
          <Zoom>
            <div className="py-4 px-5 md:px-20 items-center">
              <h1 className="text-5xl font-semibold text-left">
                How much do you know about Sahara?
              </h1>
              <p className="py-10 text-left text-xs text-gray-400">
                If you put the federal government in charge of the Sahara
                Desert, in 5 years there'd be a shortage of sand.
              </p>

              <div className="flex justify-start">
                <Link to="/quiz">
                  <button
                    className="px-4 py-3 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:ring-2 
              focus:ring-offset-2 focus:ring-indigo-300 transform duration-300"
                  >
                    Take a quiz
                  </button>
                </Link>
              </div>
            </div>
          </Zoom>
          <Zoom>
            <div className="py-4 flex h-full justify-center items-center">
              <img
                className="rounded-2xl shadow-2xl shadow-indigo-500/50"
                src={homepageImage}
                alt=""
              />
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
