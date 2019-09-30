function calculations() {
    
    //Passes string 
    const base = document.querySelector('#field1').value
    const height = document.querySelector('#field2').value

    //Doing all the simple calculations
    const areaTotal = base * height

    //Modifying HTML page with the calculations output
    document.querySelector('#area-amount').innerHTML = areaTotal
}
document.querySelector('#calculate').addEventListener('click', calculations)