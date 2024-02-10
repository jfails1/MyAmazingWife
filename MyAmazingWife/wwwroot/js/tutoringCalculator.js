$(document).ready(function () {
    $('#calculateButton').click(function () {
        // Validate input
        var hours = $('#hoursInput').val();
        if (hours <= 0 || isNaN(hours)) {
            alert('Please enter a positive number for hours.');
            return;
        }

        // Fixed hourly rate
        var hourlyRate = 30; // Set the hourly rate to $30

        // Perform calculation
        var totalCost = hours * hourlyRate;

        // Display result
        $('#totalCost').val('$' + totalCost.toFixed(2)); // Add a dollar sign before the total cost
    });
});