import React, { Component } from 'react';
import { connect } from 'react-redux';

class FeedbackCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feeling: "1",
            understanding: "1",
            support: "1"
        }
    }

    handleChangeFor = (propertyName) => {
        return ((event) => {
            this.setState({
                [propertyName]: event.target.value
            })
        })
    }

    passFeedback = () => {
        let nextPage = this.props.pageData.pageCount + 1;
        this.props.dispatch({
            type: 'ADD_FEEDBACK',
            payload: this.state
        });
        this.props.dispatch({
            type: nextPage
        });
        this.props.history.push(`/feedback/${nextPage}`);

    }

    componentDidMount = () => {
        this.props.dispatch({
            type: parseInt(this.props.match.params.id, 10)
        });
    }


    render() {
        return (
            <div>
                <div>
                    <p>{this.props.pageData.pageCount} of 4</p>
                </div>
                <div>
                    <p>{this.props.pageData.question}</p>
                    <select value={this.state} onChange={this.handleChangeFor(this.props.pageData.property)}>
                        {/* <option selected disabled value=''></option> */}
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

const mapStateToProps = (state) => {
    return { pageData: state.pageData }
}

export default connect(mapStateToProps)(FeedbackCard);