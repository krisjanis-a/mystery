/* eslint-disable import/no-anonymous-default-export */
const getInitialState = () => ({
    showCreator: false,
});

export default (state = getInitialState(), action) => {
    switch (action.type) {
        case "SHOW_CREATOR":
            return {
                ...state,
                showCreator: true,
            };

        case "HIDE_CREATOR":
            return {
                ...state,
                showCreator: false,
            };

        default:
            return state;
    }
};
