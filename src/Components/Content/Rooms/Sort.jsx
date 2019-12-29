import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sortPriceUp, sortPriceDown } from '../../../store/actions/roomsActions'

const Sort = () => {
    const dispatch = useDispatch()
    const { sortAscending, sortDescending } = useSelector(state => state.roomsReducers)
    const [ relevance, setRelevance ] = useState(false)

    const handleRelevance = () => setRelevance(!relevance)

    return (
        <div className="rooms_sort">
            <div className="sort_price">
                <p className="price_title">Price</p>
                <p className="price_options">
                    <span className={`sort_option ${sortAscending ? 'active' : ''}`}
                        onClick={() => dispatch(sortPriceUp())}
                    >Low to High</span>
                    <span className="price_divider">|</span>
                    <span className={`sort_option ${sortDescending ? 'active' : ''}`}
                        onClick={() => dispatch(sortPriceDown())}
                    >High to Low</span>
                </p>
            </div>
            <div className="sort_relevance">
                <p className="more_title">Sort by</p>
                <div className="relevance_options">
                    <p onClick={handleRelevance}>Relevance</p>
                    <span className={`relevance_arrow ${relevance ? 'active' : ''}`}></span>
                    <div className={`options_block ${relevance ? 'active' : ''}`}>
                        <ul className="block_items">
                            <li className="item" onClick={handleRelevance}>Reviews</li>
                            <li className="item" onClick={handleRelevance}>Rating</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sort
