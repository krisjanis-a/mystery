/* eslint-disable import/no-anonymous-default-export */
const getInitialState = () => ({
    filters: [],
});

export default (state = getInitialState(), action) => {
    switch (action.type) {
        case "SET_FILTER": {
            const { filter } = action;
            const { filters } = state;
            const updatedFilters = filters.map((filter) => filter).push(filter);
            return {
                ...state,
                filters: updatedFilters,
            };
        }

        case "REMOVE_FILTER": {
            const { filter } = action;
            return {
                ...state,
            };
        }

        default:
            return state;
    }
};
