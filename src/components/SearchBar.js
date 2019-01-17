import React from "react";

class SearchBar extends React.Component {
    state = { term: "" };

    onInputChange = e => this.setState({ term: e.target.value });

    onFormSubmit = e => {
        e.preventDefault();

        this.props.onTermSubmit(this.state.term);
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form action="" className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="filed">
                        <label htmlFor="">Video Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;