import React, { Component } from 'react';
import { Col, Panel, Button } from 'react-bootstrap';

export default class Result extends Component {

	renderResults = () => {
		return this.props.articles.map(item => {
			return (
				<Panel key={item._id}>
					{item.headline.main}
					<Button className="pull-right" onClick={()=> this.props.saveArticle(item)}>Save</Button>
				</Panel>
			);
		})
	}

	render(){
		return(
			<Panel header="Articles"> 
				<Col xs={12} className="result-box">
					{this.renderResults()}
				</Col>
			</Panel>
		);
	}
	
}