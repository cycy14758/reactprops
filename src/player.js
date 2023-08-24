import React from "react";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types"

function player({x}) {
  const mystyle={
    width:"200px"
  }
  return (
    <Card style={mystyle}>
      <Card.Img variant="top" src={x.img} />
      <Card.Body>
        <Card.Title>{x.name}</Card.Title>
        <Card.Text> {x.equipe}</Card.Text>
        <Card.Text> {x.nationalite}</Card.Text>
        <Card.Text>{x.jerseyNumber}</Card.Text>
        <Card.Text>{x.age}</Card.Text>
         
      </Card.Body>
    </Card>
  );}

  player.propTypes = {
    name: PropTypes.string,
   }
   player.defaultProps = {
     name:"name"
   };

export default player;
