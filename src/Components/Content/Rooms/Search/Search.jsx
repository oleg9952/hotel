import React from 'react'
import ResultItem from './ResultItem'
import { useSelector, useDispatch } from 'react-redux'
import { applySearch, toggleSearch } from '../../../../store/actions/searchActions'
import './Search.css'

const Search = () => {
    const dispatch = useDispatch()
    const { rooms, search } = useSelector(state => state.searchReducers)

    return (
        <div className={`search ${search ? 'active' : ''}`}>
            <form className={`search_header ${search ? 'active' : ''}`}>
                <div className="wrapper">
                    <div className="search_icon">
                        <i className="fas fa-search"></i>
                    </div>
                    <input 
                        type="search" 
                        name="search" 
                        className="search_input" 
                        placeholder="Search..."
                    />
                    <div className="search_colse">
                        <i 
                            className="far fa-times-circle" 
                            onClick={() => dispatch(toggleSearch())}
                        ></i>
                    </div>
                </div>
            </form>
            <div className="search_results">
                <ResultItem />
                <ResultItem />
                <ResultItem />
                <ResultItem />
                <ResultItem />
            </div>
        </div>
    )
}

export default Search
