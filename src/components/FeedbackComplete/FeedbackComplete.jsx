import React, { Component } from 'react';
import { connect } from 'react-redux';

class FeedbackComplete extends Component {

    startNewFeedback = () => {
        this.props.dispatch({
            type: 'RESET_FEEDBACK'
        });
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h2>Thank You!</h2>
                <button onClick={this.startNewFeedback}>Leave New Feedback</button>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(FeedbackComplete);