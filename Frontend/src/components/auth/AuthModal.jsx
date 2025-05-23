import React from 'react';
import PropTypes from 'prop-types';
import { X } from 'lucide-react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import LinkedInButton from './LinkedInButton';

export default function AuthModal({ isOpen, onClose, initialView = 'login' }) {
  const [view, setView] = React.useState(initialView);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="fixed inset-0 bg-black bg-opacity-25 transition-opacity" onClick={onClose} />
        
        <div className="relative w-full max-w-md transform rounded-lg bg-white p-6 text-left shadow-xl transition-all">
          <div className="absolute right-4 top-4">
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900">
              {view === 'login' ? 'Welcome Back' : 'Create Account'}
            </h2>
          </div>

          <div className="space-y-4">
            <LinkedInButton />
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">Or continue with email</span>
              </div>
            </div>

            {view === 'login' ? (
              <LoginForm onSuccess={onClose} />
            ) : (
              <SignupForm onSuccess={onClose} />
            )}
          </div>

          <div className="mt-4 text-center text-sm">
            {view === 'login' ? (
              <p>
                Don't have an account?{' '}
                <button
                  onClick={() => setView('signup')}
                  className="text-indigo-600 hover:text-indigo-500 font-medium"
                >
                  Sign up
                </button>
              </p>
            ) : (
              <p>
                Already have an account?{' '}
                <button
                  onClick={() => setView('login')}
                  className="text-indigo-600 hover:text-indigo-500 font-medium"
                >
                  Log in
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

AuthModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  initialView: PropTypes.oneOf(['login', 'signup']),
};