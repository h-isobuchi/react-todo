import React from 'react'

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {value: ''}

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    render() {
        return (
            <React.Fragment>
                <label>
                    todo:
                    <input type="text" className="todoform" value={this.state.value} onChange={this.handleChange} />
                    <input type="submit" value="Add" />
                </label>
            </React.Fragment>
        );
    }
}

export default Form;