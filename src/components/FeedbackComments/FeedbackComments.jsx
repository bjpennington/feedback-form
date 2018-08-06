import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class FeedbackComments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feeling: this.props.feedback.newFeedback.feeling,
            understanding: this.props.feedback.newFeedback.understanding,
            support: this.props.feedback.newFeedback.support,
            comments: ''
        }
    }

    postFeedback = () => {
        axios.post('/api/feedback', this.state)
            .then(results => {
                this.props.history.push('/feedback_submitted');
            })
            .catch(error => {
                console.log('Error on /api/feedback GET', error);
            });
    }

    handleChangeForSelect = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    render() {
        return (
            <div>
                <div>
                    <p>4 of 4</p>
                </div>
                <div>
                    <p>Any comments you want to leave?</p>
                    <input type="text" onChange={this.handleChangeForSelect} />
                </div>
                <div>
                    <button onClick={this.postFeedback}>
                        Submit
                    </button>
                </div>
            </div>
        )
    }

}

const mapStateToRedux = (state) => {
    return {
        feedback: state.storeFeedback
    }
}

export default connect(mapStateToRedux)(FeedbackComments);