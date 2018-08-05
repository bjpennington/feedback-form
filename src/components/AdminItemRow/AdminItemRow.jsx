import React, {Component} from 'react';
import axios from 'axios';

class AdminItemRow extends Component {

    confirmDelete = () => {
        if(window.confirm('Are you sure you want to delete this feedback?')) {
            this.deleteFeedback(this.props.feedback.id);
        }
    }

    deleteFeedback = (id) => {
        console.log(this.props.feedback.id);
        axios.delete(`/api/feedback/${id}`)
            .then(response => {
                this.props.getFeedback();
            })
            .catch(error => {
                console.log('Error on /api/feedback DELETE:', error);
            });
    }

    render() {
        return (
            <tr>
                <td>
                    {this.props.feedback.feeling}
                </td>
                <td>
                    {this.props.feedback.understanding}
                </td>
                <td>
                    {this.props.feedback.support}
                </td>
                <td>
                    {this.props.feedback.comments}
                </td>
                <td>
                    <button onClick={this.confirmDelete}>
                        Delete
                    </button>
                </td>
            </tr>
        )
    }
}



export default AdminItemRow;