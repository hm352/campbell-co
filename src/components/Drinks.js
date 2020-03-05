import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap' ;
import styled from 'styled-components';
import Recipe from './Recipe'

const StyledImage = styled(Image)`
	height:  150px;
	opacity: 0.9;
	border: 5px solid;
	border-color: #3C474D;
`;

const StyledText = styled.h6`
	color: #191F17;
	font-family: Georgia;
	text-align: center;
	vertical-align: baseline;

`

const StyledPara = styled.p`
	color: #191F17;
	padding: 10px;
	font-family: Georgia;
	text-align: center;
	vertical-align: text-top;
`

const StyledDiv = styled.div`
	padding-top: 8%;
  	width: 75%;
  	opacity: 0.7;
  	border: 3px double;
  	border-color:#3C474D;
  	display: inline-block;
  	border-radius: 5%;

`

class Drinks extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			drinks: []
		};
	}

	componentDidMount() {
		fetch("https://the-cocktail-db.p.rapidapi.com/filter.php?i=Scotch", {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
			"x-rapidapi-key": "515d24381cmshf99b9427d104edep1343b7jsnd9477b6b5db8"
		}
		})
	    .then((response) => response.json())
	    .then((responseJSON) => {
	       // do stuff with responseJSON here...
	       console.log(responseJSON);
	       this.setState(responseJSON);
	    });
	}

	render() {
		return (
			<div>
			<Container style={{visibility: this.props.display}} fluid >
				<Row>
				{
					this.state.drinks.map((drink) => 
						
						<Col className='drink' xs={12} md={4}>
								<StyledDiv className='test'>
									<StyledImage src={drink.strDrinkThumb} roundedCircle />
									<StyledText> {drink.strDrink} </StyledText>
									<Recipe idDrink={drink.idDrink}> </Recipe>
								</StyledDiv>

						</Col>
					)
				}
				</Row>
			</Container>
			</div>
	)
	}
}

export default Drinks