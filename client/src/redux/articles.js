import axios from "axios";
let articleAxios = axios.create();
articleAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

const articleUrl = "/api/articles/"

const articleReducer = (prevArticle = { loading: true, data: [] }, action) => {
    switch (action.type) {
        case "ADD_ARTICLE":
            return { loading: false, data: [...prevArticle.data, action.data] }
        case "GET_ARTICLES":
            return { loading: false, data: action.data}
        case "DELETE_ARTICLE":
            return {loading: false, data: prevArticle.data.filter((article) => {
                return article._id !== action.id
            })}
        default:
            return prevArticle
    }
}

export const addArticle = (article) => {
    return dispatch => {
        articleAxios.post(articleUrl, article)
            .then((response) => {
                let { data } = response
                dispatch({
                    type: "ADD_ARTICLE",
                    data
                });
            })
        .catch(err => 
            console.error(err)
        )
    }
}

export const getArticles = () => {
    return dispatch => {
        articleAxios.get(articleUrl)
        .then((response) => {
            let {data} = response
            dispatch({
                type: "GET_ARTICLES",
                data
            });
        })
        .catch(err => 
            console.error(err)
        )
    }
}

export const deleteArticle = (id) => {
    return dispatch => {
        articleAxios.delete(articleUrl + id, id)
        .then((response) => {
            dispatch({
                type: "DELETE_ARTICLE",
                id
            });
        })
        
    }
}

export default articleReducer