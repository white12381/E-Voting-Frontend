import { useState } from "react"
import Search from "../../../assets/images/MagnifyingGlass.svg";
const SearchForm = () => {
    const [search, setSearch] = useState('');
    return <form

        className="mx-auto  gap-4 lg:gap-14 items-center w-full  md:w-2/3 lg:w-1/2 flex space-x-1 mt-6"
    >
        <div className="col-span-3 w-full flex items-center p-3 justify-between space-x-4 rounded-md border-[#6E9170] border-[1.15px]">
            <img src={Search} alt="search" className="inline" />
            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                name="search"
                type="search"
                className="outline-none w-full  font-normal text-base font-nunito text-[#3D3838]"
                placeholder="Enter Voting Id"
            />
        </div>


        <div className="flex justify-start">
            <button
                type="submit"
                className="p-3 font-bold  text-white  rounded bg-primary
                  hover:bg-primary text-sm font-nunito text-center mx-auto md:col-span-3"
            >
                Search
            </button>{" "}
        </div>
    </form>
}
export default SearchForm