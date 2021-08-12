// Write your solution in this file!


const employee = {
    name: 'Mr. Big Ol Jerk',
    streetAddress: '125 Mean Person street'
    }

    function updateEmployeeWithKeyAndValue(employee, key, value) {
        return Object.assign({}, employee, {[key]: value})
        }
    function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
        return Object.assign(employee, {[key]: value})
        }   
    function deleteFromEmployeeByKey(employee, key, value) {
        const newEmployee = { ...employee}
        delete newEmployee[key]
        return newEmployee
        }
    function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
        delete employee[key]
        return employee
        }    
                 