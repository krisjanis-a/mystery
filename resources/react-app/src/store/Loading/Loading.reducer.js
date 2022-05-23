/* eslint-disable import/no-anonymous-default-export */
const getInitialState = () => ({
    loadingViewer: false,
    loadingNavigator: false,
});

export default (state = getInitialState(), action) => {
    switch (action.type) {
        case "SET_LOADING_NAVIGATOR_TRUE":
            return { ...state, loadingNavigator: true };

        case "SET_LOADING_NAVIGATOR_FALSE":
            return { ...state, loadingNavigator: false };
        case "SET_LOADING_VIEWER_TRUE":
            return { ...state, loadingViewer: true };
        case "SET_LOADING_VIEWER_FALSE":
            return { ...state, loadingViewer: false };
        default:
            return state;
    }
};
