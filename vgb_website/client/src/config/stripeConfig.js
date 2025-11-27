import { loadStripe } from '@stripe/stripe-js';

// Replace with your Stripe publishable key
// In a production environment, use environment variables for this
const stripePublishableKey = 'pk_test_51R2ByyP0B98VDejv3JeDtTluacbmCjxwjAiIdOKqy5M573ZlVVf0288jY9ZIf9UE9m5eYIY6ZXk8zJDtP7rj2xOY00U9suF3c1';

const stripePromise = loadStripe(stripePublishableKey);

export default stripePromise;