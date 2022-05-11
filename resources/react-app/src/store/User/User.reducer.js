/* eslint-disable import/no-anonymous-default-export */
const getInitialState = () => ({
    name: null,
    surname: null,
    username: null,
    id: null,
});

export default (state = getInitialState(), action) => {
    switch (action.type) {
        case "SET_USER": {
            const { user } = action;

            return user;
        }

        default:
            return state;
    }
};
