import React from 'react'

class Form extends React.Component {
    handleClick = () => {
        console.log("Click");
    }

    render() {
        return (
            <React.Fragment>
                <label>todo:</label>
                <input type="text" className="todoform" />
                <button onClick={() => this.handleClick()}>
                  Click me
                </button>
            </React.Fragment>
        );
    }
}

export default Form;