import React, {Component} from 'react';
import './Welcome.css';
import User from '../../utils/API';
import axios from 'axios';

class Welcome extends Component {
    constructor(props){
        super(props)
        this.state = {
            user: []
        };
    }

    componentDidMount(){
        //trying to get the user name
        axios.get('/api/user/login')
            .then(result => {
                this.setState({user: result.data});
                console.log(this.state.user);
            })
    }

    render() {
        return (
        <div className="section">

            <div className="content">
                <h1>Hi {this.state.user.username}</h1>
                <br></br>
                <br></br>
                <br></br>
                <a href="/" id="add-btn">Add Trips</a>
            </div>
        </div>
        );
    }
}
export default Welcome;
