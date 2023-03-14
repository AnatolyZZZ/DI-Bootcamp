export const logAction = (store) => (next) => (action) => {
    console.log('caught in middleware before =>', JSON.stringify(store.getState()) );
    console.log('caught in middleware action =>',JSON.stringify(action))
    next(action)
    console.log('caught in middleware after =>', JSON.stringify(store.getState()) );
}