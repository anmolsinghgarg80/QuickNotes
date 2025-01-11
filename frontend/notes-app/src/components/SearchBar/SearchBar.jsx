import React from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { IoMdClose } from "react-icons/io";

const SearchBar = ({value, onChange, handleSearch, onClearSearch}) => {
  return (
    <div className='flex w-1/3 items-center px-4 bg-slate-100 rounded-3xl'>
      <input
        type="text"
        placeholder="Search Notes"
        className='w-full text-sm bg-transparent py-[11px] outline-none '
        value={value}
        onChange={onChange}
      />
      {value && (
        <IoMdClose 
          className='text-2xl text-slate-500
          cursor-pointer mr-2 hover:text-black'
          onClick={onClearSearch} 
          />
        )
      }
      <FaMagnifyingGlass className='text-slate-400 cursor-pointer hover:text-black' onClick={handleSearch} />
    </div>
  );
};

export default SearchBar;