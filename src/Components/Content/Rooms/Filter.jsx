import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleSearch } from '../../../store/actions/searchActions'

const Filter = ({
    toggleFilters, 
    handleFiltering, 
    resetFilter, 
    getNumberOfFiltered, 
    currentFilter
}) => {
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
                    <button className="filters_reset"
                        onClick={resetFilter}
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
                                onClick={handleFiltering}
                            >Single</span> ({ getNumberOfFiltered('Single') })
                        </li>
                        <li className={`option_item ${ currentFilter === 'Double' ? 'selected' : '' }`}>
                            <span
                                onClick={handleFiltering}
                            >Double</span> ({ getNumberOfFiltered('Double') })
                        </li>
                        <li className={`option_item ${ currentFilter === 'Triple' ? 'selected' : '' }`}>
                            <span
                                onClick={handleFiltering}
                            >Triple</span> ({ getNumberOfFiltered('Triple') })
                        </li>
                        <li className={`option_item ${ currentFilter === 'Quad' ? 'selected' : '' }`}>
                            <span
                                onClick={handleFiltering}
                            >Quad</span> ({ getNumberOfFiltered('Quad') })
                        </li>
                        <li className={`option_item ${ currentFilter === 'Queen' ? 'selected' : '' }`}>
                            <span
                                onClick={handleFiltering}
                            >Queen</span> ({ getNumberOfFiltered('Queen') })
                        </li>
                        <li className={`option_item ${ currentFilter === 'King' ? 'selected' : '' }`}>
                            <span
                                onClick={handleFiltering}
                            >King</span> ({ getNumberOfFiltered('King') })
                        </li>
                        <li className={`option_item ${ currentFilter === 'Twin' ? 'selected' : '' }`}>
                            <span
                                onClick={handleFiltering}
                            >Twin</span> ({ getNumberOfFiltered('Twin') })
                        </li>
                        <li className={`option_item ${ currentFilter === 'Studio' ? 'selected' : '' }`}>
                            <span
                                onClick={handleFiltering}
                            >Studio</span> ({ getNumberOfFiltered('Studio') })
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
    )
}

export default Filter
