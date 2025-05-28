'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import Cookies from 'js-cookie';

interface User {
  email: string;
  name: string;
  location: {
    country: string;
    city: string;
    coordinates?: {
      latitude: number;
      longitude: number;
    };
  };
  phoneNumber?: string;
  organization?: string;
  role?: string;
  interests?: string[];
  profilePicture?: string;
  authProvider: 'email' | 'google';
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: Omit<User, 'authProvider'> & { password: string }) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  registerWithGoogle: () => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  // Load user from cookie on initial load
  useEffect(() => {
    const userCookie = Cookies.get('user');
    if (userCookie) {
      setUser(JSON.parse(userCookie));
    }
  }, []);

  const login = async (email: string, password: string) => {
    // For demo purposes, we'll use hardcoded credentials
    if (email === 'test@example.com' && password === 'password123') {
      const userData: User = {
        email: 'test@example.com',
        name: 'Test User',
        location: {
          country: 'United States',
          city: 'New York',
          coordinates: {
            latitude: 40.7128,
            longitude: -74.0060
          }
        },
        phoneNumber: '+1234567890',
        organization: 'Test Organization',
        role: 'User',
        interests: ['Climate Change', 'Sustainability'],
        authProvider: 'email'
      };
      setUser(userData);
      Cookies.set('user', JSON.stringify(userData), { expires: 7 });
    } else {
      throw new Error('Invalid credentials');
    }
  };

  const register = async (userData: Omit<User, 'authProvider'> & { password: string }) => {
    // In a real app, this would make an API call to register the user
    const { password, ...userInfo } = userData;
    const newUser: User = {
      ...userInfo,
      authProvider: 'email'
    };
    setUser(newUser);
    Cookies.set('user', JSON.stringify(newUser), { expires: 7 });
  };

  const loginWithGoogle = async () => {
    // In a real app, this would integrate with Google OAuth
    // For demo purposes, we'll simulate a Google login
    const userData: User = {
      email: 'google.user@gmail.com',
      name: 'Google User',
      location: {
        country: 'United States',
        city: 'San Francisco',
        coordinates: {
          latitude: 37.7749,
          longitude: -122.4194
        }
      },
      profilePicture: 'https://lh3.googleusercontent.com/a/default-user',
      authProvider: 'google'
    };
    setUser(userData);
    Cookies.set('user', JSON.stringify(userData), { expires: 7 });
  };

  const registerWithGoogle = async () => {
    // In a real app, this would integrate with Google OAuth
    // For demo purposes, we'll simulate a Google registration
    await loginWithGoogle();
  };

  const logout = () => {
    setUser(null);
    Cookies.remove('user');
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      login, 
      register, 
      loginWithGoogle, 
      registerWithGoogle, 
      logout 
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 