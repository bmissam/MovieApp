import React from 'react';
import { Spinner } from 'reactstrap';

export default class Spin extends React.Component {
  render() {
    return (
      <div className="Loader">
        <img  src='https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif' />
       
      </div>
    );
  }
}

