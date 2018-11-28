import React, { Component } from 'react';

class Hotlink extends Component {
    componentDidMount = () => {
        const url = window.location.href || ""
        const query = url.split('#')[url.split('#').length - 1]

        if (query === "final-linear") {
            window.location.href = 'http://bit.ly/2DOkjvV'
        }
    }

    render = () => (<div>Welcome to thechun.xyz hotlink, Loading...</div>)
}

export default Hotlink;