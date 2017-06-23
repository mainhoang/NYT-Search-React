import React, { Component } from 'react';
import Search from './children/search';
import Result from './children/result';
import SavedArticle from './children/savedArticle';
import axios from 'axios';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            savedArticles: []
        }
    }

    callApi = (term, begin, end) => {

        console.log("CALL API")
        const API_KEY = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
        const ROOT_URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${ API_KEY }`;

        axios.get(`${ ROOT_URL }&q=${ term }&begin_date=${ begin }0101&end_date=${ end }0101`)
        .then((response)=>{
            const returnedData = response.data.response.docs;
            console.log(returnedData);
            this.setState({ articles: returnedData });
        }); 

    }

    save = (article) => {
        let articlesCopy = this.state.savedArticles.slice();
        articlesCopy.push(article);
        this.setState({ savedArticles: articlesCopy });
    }

    delete = (article) => {
        console.log("DELETING", this.state.savedArticles);
        let savedCopy = this.state.savedArticles.slice();
        let index = this.state.savedArticles.indexOf(article);
        // if( index > -1){
            savedCopy.splice(index, 1);
        // }
        
        this.setState({ savedArticles: savedCopy });
        console.log("DELETING 2 ", this.state.savedArticles);

    }

    render() {
        return (
            <div className="App container">
                <div className="jumbotron">
                    <h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> New York Times Search</strong></h1>
                </div>
                <Search callApi = {this.callApi} />
                <Result articles = {this.state.articles} saveArticle={this.save}/>
                <SavedArticle savedArticles = {this.state.savedArticles} delete = {this.delete} />
            </div>  
        );
    }
}

export default App;
