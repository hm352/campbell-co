function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

const imageParts = images.map((image) => 
    <img src={image}/>
);

//  Bootstrap, styled-component, animation example
const bounceAnimation = keyframes`${bounce}`;

const BouncyButton = styled.button`
  animation: 1s ${bounceAnimation};
  background: red;
  height; 100%;
  float: center;
`;