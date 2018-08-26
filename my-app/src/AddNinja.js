import React, { Componenet } from 'react'

class AddNinja extends Componenet {
    state = {
        name: null,
        age: null,
        belt: null
    }
    render(){
        return (
            <div>
                <form>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" onChange={} />
                    <label htmlFor="name">Age: </label>
                    <input type="text" id="age" onChange={} />
                    <label htmlFor="name">Belt: </label>
                    <input type="text" id="belt" onChange={} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}