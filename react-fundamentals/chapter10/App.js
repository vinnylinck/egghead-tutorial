import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
        super();
        this.state = { val: 0};
        this.update = this.update.bind(this);
    }
    update() {
        this.setState({val: this.state.val +1});
    }

    // no access to the DOM yet
    componentWillMount() {
        this.setState({m: 2});
    }

    render() {
        console.log('rendering!');
        return (
            <button onClick={this.update}>
                {this.state.val * this.state.m}
            </button>
        );
    }

    // here, I have access to the DOM
    componentDidMount() {
        //console.log(ReactDOM.findDOMNode(this));
        this.inc = setInterval(this.update, 500);
    }
    componentWillUnmount() {
        // without this line, we have an error because we are setting a state ina non-mounted component.
        clearInterval(this.inc);
    }
}

class Wrapper extends React.Component {
    constructor() {
        super();
    }
    mount() {
        ReactDOM.render(<App />, document.getElementById('a'));
    }
    unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('a'));
    }
    render() {
        return (
            <div>
                <button onClick={this.mount.bind(this)}>Mount</button>
                <button onClick={this.unmount.bind(this)}>Unmount</button>
                <div id="a"></div>
            </div>
        );
    }
}

export default Wrapper
