'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Get the user data from the session/local storage
        const storedUser = localStorage.getItem('user');
        if (!storedUser) {
          router.push('/');
          return;
        }

        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Error fetching user data:', error);
        router.push('/');
      }
    };

    fetchUserData();
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    router.push('/');
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-blue-500 px-6 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-white">Profile</h1>
              <button
                onClick={handleLogout}
                className="bg-white text-blue-500 px-4 py-2 rounded-lg hover:bg-blue-50"
              >
                Logout
              </button>
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">Personal Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-600">Name</label>
                    <div className="mt-1 text-gray-900">{user.name}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600">Email</label>
                    <div className="mt-1 text-gray-900">{user.email}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600">Age</label>
                    <div className="mt-1 text-gray-900">{user.age}</div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">Professional Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-600">Occupation</label>
                    <div className="mt-1 text-gray-900">{user.occupation}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600">Bio</label>
                    <div className="mt-1 text-gray-900">{user.bio}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 