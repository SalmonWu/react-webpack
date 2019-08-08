import React, { Component } from 'react';
import 'chosen-js/chosen.css'
import '~/sass/style.sass'
const $ = window.jQuery = require('jquery')
require('chosen-js')


class Index extends Component {
    componentDidMount() {
        $(".chosen-select").chosen({ no_results_text: "Oops, nothing found!" });
    }

    render() {
        console.log('Index')
        return (
            <div className="Index">
                <h1>Webpack test index</h1>
                <select data-placeholder="Choose a country..."
                    className="chosen-select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                </select>
            </div>
        )
    }
}

export default Index