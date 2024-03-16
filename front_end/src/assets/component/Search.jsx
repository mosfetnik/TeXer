import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversation from "../../hooks/useGetConversation";
import toast from "react-hot-toast";

const Search = () => {
  const [searchBar, setSearchBar] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversation();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!searchBar) return;

    if (searchBar.length < 3) {
      return toast.error("Search term must be atleast 3 character");
    }
    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(searchBar.toLowerCase())
    );

   
    if (conversation) {
      setSelectedConversation(conversation);
      setSearchBar("");
    } else {
      toast.error("No such user found");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className=" flex item-center gap-2">
        <input
          type="text"
          placeholder="Search.."
          className="input input-bordered rounded-full"
          value={searchBar}
          onChange={(e) => setSearchBar(e.target.value)}
        />

        <button type="sumbit" className="btn btn-circle bg-sky-500 text-white">
          <IoSearch className="w-6 h-6 outline-none" />
        </button>
      </form>
    </>
  );
};

export default Search;
