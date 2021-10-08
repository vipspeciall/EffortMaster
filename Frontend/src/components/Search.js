import React from 'react';
import { MdRefresh, MdSearch } from 'react-icons/md';

const Search = ({searchText,handleSearchDiary,chooseDate}) => {
    return (
        <div className="row">
            <div className="col-sm-4 mt-4 dateContainer">
                <input className="date mr-4" type="date" onChange={(event) => chooseDate(event.target.value)}></input>
                <MdRefresh style={{cursor: "pointer", backgroundColor: "white"}} className="refresh-icons" size='1.3em' onClick={(event) => {document.getElementsByClassName("date")[0].value = new Date(); chooseDate('');}}/>
            </div>
            <div className='col-sm-7 mt-4 ml-2 search'>
                <MdSearch className="search-icons" size='1.3em' />
                <input
                    onChange={(event) => 
                         handleSearchDiary(event.target.value)} 
                    type='text' 
                    value={searchText}
                    placeholder='Aramak için kelime girin...' />
            </div>
        </div> 
    );
};
export default Search;