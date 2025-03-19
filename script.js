function checkVisa() {
    var country = document.getElementById('country').value;
    var result = document.getElementById('visaResult');

    switch (country) {
        case 'USA':
            result.textContent = "Visa required for most applicants.";
            break;
        case 'Canada':
            result.textContent = "Visa required unless you have an eTA.";
            break;
        case 'India':
            result.textContent = "Visa required before travel.";
            break;
        case 'UK':
            result.textContent = "Visa depends on the duration of stay.";
            break;
        case 'Australia':
            result.textContent = "eVisa available for eligible travelers.";
            break;
        default:
            result.textContent = "Please select a country.";
    }
}

function applyVisa(event) {
    event.preventDefault();

    var passportNumber = document.getElementById('passportNumber').value;
    var country = document.getElementById('visaCountry').value;
    var result = document.getElementById('applicationResult');
    var name = document.getElementById('Name').value;

    if (!passportNumber || !country || !name) {
        result.textContent = "All fields are required!";
        result.classList.add('error');
        return false;
    }

    if (passportNumber.length < 8 || passportNumber.length > 10) {
        result.textContent = "Invalid passport number!";
        result.classList.add('error');
        return false;
    }

    result.textContent = "Visa application submitted successfully!";
    result.classList.remove('error');
    return true;
}