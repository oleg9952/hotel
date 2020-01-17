import { firestore } from '../../fb_config'

export const fetchFavorites = uid => dispatch => {
    firestore.collection('favorites').doc(`${uid}`)
        .get()
        .then(resp => {
            if(resp.data() !== undefined) {
                dispatch({
                    type: 'FETCH_FAVORITES',
                    payload: resp.data().ids
                })
            }
        })
        .catch(error => {
            dispatch({
                type: 'FETCH_FAVORITES',
                payload: null
            })
            console.error(error)
        })
}

export const updateFavorites = (data, uid) => () => {
    firestore.collection('favorites').doc(`${uid}`)
        .set(data)
        .catch(error => console.error(error))
}