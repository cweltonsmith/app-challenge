function calculations() {
    
    //Gets the number from the input field
    const base = document.querySelector('#field1').value
    const height = document.querySelector('#field2').value

    //Doing the area caclculation
    const areaTotal = base * height

    //Modifying HTML page with the calculations output
    document.querySelector('#area-amount').innerHTML = areaTotal
}
document.querySelector('#calculate').addEventListener('click', calculations)