/**
 * Generate a random 6-digit OTP code
 * @returns {string} - 6-digit OTP code
 */
const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

/**
 * Create an OTP with expiry time (10 minutes from now)
 * @returns {Object} - OTP code and expiry timestamp
 */
const createOTP = () => {
  const code = generateOTP();
  const expiresAt = new Date();
  expiresAt.setMinutes(expiresAt.getMinutes() + 10); // OTP expires in 10 minutes
  
  return {
    code,
    expiresAt
  };
};

/**
 * Verify if an OTP is valid and not expired
 * @param {string} inputOTP - OTP provided by user
 * @param {string} storedOTP - OTP stored in the database
 * @param {Date} expiryTime - Expiration timestamp
 * @returns {boolean} - Whether OTP is valid and not expired
 */
const verifyOTP = (inputOTP, storedOTP, expiryTime) => {
  if (!inputOTP || !storedOTP || !expiryTime) {
    return false;
  }
  
  // Check if OTP matches and has not expired
  return inputOTP === storedOTP && new Date() < new Date(expiryTime);
};

module.exports = {
  generateOTP,
  createOTP,
  verifyOTP
};