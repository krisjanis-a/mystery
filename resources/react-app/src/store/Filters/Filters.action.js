export const SET_FILTER = "SET_FILTER";
export const REMOVE_FILTER = "REMOVE_FILTER";

export const setFilter = (filter) => ({
    type: SET_FILTER,
    filter,
});

export const removeFilter = (filter) => ({
    type: REMOVE_FILTER,
    filter,
});
