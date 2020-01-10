import { firestore } from '../../fb_config'


export const fetchReviews = () => dispatch => {
    firestore.collection('reviews')
        .get()
        .then(resp => {
            let reviews = []
            resp.docs.forEach(doc => {
                let review = {
                    id: doc.data().id,
                    date: doc.data().date,
                    name: doc.data().name,
                    message: doc.data().message,
                    registered: doc.data().registered
                }
                reviews.push(review)
            })

            let sorted = reviews.sort(compare)

            dispatch({
                type: 'FETCH_REVIEWS',
                payload: sorted
            })
        })
        .catch(error => console.error(error))
}

export const addReview = review => () => {
    firestore.collection('reviews')
        .add(review)
        .catch(error => console.error(error))
}

function compare(a, b) {
    const orderA = a.date
    const orderB = b.date

    if(orderA > orderB) {
        return -1
    } else if(orderA < orderB) {
        return 1
    } else {
        return 0
    }
}