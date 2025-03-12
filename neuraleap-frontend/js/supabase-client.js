/**
 * Supabase client configuration for the NeuraLeap frontend
 * This file initializes and exports the Supabase client for use throughout the frontend
 */

// Supabase URLs and Keys
const SUPABASE_URL = 'https://txggovndoxdybdquopvx.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR4Z2dvdm5kb3hkeWJkcXVvcHZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE1Nzg3MTMsImV4cCI6MjA1NzE1NDcxM30.p0l-YAdIjq-ICQNRGt5bN6YkrSB4NVDMaBUFYH4fpL4';

// Initialize the Supabase client
const supabase = supabaseJs.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

/**
 * Authentication functions
 */

// Sign up a new user
async function signUp(email, password) {
    try {
        const { user, error } = await supabase.auth.signUp({
            email,
            password,
        });
        
        if (error) throw error;
        return { user, error: null };
    } catch (error) {
        console.error('Error signing up:', error.message);
        return { user: null, error };
    }
}

// Sign in an existing user
async function signIn(email, password) {
    try {
        const { user, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });
        
        if (error) throw error;
        return { user, error: null };
    } catch (error) {
        console.error('Error signing in:', error.message);
        return { user: null, error };
    }
}

// Sign out the current user
async function signOut() {
    try {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
        return { error: null };
    } catch (error) {
        console.error('Error signing out:', error.message);
        return { error };
    }
}

// Get the current user session
function getSession() {
    return supabase.auth.getSession();
}

// Get user details from Supabase
async function getUserProfile(userId) {
    try {
        const { data, error } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', userId)
            .single();
            
        if (error) throw error;
        return { data, error: null };
    } catch (error) {
        console.error('Error fetching user profile:', error.message);
        return { data: null, error };
    }
}

// Export all the functions for use in other files
window.SupabaseClient = {
    supabase,
    signUp,
    signIn,
    signOut,
    getSession,
    getUserProfile
}; 