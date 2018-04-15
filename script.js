console.log('js');

$(document).ready(onReady);

function onReady() {
    console.log('jQuery');
    $('#submitButton').on('click', clickHandler);
}

function clickHandler() {
    console.log('submit clicked');
    addNewEmployee();
}

function addNewEmployee() {
    $('#employeeList').append(
      '<tr><td>' 
      + $('#newFirstName').val() + '</td><td>'
      + $('#newLastName').val()+ '</td><td>' 
      + $('#newId').val() + '</td><td>' 
      + $('#newTitle').val() +'</td><td>' 
      + $('#newAnnualSalary').val() + '</td></tr>');
}

function totalMonthly()  {
    let salary = $('#salary').val()/12;
    payroll.push(salary.toFixed(2));
    console.log(payroll);
    
}