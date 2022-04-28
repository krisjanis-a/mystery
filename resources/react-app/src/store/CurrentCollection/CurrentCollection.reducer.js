/* eslint-disable import/no-anonymous-default-export */
const getInitialState = () => ({
    currentCollectionId: null,
    currentCollection: {},
});

export default (state = getInitialState(), action) => {
    switch (action.type) {
        case "SET_CURRENT_COLLECTION_ID":
            const { collectionId } = action;
            return {
                ...state,
                currentCollectionId: collectionId,
            };

        case "SET_CURRENT_COLLECTION":
            const { collection } = action;
            return {
                ...state,
                currentCollection: collection,
            };

        default:
            return state;
    }
};
