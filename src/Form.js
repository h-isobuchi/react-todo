import React from 'react'

class Form extends React.Component {
    render() {
        return (
            <React.Fragment>
                <label>
                    todo:
                    <input type="text" className="todoform" value={this.props.value} onChange={this.props.handleChange} />
                    <input type="submit" value="Add" />
                </label>
            </React.Fragment>
        );
    }
}

export default Form;