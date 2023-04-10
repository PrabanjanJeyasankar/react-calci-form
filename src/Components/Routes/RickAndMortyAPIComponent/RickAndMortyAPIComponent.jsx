import React, { Component } from 'react'
import axios from 'axios'

export class RickAndMortyAPIComponent extends Component {
    constructor (props){
        super(props)
        this.state = {
            posts:[],
            errorMessage : ''
        }
    }
    componentDidMount(){
        axios
        .get('https://rickandmortyapi.com/api/character')
        .then(response => {
            console.log(response)
            this.setState({posts: response.data.results})
        })
        .catch(error => {
            console.log(error)
            this.setState({errorMessage: 'Error retrieving Data'})
        })
    }
  render() {
    const { posts, errorMessage } = this.state
    // const { characters, error } = this.state;
    return (
      <React.Fragment>
        <div className='flex justify-center bg-gray-200  '>
            <div className='grid grid-cols-2 gap-3 text-xl m-10 text-white'>
                   
                            {posts.length
                                ?posts.map
                                (post=>
                                    <div  className='bg-gray-500 text-3xl rounded-[7px] pt-4 pl-4 pr-4 '
                                     key={post.id}
                                     >
                                    <ul>
                                    <li className='leading-lo'> 
                                       <span className='text-[30px] font-bold'> {post.name}</span>
                                    </li>
                                    <li className='text-[18px] font-medium'>
                                        <span>{post.status} - {post.species}</span>
                                    </li>
                                    <li>
                                        <span className='text-gray-300 text-[15px] font-semibold mb-4'>Last Known Location : <br/></span> 
                                        <span className='text-xl m-0'> {post.origin.name}</span>
                                    </li>
                                    <li>
                                        <span className='text-gray-300 text-[15px] font-semibold mb-4'>First Seen in :</span><br />
                                        <span>{post.location.name}</span>
                                    </li>
                                    <br/>
                                    </ul>
                                    </div>
                                )
                                
                                :null}
                   
                    {errorMessage ? <div>{errorMessage}</div> : null}
            </div>
        </div>
      </React.Fragment>
    )
  }
}

export default RickAndMortyAPIComponent