import React, { Component } from 'react';
import axios from 'axios';
import AdminItemRow from '../AdminItemRow/AdminItemRow';

class AdminTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feedback: []
        }
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
        let feedbackMapArray = this.state.feedback.map((feedback, index) => {
            return (
                <AdminItemRow feedback={feedback} key={index} getFeedback={this.getFeedback} />
            )
        })

        return (
            <table>
                <thead>
                    <tr>
                        <th>
                            Feeling
                        </th>
                        <th>
                            Comprehension
                        </th>
                        <th>
                            Support
                        </th>
                        <th>
                            Comments
                        </th>
                        <th>
                            Delete
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {feedbackMapArray}
                </tbody>
            </table>
        )
    }
}

export default AdminTable;