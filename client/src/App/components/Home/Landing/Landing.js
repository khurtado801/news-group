import React, { Component } from 'react'
import { getNews } from '../../../../redux/news';
import {getArticles} from '../../../../redux/articles';
import { connect } from "react-redux"
import Article from "./Article/Article.js"
import Favorites from "./Favorites/Favorites.js";

class Landing extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getNews()
        this.props.getArticles()
    }


    render() {
        let { articles } = this.props.news.data
        let { loading } = this.props.news
        console.log(this.props.articles.data)

        return (
            loading ? <div>loading...</div> :
                <div>

                    {this.props.news.data.articles.map((article, i) => {
                        return <Article key={i} {...article}></Article>
                    })}
                    {this.props.articles.data.map((article, i) => {
                        return <Favorites key ={i}{...article}></Favorites>
                    })}
                </div>
        )
    }
}

export default connect(state => state, { getNews, getArticles })(Landing)