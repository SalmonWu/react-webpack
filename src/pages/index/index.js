import React, { Component } from 'react';
import '~/sass/style.sass'

class Index extends Component {
    render() {
        console.log('Index')
        return (
            <div className="Index">
                <h1>Webpack test index</h1>
            </div>
        )
    }
}

export default Index