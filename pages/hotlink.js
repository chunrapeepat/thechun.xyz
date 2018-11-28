import React, { Component } from 'react';

class Hotlink extends Component {
    componentDidMount = () => {
        const url = window.location.href || ""
        const query = url.split('#')[url.split('#').length - 1]

        if (query === "linear-algrebra") {
            window.location.href = 'http://bit.ly/2DOkjvV'
        }
    }

    render = () => (<div>Hotlink Not Found.</div>)
}

export default Hotlink;