import React from 'react';
import { Container, Row, Col} from 'react-bootstrap' ;


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
			<Container fluid >
				<Row>
				{
					this.state.drinks.map((drink) => 
						<Col xs={12} md={4}>
							<h2> {drink.strDrink} </h2>
							<img src={drink.strDrinkThumb}></img>
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