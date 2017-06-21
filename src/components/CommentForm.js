import React, { Component } from 'react'
import './forms.css'


class CommentForm extends Component {
    static propTypes = {

    };

    state = {
        username: {
            val: '',
            error: false
        },
        text: {
            val: '',
            error: false
        }
    }

    render() {
        return (
            <div>
                Name: <input type = 'text' className={this.state.username.error ? 'input_error' : ''} value = {this.state.username.val} onChange = {this.handleUserChange} />
                Text: <input type = 'text' className={this.state.text.error ? 'input_error' : ''} value = {this.state.text.val} onChange = {this.handleTextChange} />
            </div>
        )
    }



    handleUserChange = (ev) => {
        if (ev.target.value.length < 5 || ev.target.value.length > 15) {
            this.setState({
                username: {
                    error: true
                }
            });
            return
        }

        this.setState({
            username: {
                val: ev.target.value,
                error: false
            }
        })
    }
    handleTextChange = (ev) => {
        if (ev.target.value.length < 20 || ev.target.value.length > 50) {
            this.setState({
                text: {
                    error: true
                }
            });
            return
        }

        this.setState({
            text: {
                val: ev.target.value,
                error: false
            }
        })
    }

}

export default CommentForm