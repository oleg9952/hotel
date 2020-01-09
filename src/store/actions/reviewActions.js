import Firebase from '../../fb_config'

const db = Firebase.firestore()

export const fetchReviews = () => dispatch => {
    db.collection('reviews')
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

            dispatch({
                type: 'FETCH_REVIEWS',
                payload: reviews
            })
        })
        .catch(error => console.error(error))
}

export const addReview = review => () => {
    db.collection('reviews')
        .add(review)
        .catch(error => console.error(error))
}