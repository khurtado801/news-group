import axios from "axios";
// let todoAxios = axios.create();

const newsUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=47c34ea2d4fa4af499a9cec7c4e762fb";

let initialState={ loading: true, data: []}

///WTF BEN
const newsReducer = (prevNews= initialState, action) => {
    switch(action.type) {
        
        case "GET_NEWS":
            return {loading: false, data: action.data}
        default:
            return prevNews
    }
}

export const getNews = () => {
    return dispatch => {
        axios.get(newsUrl)
            .then((response) =>{
                console.log(response)
                let {data} = response
                dispatch({
                    type: "GET_NEWS", 
                    data
                })
            })
            .catch(err => {

                console.error(err);
            })
    }
}

export default newsReducer;
