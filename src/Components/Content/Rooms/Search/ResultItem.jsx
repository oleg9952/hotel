import React from 'react'
import { Link } from 'react-router-dom'

const ResultItem = (props) => {
    const { id, name, price, imgBaseUrl, img, animDelay } = props.item
    const handleSearchClose = props.handleSearchClose

    return (
        <div className="result_item"
            style={{ animationDelay: `${animDelay}ms` }}
        >
            <div 
                className="result_item-img"
                style={{ backgroundImage: `url(${imgBaseUrl + id}/${img[0]})` }}
            />
            <div className="result_item-body">
                <div className="body_main">
                    <p className="result_name">
                        <Link to={`/rooms/${id}`} onClick={handleSearchClose}>
                            { name }
                        </Link>
                    </p>
                    <div className="card_rating">
                        <span>
                            <i className="fas fa-star"></i>
                        </span>
                        <span>
                            <i className="fas fa-star"></i>
                        </span>
                        <span>
                            <i className="fas fa-star"></i>
                        </span>
                        <span>
                            <i className="fas fa-star"></i>
                        </span>
                        <span>
                            <i className="far fa-star"></i>
                        </span>
                    </div>
                    <p className="result_details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsa ipsam ad dicta doloribus perferendis totam commodi, quas eos placeat saepe atque aliquam, architecto nostrum cupiditate error vero. Dolorem atque fugit expedita. . . <span className="more">more</span></p>
                </div>
                <div className="body_price">
                    <p>${ price }</p>
                </div>
            </div>
        </div>
    )
}

export default ResultItem
