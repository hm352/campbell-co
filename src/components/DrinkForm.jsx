import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
	text-align: center;
`


class DrinkForm extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			something: []
		};
	}

	render(){
		return (
	<StyledForm class="pure-form">
		<fieldset>
		<input placeholder='ingredient'></input>
		<button type="submit" class="pure-button">Drink</button>
		</fieldset>
	</StyledForm>)
	}

}

export default DrinkForm 