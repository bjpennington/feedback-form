import React, { Component } from 'react';
import { connect } from 'react-redux';

class FeedbackFeeling extends Component {
    constructor(props) {
        super(props);
        this.state = {feeling: "1"}
    }

    handleChangeForSelect = (event) => {
        this.setState({
            feeling: event.target.value
        })
    }

    passFeedback = () => {
        this.props.dispatch({
            type: 'ADD_FEELING',
            payload: this.state
        });
        this.props.history.push('/feedback_pg_2');
    }

    render() {
        return (
            <div>
                <div>
                    <p>1 of 4</p>
                </div>
                <div>
                    <p>How are you feeling today?</p>
                    <select onChange={this.handleChangeForSelect}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div>
                    <button onClick={this.passFeedback}>
                        Next
                    </button>
                </div>
            </div>
        )
    }

}

export default connect()(FeedbackFeeling);