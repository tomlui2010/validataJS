function isValidEmail(email) {
    const emailRegexPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegexPattern.test(email);
}

function isValidURL(url) {
    try {
        new URL(url);
        return true;
    } catch (error) {
        return false;
    }
}

function isValidPhoneNumber(phoneNumber) {
    const phoneRegex = /^\+?(\d{1,4})?[-. ]?\(?\d{1,4}\)?[-. ]?\d{1,9}$/;
    return phoneRegex.test(phoneNumber);
}

function isStrongPassword(password) {
    // Criterion: At least 8 characters, with a mix of uppercase, lowercase, and numbers
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return strongPasswordRegex.test(password);
}

function isValidDate(date) {
    return !isNaN(new Date(date).getTime());
}


module.exports = {
    isValidEmail,
    isValidURL,
    isValidPhoneNumber,
    isStrongPassword,
    isValidDate

}