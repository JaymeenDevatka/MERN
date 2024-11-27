import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message : 'Hello'
      }
    }

    clickHandeler()
    {
        this.setState({
        message: 'Good Bye! '
        })

        console.log(this)
    }
    
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandeler.bind(this)}>Click</button> */}
        <button onClick={() => this.clickHandeler( )}>Click</button>
      </div>
    )
  }
}

export default EventBind
