import React, { Component } from 'react'
import { connect } from 'react-redux'
import Page from './page'


class Results extends Component {
  render() {

    const { suggestions } = this.props
    
    console.log(suggestions)

    return (
      <div>
        <Page />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    suggestions: state.suggestions,
    hola: '123'
  }
}


export default connect(mapStateToProps)(Results)