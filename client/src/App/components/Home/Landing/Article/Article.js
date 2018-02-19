
import React, { Component } from 'react'

import { connect } from "react-redux";
import {addArticle, getArticles} from "../../../../../redux/articles";

class Article extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputs: {
                source: {
                    id: this.props.source.id || '',
                    name: this.props.source.name|| ''
                },
                author: this.props.author || '',
                title: this.props.title || '',
                description: this.props.description || '',
                url: this.props.url ||'',
                urlToImage: this.props.urlToImage || '',
                publishedAt: this.props.publishedAt || '',
                userId: this.props.auth._id ||''
            }
        }
    }

    handleClick = (e) => {
        e.preventDefault()
        console.log(this.state.inputs)
        this.props.addArticle(this.state.inputs)
        
    }


    render() {
        

        return (
            <div>
                <h1>{this.props.source.name}</h1>
                <h2>{this.props.author}</h2>
                <h2>{this.props.description}</h2>
                <h3>{this.props.userId}</h3>
                <button onClick={this.handleClick}>+</button>
            </div>
        )

    }

}

export default connect(state=>state, { addArticle, getArticles })(Article)

