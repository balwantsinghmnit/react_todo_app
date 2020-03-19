import React, { Component } from 'react'
import {PropTypes} from "prop-types";

class Items extends Component {
    render() {
        return (
            <div style={{backgroundColor:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted"}}>
                <h2>{this.props.todo.title}</h2>
                <button style={{
                    background:"#ff0000",
                    color:"#fff",
                    border:"none",
                    padding:"5px 10px",
                    borderRadius:"50%",
                    cursor:"pointer",
                    float:"right",
                    marginTop:"-30px"
                }} onClick={this.props.deleteit.bind(this,this.props.todo.id)}>x</button>
            </div>
        )
    }
}

Items.propTypes = {
    todo : PropTypes.object.isRequired
}
export default  Items;