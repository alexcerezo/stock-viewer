import React, { useState } from 'react';
import SearchResults from './SearchResults';
import { mockSearchResults } from '../constants/mock';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Search = () => {
    const [input, setInput] = useState('');
    const [bestMatches, setBestMatches] = useState(mockSearchResults.result);

    const updateBestMatches = () => {
        setBestMatches(mockSearchResults.result);
    }

    const clear = () => {
        setInput('');
        setBestMatches([]);
    }

    return (
        <div className='flex items-center my-4 border-2 rounded-md relative z-50 w-96 bg-white border-neutral-200'>
            <input type="text"
                value={input}
                placeholder="Search stocks..."
                className="w-full px-4 py-2 focus:outline-none rounded-md"
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        updateBestMatches();
                    }
                }}
            />
            {input && (
                <button onClick={clear} className='p-2'>
                    <XMarkIcon className="h-4 w-4 fill-gray-500" />
                </button>
            )}
            
            <button onClick={updateBestMatches} className='h-8 w-8 bg-indigo-600 rounded-md flex justify-center items-center m-1 p-2 text-white'>
                <MagnifyingGlassIcon className='h-4 w-4 fill-gray-100'/>
            </button>
            
            {input && bestMatches.length > 0 ? <SearchResults results={bestMatches} /> : null}
        </div>
    );
};

export default Search;