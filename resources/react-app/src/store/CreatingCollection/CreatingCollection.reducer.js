/* eslint-disable import/no-anonymous-default-export */
const getInitialState = () => false;

export default (state = getInitialState(), action) => {
    switch (action.type) {
        case "SET_CREATING_COLLECTION":
            const { status } = action;
            return status;

        default:
            return state;
    }
};
