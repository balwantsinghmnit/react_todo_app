import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
        <div
          style={{
              background:"#333",
              color:"#fff",
              textAlign:"center",
              padding:"10px"
          }}
        >
            <h1>React Todo List</h1>
        </div>        )
    }
}

export default Header;