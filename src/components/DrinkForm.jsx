import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
	text-align: center;
	background: #3C474D;
;
`


class DrinkForm extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			ingredient: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.submit(this.state.ingredient);
	}

	handleChange(event) {
    	this.setState({ingredient: event.target.value});
  	}

	render(){
		return (
	<StyledForm class="pure-form" onSubmit={this.handleSubmit}>
		<fieldset>
		<input placeholder='ingredient' value={this.state.ingredient}
		onChange={this.handleChange}></input>
		<button type="submit" class="pure-button">Drink</button>
		</fieldset>
	</StyledForm>)
	}

}

export default DrinkForm 