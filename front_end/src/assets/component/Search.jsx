import { IoSearch } from "react-icons/io5";

function Search() {
    return (
        <>
            <from className=" flex item-center gap-2">
                <input
                    type="text"
                    placeholder="Search.."
                    className="input input-bordered rounded-full" />

                <button type="sumbit" className="btn btn-circle bg-sky-500 text-white">
                <IoSearch className='w-6 h-6 outline-none'/>
                </button>
            </from>
        </>
    );
}

export default Search;
