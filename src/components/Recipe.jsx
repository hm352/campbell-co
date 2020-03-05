import React from 'react';
import styled from 'styled-components';


const StyledPara = styled.p`
	color: #191F17;
	padding: 10px;
	font-family: Georgia;
	text-align: center;
	vertical-align: text-top;
`


class Recipe extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			drinks: []
		};
	}

	componentDidMount(){
	fetch(`https://the-cocktail-db.p.rapidapi.com/lookup.php?i=${this.props.idDrink}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
		"x-rapidapi-key": "515d24381cmshf99b9427d104edep1343b7jsnd9477b6b5db8"
		}
	}).then((response) => response.json())
	.then((responseJSON) => {
	       this.setState(responseJSON);
	       console.log(this.state);
	});
	}
	render(){
		return (this.state.drinks.map((drink) => <StyledPara>{drink.strInstructions}</StyledPara>))
}
}

export default Recipe