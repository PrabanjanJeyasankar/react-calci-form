import React, { Component } from 'react'
import axios from 'axios'

export default class CalculatorComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       values: '',
       inputValue:''
    }
  }
  // handleButtonPI = ()=>{
  //     this.setState({
  //         values: this.state.values + '3.14'
  //     })
  // }
  handleButtonE = ()=>{
      this.setState({
      })
  }
  handleButtonClear = ()=>{
      this.setState({
          values:''
      })
  }
  handleButtonDel = ()=>{
      this.setState({
          values: this.state.values.slice(0,-1)
      })
  }
  handleButtonSeven = ()=>{
      this.setState({
          values: this.state.values + '7'
      })
  }
  handleButtonEight = ()=>{
      this.setState({
          values: this.state.values + '8'
      })
  }
  handleButtonNine = ()=>{
      this.setState({
          values: this.state.values + '9'
      })
  }
  handleButtonDivide = ()=>{
      this.setState({
          values: this.state.values + '/'
      })
  }
  handleButtonFour = ()=>{
      this.setState({
          values: this.state.values + '4'
      })
  }
  handleButtonFive = ()=>{
      this.setState({
          values: this.state.values + '5'
      })
  }
  handleButtonSix = ()=>{
      this.setState({
          values: this.state.values + '6'
      })
  }
  handleButtonMultiply = ()=>{
      this.setState({
          values: this.state.values + '*'
      })
  }
  handleButtonOne = ()=>{
      this.setState({
          values: this.state.values + '1'
      })
  }
  handleButtonTwo = ()=>{
      this.setState({
          values: this.state.values + '2'
      })
  }
  handleButtonThree = ()=>{
      this.setState({
          values: this.state.values + '3'
      })
  }
  handleButtonAddition = ()=>{
    this.setState({
        values: this.state.values + '+'
    })
}
  handleButtonZero = ()=>{
    this.setState({
        values: this.state.values + '0'
    })
}
  handleButtonSubtract = ()=>{
      this.setState({
          values: this.state.values + '-'
      })
  }

  handleButtonDot = () =>{
      this.setState({
          values: this.state.values + '.'
      })
  }

  handleButtonSubmit =() =>{
      const result = eval(this.state.values)
      this.setState({
          values: result 
      })
  } 

  formSubmitHandler = event =>{
      axios.post('http://localhost:3000/',this.state)
      .then(response=>{
          console.log(response)
      })
      .catch(error=>{
          console.log(error)
      })

      event.preventDefault()
  }
  render() {
    return (
          <div className="calculator flex flex-col justify-center items-center h-screen ">
                <form onSubmit={this.formSubmitHandler}
                      className="buttons grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 gap-2 p-4 border border-gray-900 rounded-lg border-4">
                  <input type='text' className="display bg-gray-900 rounded-lg text-white text-right p-4 text-4xl font-bold col-span-4"value={this.state.values}/>
                    <button value="/"
                            className="bg-orange-400 text-white font-bold text-2xl p-2 rounded-full"
                            onClick={this.handleButtonDivide}>÷
                    </button>
                    <button value="7" 
                            className="bg-gray-300 text-black font-bold text-2xl p-2 rounded-lg"
                            onClick={this.handleButtonSeven}>7
                    </button>
                    <button value="8"
                            className="bg-gray-300 text-black font-bold text-2xl p-2 rounded-lg"
                            onClick={this.handleButtonEight}>8
                    </button>
                    <button value="9"
                            className="bg-gray-300 text-black font-bold text-2xl p-2 rounded-lg"
                            onClick={this.handleButtonNine}>9
                    </button>
                    <button value="*"
                            className="bg-orange-400 text-white font-bold text-2xl p-2 rounded-full"
                            onClick={this.handleButtonMultiply}>x
                    </button>
                    <button value="4" 
                            className="bg-gray-300 text-black font-bold text-2xl p-2 rounded-lg"
                            onClick={this.handleButtonFour}>4
                    </button>
                    <button value="5"
                            className="bg-gray-300 text-black font-bold text-2xl p-2 rounded-lg"
                            onClick={this.handleButtonFive}>5
                    </button>
                    <button value="6"
                            className="bg-gray-300 text-black font-bold text-2xl p-2 rounded-lg"
                            onClick={this.handleButtonSix}>6
                    </button>
                    <button value="-"
                            className="bg-orange-400 text-white font-bold text-2xl p-2 rounded-full"
                            onClick={this.handleButtonSubtract}>-
                    </button>
                    <button value="1"
                            className="bg-gray-300 text-black font-bold text-2xl p-2 rounded-lg"
                            onClick={this.handleButtonOne}>1
                    </button>
                    <button value="2"
                            className="bg-gray-300 text-black font-bold text-2xl p-2 rounded-lg"
                            onClick={this.handleButtonTwo}>2
                    </button>
                    <button value="3"
                            className="bg-gray-300 text-black font-bold text-2xl p-2 rounded-lg"
                            onClick={this.handleButtonThree}>3
                    </button>
                    <button value="+"
                            className="bg-orange-400 text-white font-bold text-2xl p-2 rounded-full"
                            onClick={this.handleButtonAddition}>+
                    </button>
                    <button value="0" 
                            className="bg-gray-300 text-black font-bold text-2xl p-2 rounded-lg col-span-2" 
                            onClick={this.handleButtonZero}>0
                    </button>
                    <button value="." 
                            className="bg-gray-300 text-black font-bold text-2xl p-2 rounded-lg" 
                            onClick={this.handleButtonDot}>.
                    </button>
                    <button value="=" 
                            className="bg-orange-400 text-white font-bold text-2xl pl-4 pt-1 pr-4 pb-1 rounded-lg col-span-2"
                            onClick={this.handleButtonSubmit}>=
                    </button>
                    <button value="C" 
                            className="bg-gray-600 text-white font-bold text-2xl p-2 rounded-lg " 
                            onClick={this.handleButtonClear}>C
                    </button>
                    <button value="Del" 
                            className="bg-gray-600 text-white font-bold text-2xl p-2 rounded-lg " 
                            onClick={this.handleButtonDel}>Del
                    </button>
                </form>
      </div> 
    )
  }
}

// import React from 'react'

// export default function CalculatorComponent() {
//   return (
//     <div>CalculatorComponent</div>
//   )
// }
