import Conversations from "../Conversations";
import Logout   from "./Logout";
import Search from "./Search";
const Sidebar = () => {
  
  return (
    <div className=" h-full border-r border-text-500 p-4 flex flex-col">
     

      <Search />

      <div className='divider px-3'>

      </div>

      <Conversations />
      <Logout />  
      </div>
   
    
  );
};

export default Sidebar;
