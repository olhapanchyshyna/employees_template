import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            data : [
                {name : "John", salary: 500, increase: false, like: false, id: 1},
                {name : "Olha", salary: 1000, increase: false, like: false, id: 2},
                {name : "Alex", salary: 2500, increase: true, like: true, id: 3}
            ],
            term: '',
            filter: 'all'
        }
        this.coundId = 3;
    }

    deletItem = (id) => {
        this.setState(({data}) => {
            return{
                data: data.filter(item => item.id !== id)
            } 
        })
    }

    addNew = (e,name,salary) => {
        e.preventDefault();
        this.setState(({data}) => {
            if(name && salary){ 
                return{
                    data : [...data,  {name : name, salary: salary, increase: false, like: false, id: this.coundId},]
                }
            }
            
        })
    }

    onToggle = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id){
                    return{...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    searchEm = (data, term) => {
        if(data.length === 0){
            return data
        }else{
            return data.filter(item => {
                return item.name.indexOf(term) > -1
            })
        }
    }
  
    upTerm = (term) => {
        this.setState({term})
    }

    filterPost = (items, filter) =>{
        switch(filter){
            case 'like' :
                return items.filter(item => item.like);
            case 'moreThan1000' :
                return items.filter(item => item.salary >= 1000);
            default:
                return items
        }
    }
    
    onFilter = (filter) => {
        this.setState({filter})
    }

    render(){
        this.coundId += 1;
        const {data, term, filter} = this.state;
        const employees = this.state.data.length;
        const increase = this.state.data.filter(item => item.increase).length;
        const visiblData = this.filterPost(this.searchEm(data, term), filter) ;

        return (
            <div className="app">
                <AppInfo 
                employees={employees}
                increase={increase}/>
        
                <div className="search-panel">
                    <SearchPanel 
                    upTerm={this.upTerm}
                    />
                    <AppFilter
                    filter={filter}
                    onFilter={this.onFilter}
                    />
                </div>
                
                <EmployeesList 
                    data={visiblData} 
                    onDelet={this.deletItem}
                    onToggle={this.onToggle}
                />
                <EmployeesAddForm
                    addNew={this.addNew}
                />
            </div>
        );
    }
    
  
}

export default App;
