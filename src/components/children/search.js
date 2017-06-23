import React, { Component } from 'react';
import { Col, FormGroup, FormControl, Button, Panel } from 'react-bootstrap';

export default class Search extends Component {

	constructor(props) {
		super(props);
		this.state = {
			term: "",
			begin: "",
			end: ""
		}
	}

	handleTerm = (event) => {
		this.setState({ term: event.target.value });
		console.log(event.target.value);
	}

	handleBegin = (event) => {
		this.setState({ begin: event.target.value });
		console.log(event.target.value)
	}

	handleEnd = (event) => {
		this.setState({ end: event.target.value });
		console.log(event.target.value)
	}

	render(){
		return(
			<Panel>
				<Col xs={12}>
					<form>
				       	<FormGroup controlId="formBasicText">
				         	<div className="text-center"><h4>Topic</h4></div>
				          	<FormControl type="text" value={ this.state.value } placeholder="Search Topic" onChange={ this.handleTerm } />
				        </FormGroup>

				        <FormGroup controlId="formBasicText">
				          	<div className="text-center"><h4>Start Year</h4></div>
				          	<FormControl type="text" value={ this.state.value } placeholder="Start Year" onChange={ this.handleBegin } />
				        </FormGroup>

				        <FormGroup controlId="formBasicText">
				          	<div className="text-center"><h4>End Year</h4></div>
				          	<FormControl type="text" value={ this.state.value } placeholder="End Year" onChange={ this.handleEnd } />
				        </FormGroup>
				        <br/>
				      	<div className="text-center">
					        <Button onClick={ () => this.props.callApi(this.state.term, this.state.begin, this.state.end) }>Submit</Button>	
					    </div>
				    </form>
				</Col>
			</Panel>
		);
	}
	
}