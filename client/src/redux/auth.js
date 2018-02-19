import axios from "axios";

const userAxios = axios.create();
userAxios
    .interceptors
    .request
    .use((config) => {
        const token = localStorage.getItem("token");
        config.headers.Authorization = `Bearer ${token}`;
        return config
    });

export function verifyUser() {
    return (dispatch) => {
        userAxios.get("/api/profile")
            .then((response) => {
                let { success, user } = response.data
                dispatch(authenticate(user, success));
            })
            .catch((err) => {
                console.error(err)
            })
    }
}

export function signup(userInfo) {
    return dispatch => {
        axios.post("/auth/signup", userInfo)
            .then(response => {
                const {token, user} = response.data;
                // add token to local storage
                localStorage.token = token;
                localStorage.user = JSON.stringify(user);
                dispatch(authenticate(user));
            })
            .catch(err => {
                console.error(err);
                // dispatch(signupError("signup", err.response.status));
            });
    }
}

export function login(credentials) {
    return dispatch => {
        axios.post("/auth/login", credentials)
            .then(response => {
                const {token, user} = response.data;
                localStorage.token = token;
                localStorage.user = JSON.stringify(user);
                dispatch(authenticate(user));
            })
            .catch((err) => {
                console.error(err);
                // dispatch(signupError("login", err.response.status));
            });
    }
}

// Action creators
function authenticate(user) {
    return {
        type: "AUTHENTICATE",
        user
    }
}

export function logout() {
    delete localStorage.token;
    delete localStorage.user;
    return {
        // Need to handle this in reducer
        type: "LOGOUT"
    }
}

// AUth reducer and state of auth reducer
const initialState = {
    username: "",
    isAdmin: false,
    isAuthenticated: false
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "AUTHENTICATE":
            return {
                ...state,
                ...action.user,
                isAuthenticated: true
            }
        case "LOGOUT":
            return initialState;
        default:
            return state;
    }
}
