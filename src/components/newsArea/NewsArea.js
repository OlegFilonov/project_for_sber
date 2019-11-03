import React from 'react'
import NewsBlock from "./newsBlock/NewsBlock";

export default class NewsArea extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <NewsBlock/>
                <NewsBlock/>
                <NewsBlock/>
                <NewsBlock/>
            </div>
        )
    }
}