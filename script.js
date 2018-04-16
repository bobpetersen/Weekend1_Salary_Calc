console.log('js');

$(document).ready(onReady);

let totalMonthly = 0;

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

