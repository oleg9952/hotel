import React, { useRef } from 'react'
import ResultItem from './ResultItem'
import { useSelector, useDispatch } from 'react-redux'
import { applySearch, toggleSearch } from '../../../../store/actions/searchActions'
import './Search.css'

const Search = () => {
    const dispatch = useDispatch()
    const { search, searchResults } = useSelector(state => state.searchReducers)
    let searchInput = useRef(null)

    const handleSearch = e => {
        e.preventDefault()
        dispatch(applySearch(searchInput.current.value))
    }

    const handleSearchClose = () => {
        dispatch(toggleSearch())
        searchInput.current.value = null
    }

    return (
        <div className={`search ${search ? 'active' : ''}`}>
            <form className={`search_header ${search ? 'active' : ''}`} onSubmit={handleSearch}>
                <div className="wrapper">
                    <div className="search_icon">
                        <i className="fas fa-search"></i>
                    </div>
                    <input 
                        type="search" 
                        name="search" 
                        className="search_input" 
                        placeholder="Search..."
                        ref={searchInput}
                        onChange={handleSearch}
                    />
                    <div className="search_colse">
                        <i 
                            className="far fa-times-circle" 
                            onClick={handleSearchClose}
                        ></i>
                    </div>
                </div>
            </form>
            <div className="search_results">
                {
                    searchResults !== null ?
                    searchResults.map(item => (
                        <ResultItem 
                            key={item.id}
                            item={item}
                            handleSearchClose={handleSearchClose}
                        />
                    )) : ''
                }
            </div>
        </div>
    )
}

export default Search
