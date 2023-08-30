import "./app-filter.css";

const AppFilter = (props) => {
    const btnData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'like', label: 'На повышение'},
        {name: 'moreThan1000', label: 'З/П больше 1000$'},
    ]
    const btns = btnData.map(({name, label}) =>{
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button type="button"
                    className={`btn ${clazz}`}
                    key={name}
                    onClick={()=> {props.onFilter(name)}}>
                    {label}
            </button>
        )
    })
    return (
        <div className="btn-group">
            {btns}
        </div>
    )
}

export default AppFilter;