export const SET_LOADING_NAVIGATOR_TRUE = "SET_LOADING_NAVIGATOR_TRUE";
export const SET_LOADING_NAVIGATOR_FALSE = "SET_LOADING_NAVIGATOR_FALSE";
export const SET_LOADING_VIEWER_TRUE = "SET_LOADING_VIEWER_TRUE";
export const SET_LOADING_VIEWER_FALSE = "SET_LOADING_VIEWER_FALSE";

export const setLoadingNavigatorTrue = () => ({
    type: SET_LOADING_NAVIGATOR_TRUE,
});

export const setLoadingNavigatorFalse = () => ({
    type: SET_LOADING_NAVIGATOR_FALSE,
});

export const setLoadingViewerTrue = () => ({
    type: SET_LOADING_VIEWER_TRUE,
});
export const setLoadingViewerFalse = () => ({
    type: SET_LOADING_VIEWER_FALSE,
});
