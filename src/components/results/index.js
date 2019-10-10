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
  }
}

const wrapper = connect(mapStateToProps) 
const component = wrapper(Results)

export default component