import React, { Component } from 'react';
import axios from 'axios'

class Home extends Component {
    state = {
        posts: [ ]
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res)
            this.setState({
                posts: res.data.slice(0,10)
            })
        })
    }
    render() {
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                            
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No posts yet</div>
        )
        return (
            <div className="container">
                <h4 className="center">Home</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi eligendi natus rem asperiores explicabo omnis voluptate fugiat eveniet sunt culpa, totam illum tempore nulla harum enim optio libero perferendis! Cupiditate.</p>
            </div>
        )
    }
}

export default Home