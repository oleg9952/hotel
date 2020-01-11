export const fireNotification = event => {
    return {
        type: 'FIRE_NOTIFICATION',
        payload: event
    }
}