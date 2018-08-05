import React, { Component } from 'react';
import {connect} from 'react-redux';

class FeedbackCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            understanding: ''
        }
    }

    handleChangeForSelect = (event) => {
        this.setState({
            understanding: event.target.value
        })
    }

    passFeedback = () => {
        this.props.dispatch({
            type: 'ADD_FEEDBACK',
            payload: this.state
        })
    }


    render() {
        return (
            <div>
                <div>
                    <p>2 of 4</p>
                </div>
                <div>
                    <p id="understanding">How well are you understanding the content?</p>
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

export default connect()(FeedbackCard);