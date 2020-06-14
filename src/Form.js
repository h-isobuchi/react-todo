import React from 'react'
import './Form.css'

class Form extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="todoform">
                    <label>todo:</label>
                    <input type="text" className="todoform" value={this.props.formValue} onChange={this.props.handleChange} />
                    <button onClick={this.props.handleAddClick}>Add</button>
                </div>
            </React.Fragment>
        );
    }
}

export default Form;