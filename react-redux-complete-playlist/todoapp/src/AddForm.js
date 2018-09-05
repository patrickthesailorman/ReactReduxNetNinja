import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    render(){
        return (
            <div>
                <form onSubmit={} >
                    <label>Add new todo: </label>
                    <input type="text" onChange={this.handleChange} />
                </form>
            </div>
        )
    }
}