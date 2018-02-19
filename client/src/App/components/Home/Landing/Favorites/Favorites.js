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
            <div>
                <h1>{this.props.source.id}</h1>
                <h2>{this.props.title}</h2>
                <h2>{this.props.author}</h2>
                <button onClick={this.handleClick}>delete</button>
            </div>
        );
    }
}

export default connect (state => state, {getArticles, deleteArticle}) (Favorites);
