import React, { useState } from 'react';
import CustomButton from '../components/CustomButton';
import InputField from '../components/InputField';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    bio: 'Software Developer',
    location: 'New York, USA'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle profile update logic here
    console.log('Profile updated:', userData);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-2xl font-bold text-gray-900">Profile</h3>
            <p className="mt-1 text-sm text-gray-600">
              Manage your personal information
            </p>
          </div>

          <div className="border-t border-gray-200">
            <form onSubmit={handleSubmit} className="px-4 py-5 sm:p-6">
              <div className="space-y-6">
                <InputField
                  label="Full Name"
                  name="name"
                  value={userData.name}
                  onChange={handleChange}
                  disabled={!isEditing}
                />

                <InputField
                  label="Email"
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                  disabled={!isEditing}
                />

                <InputField
                  label="Bio"
                  name="bio"
                  value={userData.bio}
                  onChange={handleChange}
                  disabled={!isEditing}
                />

                <InputField
                  label="Location"
                  name="location"
                  value={userData.location}
                  onChange={handleChange}
                  disabled={!isEditing}
                />

                <div className="flex justify-end space-x-4">
                  {isEditing ? (
                    <>
                      <CustomButton
                        type="button"
                        variant="secondary"
                        onClick={() => setIsEditing(false)}
                      >
                        Cancel
                      </CustomButton>
                      <CustomButton type="submit">
                        Save Changes
                      </CustomButton>
                    </>
                  ) : (
                    <CustomButton
                      type="button"
                      onClick={() => setIsEditing(true)}
                    >
                      Edit Profile
                    </CustomButton>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 