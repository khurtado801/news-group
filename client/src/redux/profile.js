import axios from "axios";
let profileAxios = axios.create();
profileAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

const profileReducer = (prevProfile = { loading: true, data: [] }, action) => {
    switch (action.type) {
        case "EDIT_PROFILE":
            return { loading: false, data: [...prevProfile.data, action.data] }
        default:
            return prevProfile
    }
}

export const editProfile = (user, id) => {
    console.log(user)
    return dispatch => {
        profileAxios.put(id)
        .then((response) => {
            let {data} = response
            dispatch({
                type: "EDIT_PROFILE",
                data
            });
        })
        .catch(err =>
            console.error(err)
        )
    }
}

export default profileReducer