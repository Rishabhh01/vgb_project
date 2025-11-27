// server/utils/generateToken.js
const jwt = require('jsonwebtoken');

const generateToken = (id, membershipStatus = null, membershipType = null) => {
  // Choose secret — in development use a fallback to keep local flow working
  const secret = process.env.JWT_SECRET || (process.env.NODE_ENV !== 'production' ? 'dev_jwt_secret_change_me' : null);
  if (!secret) {
    console.error('JWT_SECRET is not defined in environment variables!');
    return null;
  }

  try {
    // Create payload with membership info
    // Ensure id is a primitive string to avoid serialization issues
    const payload = { id: (id && id.toString) ? id.toString() : String(id) };
    
    // Only add membership info if provided
    if (membershipStatus) payload.membershipStatus = membershipStatus;
    if (membershipType) payload.membershipType = membershipType;
    
    console.log('Signing token with secret length', secret?.length);
    try {
      const token = jwt.sign(payload, secret, {
        expiresIn: '30d',
      });
      console.log(`Token generated successfully for user ${id}, length: ${token.length}`);
      return token;
    } catch (signErr) {
      console.error('Error signing JWT:', signErr);
      if (process.env.NODE_ENV !== 'production') {
        console.warn('Falling back to a development-only token string');
        return `dev-token-${payload.id}-${Date.now()}`;
      }
      return null;
    }
  } catch (error) {
    console.error('Error generating token (outer):', error);
    if (process.env.NODE_ENV !== 'production') {
      return `dev-token-${id}-${Date.now()}`;
    }
    return null;
  }
};

module.exports = generateToken;