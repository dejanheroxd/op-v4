import { Link } from "react-router-dom";
import luffy from "../../assets/luffy.png";

function Home() {
  return (
    <div>
      <div className="w-80 mt-16 mx-auto">
        <div className=" text-center ">
          <p className="font-bold text-2xl text-blue">One Piece Card Game</p>
          <p className="text-3xl py-2 font-bold text-red-500">
            Embarkooo on an Epic Adventure
          </p>
          <p className="text-xl pb-8 text-gray-700">
            Collect, Battle, and Conquer the Grand Line in the ultimate One
            Piece card game. Join the journey, assemble your crew, and become
            the Pirate King!
          </p>
          <Link to="/cards">
            <button className="bg-blue mb-6 text-white px-4 py-2 rounded-3xl hover:bg-blue-700 transition-colors duration-300">
              Get Started Now!
            </button>
          </Link>
        </div>
        <div className="">
          <img src={luffy} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
