let customers = [];
const addCustomer = (ev)=> {
    ev.preventDefault (); //to stop from submitting
    let customer = {
        id: Date.now(),
        fullName: document.getElementById('fullName').value,
        customerEmail: document.getElementById('customerEmail').value,
        phoneNumber: document.getElementById('phoneNumber').value
    }

    customers.push(customer);
    document.forms[0].reset(); //to clear the form for next entries
    //document.querySelector('form1').reset();

    //for display purpose only
    console.warn('added', {customers} );
    // let pre = document.querySelector('#msg pre');
    // pre.textContent = '\n' + JSON.stringify(customers, '\t', 2);

    //saving to localStorage
    localStorage.setItem('CustomerList', JSON.stringify(customers) );
}

document.addEventListener('DOMContentLoaded', ()=> {
    document.getElementById('btn').addEventListener('click', addCustomer);
});