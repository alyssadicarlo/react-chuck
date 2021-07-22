import React, { Component } from 'react';

class Joke extends Component {
    constructor(props) {
        super(props);
        this.state = {
            joke: "",
            isLoading: false
        };
    }

    componentDidMount() {
        this._fetchJoke();
    }

    _fetchJoke = () => {
        this.setState({
            isLoading: true
        }, async () => {
            const response = await fetch(
                'https://api.chucknorris.io/jokes/random?category=dev'
            ).then(response => response.json());
            this.setState({
                joke: response.value,
                isLoading: false
            });
        })
    }

    render() {
        const { joke, isLoading } = this.state;

        return (
            <>
                <p>{!!isLoading ? 'Loading...' : joke}</p>
                <button type="button" onClick={this._fetchJoke}>Get a joke</button>
            </>
        );
    }
}

export default Joke;