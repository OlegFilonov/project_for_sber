import React from 'react'
import SearchBar from './searchBar/SearchBar'
import PopularRequests from './popularRequests/PopularRequests'

export default class SearchArea extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <SearchBar/>
                <PopularRequests/>
            </div>
        )
    }
}