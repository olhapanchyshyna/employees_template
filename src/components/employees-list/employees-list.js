import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css';

const EmployeesList = ({data, onDelet, onToggle}) => {
    const element = data.map(item => {
        const {id, ...itemProps} = item;
        return <EmployeesListItem key={id} {...itemProps} 
        onDelet={() => onDelet(id)} 
        onToggle={(e) => onToggle(id, e.currentTarget.getAttribute('data-toggle'))} 
        />
    })

    return (
        <ul className="app-list list-group">
            {element}
        </ul>
    )
}

export default EmployeesList;