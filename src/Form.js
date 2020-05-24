import React from 'react'

class Form extends React.Component {
    render() {
        return (
            <React.Fragment>
                <label>
                    todo:
                    <input type="text" className="todoform" value={this.props.value} onChange={this.props.handleChange} />
                    <button onClick={this.props.handleAddClick}>Add</button>
                </label>
            </React.Fragment>
        );
    }
}

export default Form;