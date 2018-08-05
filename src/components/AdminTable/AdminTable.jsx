import React, { Component } from 'react';
import axios from 'axios';

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
                <tr key={index}>
                    <td>
                        {feedback.feeling}
                    </td>
                    <td>
                        {feedback.understanding}
                    </td>
                    <td>
                        {feedback.support}
                    </td>
                    <td>
                        {feedback.comments}
                    </td>
                    <td>
                        <button>
                            Delete
                    </button>
                    </td>
                </tr>
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