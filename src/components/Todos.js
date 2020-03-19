import React, { Component } from 'react'
import Items from "../components/Items";
import {PropTypes} from "prop-types";

class Todos extends Component {
    render() {
        return this.props.todos.map((todo)=>(
            <Items key={todo.id} todo={todo} deleteit={this.props.deleteit} />
        ))
    }
}

Todos.propTypes = {
    todos : PropTypes.array.isRequired
}

export default Todos;