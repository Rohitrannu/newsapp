import React, { Component } from 'react'
import Hourglass from './Hourglass.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div>
        <img src={Hourglass} alt='Hourglass'/>
      </div>
    )
  }
}

