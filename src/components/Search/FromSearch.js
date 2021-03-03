import React from 'react';

class FromSearch extends React.Component {
    state = { term: ''};

    onInputChange = (event) => {
        this.setState({term: event.target.value});
    }

    onFormSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div>
                        <label>From</label>
                        <input
                        type='text'
                        value={this.state.term}
                        onChange={this.onInputChange}></input>
                    </div>
                </form>
            </div>
        );
    }
}

export default FromSearch;