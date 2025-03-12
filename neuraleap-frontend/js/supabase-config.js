// Supabase Configuration File
// This file contains configuration for both development and production environments

// Production configuration (neuraleap.com.au)
const PRODUCTION = {
    supabaseUrl: 'https://txggovndoxdybdquopvx.supabase.co',
    supabaseKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR4Z2dvdm5kb3hkeWJkcXVvcHZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE1Nzg3MTMsImV4cCI6MjA1NzE1NDcxM30.p0l-YAdIjq-ICQNRGt5bN6YkrSB4NVDMaBUFYH4fpL4',
    siteUrl: 'https://neuraleap.com.au',
    redirectUrl: 'https://neuraleap.com.au/pages/login.html'
};

// Development configuration (localhost)
const DEVELOPMENT = {
    supabaseUrl: 'http://127.0.0.1:54321',
    supabaseKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImV4cCI6MTk4MzgxMjk5Nn0.EGIM96RAZx35lJzdJsyH-qQwv8Hdp7fsn3W0YpN81IU',
    siteUrl: 'http://localhost:9000',
    redirectUrl: 'http://localhost:9000/pages/login.html'
};

// Determine which configuration to use based on the current URL
const isProduction = window.location.hostname === 'neuraleap.com.au' || 
                     window.location.hostname === 'www.neuraleap.com.au';

// Export the appropriate configuration
const supabaseConfig = isProduction ? PRODUCTION : DEVELOPMENT;

// For easier access in other files
export default supabaseConfig; 