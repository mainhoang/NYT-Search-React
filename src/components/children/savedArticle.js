import React, { Component } from 'react';
import { Col, Panel, Button } from 'react-bootstrap';

export default class SavedArticle extends Component {

	renderSavedArticles = () => {
		return this.props.savedArticles.map((item, key) => {		
			return (
				<Panel key={key}>
					{item.headline.main}
					<Button className="pull-right" onClick={ () => this.props.delete(item) }>Delete</Button>
				</Panel>
			);
		});
	}

	render(){
		return(
			<Panel header="Saved Articles"> 
				<Col xs={12}>
					{ this.renderSavedArticles() }
				</Col>
			</Panel>
		);
	}

}	