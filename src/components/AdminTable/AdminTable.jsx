import React, {Component} from 'react';
import axios from 'axios';

class AdminTable extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    getFeedback = () => {
        axios.get('/api/feedback')
                .then(response => {
                    this.setState({
                        feedback: response.data
                    });
                })
                .catch(error => {
                    console.log('Error on /api/feedback GET:', error);
                });
    }

    componentDidMount() {
        this.getFeedback();
    }

    render() {
        console.log(this.state);
        
        return (
            <p>{JSON.stringify(this.state)}</p>
        )
    }
}

export default AdminTable;