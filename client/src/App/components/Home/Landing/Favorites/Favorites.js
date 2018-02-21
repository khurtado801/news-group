import React, { Component } from 'react';

import { connect } from "react-redux";
import {getArticles, deleteArticle} from "../../../../../redux/articles";

class Favorites extends Component {
    constructor(props) {
        super(props)
    }

    handleClick = () => {
        this.props.deleteArticle(this.props._id)
    }
    
    render() {
        console.log(this.props)
        return (
            <div >
        
                <h2 className="times">{this.props.title}</h2>
                <h4 className="times">{this.props.author}</h4>
                <h4 className="times">{this.props.description}</h4>
                <a target= "_blank"href={this.props.url} className="times">link to article</a>

                <h4 className="times">{this.props.publishedAt}</h4>
                <h4 className="times">{this.props.source.name}</h4>
                <button onClick={this.handleClick}>delete</button>
            </div>
        );
    }
}

export default connect (state => state, {getArticles, deleteArticle}) (Favorites);