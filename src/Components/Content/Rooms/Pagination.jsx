import React from 'react'
import { useDispatch } from 'react-redux'
import { switchPage, switchNextPage, switchPrevPage } from '../../../store/actions/roomsActions'

const Pagination = ({ currentPage, roomsPerPage, totalOfRooms }) => {
    const dispatch = useDispatch()

    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalOfRooms / roomsPerPage); i++) {
        pageNumbers.push(i)
    }

    const pageAmount = pageNumbers[pageNumbers.length - 1]

    const style = {
        fontWeight: 'bold',
        color: 'orange'
    }    

    const paginate = page => dispatch(switchPage(page))

    return (
        <div className="pagination">
            <div className="pagination_column pagin_btn"
                onClick={() => dispatch(switchPrevPage())}
            >
                <i className="fas fa-arrow-circle-left"></i>
            </div>
            <div className="pagination_column pagin_numbers">
                {
                    pageNumbers.length !== 0 ?
                    pageNumbers.map(page => (
                        <p
                            key={page}
                            style={currentPage === page ? style : null}
                            onClick={() => paginate(page)}
                        >{page}</p>
                    )) : ''
                }
            </div>
            <div className="pagination_column pagin_btn"
                onClick={() => dispatch(switchNextPage(pageAmount))}
            >
                <i className="fas fa-arrow-circle-right"></i>
            </div>
        </div>
    )
}

export default Pagination
