import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleSearch } from '../../../store/actions/searchActions'

const Filter = ({toggleFilters}) => {
    const dispatch = useDispatch()
    const [ collections, setCollections ] = useState(true)
    
    const handleCollections = () => setCollections(!collections)
    
    return (
        <div className={`filters_bg ${toggleFilters ? 'active' : ''}`}>
            <div className={`filters_holder ${toggleFilters ? 'active' : ''}`}>
                <div className="rooms_search" onClick={() => dispatch(toggleSearch())}>
                    <div className="search_column">Search...</div>
                    <div className="search_column">
                        <i className="fas fa-search"></i>
                    </div>
                </div>
                <div className="filters_header">
                    <p className="filters_title">Filters</p>
                    <button className="filters_reset">Reset</button>
                </div>
                <div className={`section ${collections ? 'active' : ''}`}>
                    <div className="section_header" onClick={handleCollections}>
                        <p className="section_title">Collections</p>
                        <div className={`accordion_arrow ${!collections ? 'active' : ''}`}></div>
                    </div>
                    <ul className="section_options">
                        <li className="option_item">VIP (16)</li>
                        <li className="option_item">Economy (34)</li>
                        <li className="option_item">Standard (24)</li>
                        <li className="option_item">Bussines (33)</li>
                        <li className="option_item">Avaliable (15)</li>
                    </ul>
                </div>
            </div>
        </div>
        
    )
}

export default Filter
