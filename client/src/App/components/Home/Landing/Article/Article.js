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
            <div >
                <h2 className="times">{this.props.title}</h2>
                <h4 className="times">{this.props.author}</h4>
                <h4 className="times">{this.props.description}</h4>
                <a href={this.props.url} className="times">link to article</a>
                <h4 className="times">{this.props.publishedAt}</h4>
                <h4 className="times">{this.props.source.name}</h4>
                
                <button onClick={this.handleClick}>Add to Favorites</button>
                
            </div>
        )

        

    }

    
}

export default connect(state=>state, { addArticle, getArticles })(Article)