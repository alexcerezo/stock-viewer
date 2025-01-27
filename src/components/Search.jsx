import React, { useState } from 'react';

const Search = () => {
    const [input, setInput] = useState('');
    const [bestMatches, setBestMatches] = useState([]);

    const updateBestMatches = () => {
        setBestMatches(mockSearchResults.result);
    }

    return (
        <div className='flex item-center my-4 border-2 rounded-md relative z-50 w-96 bg-white border-neutral-200'>
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
        </div>
    );
};

export default Search;