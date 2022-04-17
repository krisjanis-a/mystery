/* eslint-disable import/no-anonymous-default-export */
const getInitialState = () => ({
    collections: null,
});

export default (state = getInitialState(), action) => {
    switch (action.type) {
        case "SET_COLLECTIONS":
            const { collections } = action;
            return {
                collections: collections,
            };

        case "REMOVE_COLLECTIONS":
            return getInitialState();

        default:
            return state;
    }
};
