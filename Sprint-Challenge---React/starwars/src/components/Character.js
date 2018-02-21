import React from 'react';

const Character = props => {
  return (
    <div>
      <hr />
      <h3 style={charHeader}> {props.name}</h3>
      <ul style={charList}>
        <li>Birth Year: {props.birth_year} </li>
        <li>Gender: {props.gender} </li>
        <li>Height: {props.height}</li>
        <li>Mass: {props.mass} </li>
        {/* <li>Species: {props.species} </li>
        <li>HomeWorld: {props.homeworld} </li>
        <li>Starships: {props.starships} </li> */}
      </ul>
    </div>
  );
};

const styles = {
  charHeader: {
    color: 'green',
    borderBottom: '1rem double green'
  },
  charList: {
    listStyle: 'none'
  }
};
const { charHeader, charList } = styles;
export default Character;
