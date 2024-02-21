import MessgaseContainer from "../assets/component/messgaes/MessgaseContainer";
import Sidebar from "../assets/component/Sidebar";
const Homepage = () => {
  return (
    <>
      <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blue-lg bg-opacity-0">
        <Sidebar />
        <MessgaseContainer />
      </div>
    </>
  );
};

export default Homepage;
