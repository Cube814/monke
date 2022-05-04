import React from 'react'
import './App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      message: "Cubas sucks",
      text: "Sahil's dope",
      text2: "oh yeahhh",
      h1OG: undefined,
      h2OG: undefined,


    }
  }


  render() {
    console.log("balls")
    console.log("(っ＾▿＾)💨")

    const switchToBlue = () => {
      this.setState({
        h1OG: "message-moved",
        message: "We love Cuba",
      })
      if (this.state.h1OG === "message-moved") {
        this.setState({
          h1OG: "message-moved message-moved2"
        })
      }
    }


    return (


      <div className="container">

        <div>
          <h1 className={this.state.h1OG}>{this.state.message} </h1>
          <button onClick={() => {
            this.switchToBlue()
          }}>Click to be nicer</button>
        </div>

        <div>
          <h2 className={this.state.h2OG}> {this.state.text}</h2>
          <button onClick={
            () => {
              this.setState(
                {
                  h2OG: "text-moved",
                  text: "Cool bros"

                }
              )

            }
          }>Sike</button>
        </div>
        <div>
          <h3>
            {this.state.text2}</h3>
          <button onClick={
            () => {
              this.setState(
                {
                  text2: "poggers"
                }
              )
            }
          }>touch this</button>
        </div>
      </div>

    )

  }

}

export default App