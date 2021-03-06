import React, { Component } from 'react';

export default class ClassComp extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    componentDidUpdate() {
        const { count } = this.state;
        if (count % 2 === 0) {
            console.log("In ClassComp:" + count);
        }
    }

    render() {
        const { count } = this.state;
        const type = this.props.ctype;
        return (<div>
            <span>
                Hello {type}.
                count = {count}
            </span>
            &nbsp; &nbsp;
            <button onClick={() => this.setState({ count: count + 1 })}>add count</button>
        </div>

        );
    }
}