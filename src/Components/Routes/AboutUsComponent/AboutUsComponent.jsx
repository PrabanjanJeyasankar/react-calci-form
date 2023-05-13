import React, { Component } from 'react'
import axios from 'axios'

class AboutUsComponent extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
           posts : [],
           errorMessage : '',
           urlEnd : props.urlEnd,
        }
      }
  
      componentDidMount(props){
          axios
          .get(`http://localhost:3000/AboutUsComponent`)
          .then(response=>{
              console.log(response.data)
              this.setState({
                  posts: response.data
              })
          })
          .catch(error=>{
              console.log(error)
              this.setState({
                  errorMessage : "Error Retrieving data"
              })
          })
        }
  render() {
    return (
      <div>{this.state.posts}</div>
    )
  }
}

export default AboutUsComponent