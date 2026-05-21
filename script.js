/**
 * Simple Validation Function
 * @param {string} email 
 * @param {string} password 
 */
function validateRegistration(email, password) {
  if (!email.includes("@")) {
    return { success: false, message: "Invalid email format." };
  }
  if (password.length < 8) {
    return { success: false, message: "Password must be at least 8 characters." };
  }
  return { success: true, message: "Validation passed!" };
}

// Example Usage
console.log(validateRegistration("user@test.com", "1234")); // Fails
console.log(validateRegistration("user@test.com", "securePassword123")); // Success
