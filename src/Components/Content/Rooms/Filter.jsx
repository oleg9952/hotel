import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { applyFilter, resetFilter } from '../../../store/actions/roomsActions'
import { toggleSearch } from '../../../store/actions/searchActions'

const Filter = ({
    toggleFilters, 
    // resetFilter, 
    getNumberOfFiltered
}) => {
    const dispatch = useDispatch()

    const [ collections, setCollections ] = useState(true)
    const handleCollections = () => setCollections(!collections)
    
    const [ currentFilter, setCurrentFilter ] = useState(null)
    const handleCurrentFilter = e => {
        const target = e.target.innerText
        setCurrentFilter(target)
        dispatch(applyFilter(target))
    }

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
                    <button className="filters_reset"
                        onClick={() => dispatch(resetFilter())}
                    >Reset</button>
                </div>
                <div className={`section ${collections ? 'active' : ''}`}>
                    <div className="section_header" onClick={handleCollections}>
                        <p className="section_title">Collections</p>
                        <div className={`accordion_arrow ${!collections ? 'active' : ''}`}></div>
                    </div>
                    <ul className="section_options">
                        <li className={`option_item ${ currentFilter === 'Single' ? 'selected' : '' }`}>
                            <span
                                onClick={handleCurrentFilter}
                            >Single</span> ({ getNumberOfFiltered('Single') })
                        </li>
                        <li className={`option_item ${ currentFilter === 'Double' ? 'selected' : '' }`}>
                            <span
                                onClick={handleCurrentFilter}
                            >Double</span> ({ getNumberOfFiltered('Double') })
                        </li>
                        <li className={`option_item ${ currentFilter === 'Triple' ? 'selected' : '' }`}>
                            <span
                                onClick={handleCurrentFilter}
                            >Triple</span> ({ getNumberOfFiltered('Triple') })
                        </li>
                        <li className={`option_item ${ currentFilter === 'Quad' ? 'selected' : '' }`}>
                            <span
                                onClick={handleCurrentFilter}
                            >Quad</span> ({ getNumberOfFiltered('Quad') })
                        </li>
                        <li className={`option_item ${ currentFilter === 'Queen' ? 'selected' : '' }`}>
                            <span
                                onClick={handleCurrentFilter}
                            >Queen</span> ({ getNumberOfFiltered('Queen') })
                        </li>
                        <li className={`option_item ${ currentFilter === 'King' ? 'selected' : '' }`}>
                            <span
                                onClick={handleCurrentFilter}
                            >King</span> ({ getNumberOfFiltered('King') })
                        </li>
                        <li className={`option_item ${ currentFilter === 'Twin' ? 'selected' : '' }`}>
                            <span
                                onClick={handleCurrentFilter}
                            >Twin</span> ({ getNumberOfFiltered('Twin') })
                        </li>
                        <li className={`option_item ${ currentFilter === 'Studio' ? 'selected' : '' }`}>
                            <span
                                onClick={handleCurrentFilter}
                            >Studio</span> ({ getNumberOfFiltered('Studio') })
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
    )
}

export default Filter
