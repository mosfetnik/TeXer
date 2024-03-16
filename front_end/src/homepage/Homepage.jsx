import MessgaseContainer from "../assets/component/messgaes/MessgaseContainer";
import Sidebar from "../assets/component/Sidebar";
import Navbar from "../assets/component/Navbar";
import Footer from "../assets/component/Footer";
const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className="hompageContainer">
      <div className="p-4 h-screen flex items-center justify-center">
        <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-slate-900 bg-clip-padding backdrop-filter backdrop-blue-lg ">
          <Sidebar />
          <MessgaseContainer />
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
