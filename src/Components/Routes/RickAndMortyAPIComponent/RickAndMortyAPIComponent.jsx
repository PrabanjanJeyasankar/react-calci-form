import React, { Component } from 'react'
import axios from 'axios'

export class RickAndMortyAPIComponent extends Component {
    constructor (props){
        super(props)
        this.state = {
            posts:[],
            errorMessage : '',
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
    return (
      <React.Fragment>
        <div className='flex justify-center bg-gray-200  '>
            <div className='grid grid-cols-2 gap-3 text-xl m-10 text-white'>
                
                            {posts.length
                                ?posts.map
                                (post=>
                                    <div  className='bg-gray-500 flex  text-3xl rounded-[7px] pb-4 pt-4 pl-4 pr-4 'key={post.id}>
                                        <div className=' object-cover object-center'>
                                            <img src={post.image} className='rounded-xl   ' alt="img" />
                                        </div>
                                        <div className=' pl-6'>
                                                <div className='leading-lo'> 
                                                    <span className='text-[30px] font-bold'> {post.name}</span>
                                                </div>
                                                <div className='text-[18px] font-medium'>
                                                    <span>{post.status} - {post.species}</span>
                                                </div>
                                                <div>
                                                    <span className='text-gray-300 text-[15px] font-semibold mb-4'>Last Known Location : <br/></span> 
                                                    <span className='text-xl m-0'> {post.origin.name}</span>
                                                </div>
                                                <div>
                                                    <span className='text-gray-300 text-[15px] font-semibold mb-4'>First Seen in :</span><br />
                                                    <span className='text-xl m-0'>{post.location.name}</span>
                                                </div>
                                                <br/>
                                        </div>
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