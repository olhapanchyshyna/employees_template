import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {
    constructor(props){
        super(props);
        this.state = {
            term: ''
        }
    }

    upTermSearch = (e) => {
        const term = e.target.value;
        this.setState({term})
        this.props.upTerm(term);
    }

    render(){
        return (    
            <input type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника"
                value={this.state.term}
                onChange={this.upTermSearch}
            />
        )
    }

    
}

export default SearchPanel;