import React from 'react';

const ProfileCard = ( { profileData } ) =>
{
    const { username, firstName, lastName, email, about } = profileData;

    return (
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Profile Card</h2>
            <p className="mt-1 text-gray-600 dark:text-gray-400">This is your profile information:</p>
            <ul className="mt-4 space-y-2">
                <li><strong>Username:</strong> {username}</li>
                <li><strong>First Name:</strong> {firstName}</li>
                <li><strong>Last Name:</strong> {lastName}</li>
                <li><strong>Email:</strong> {email}</li>
                <li><strong>About:</strong> {about}</li>
            </ul>
        </div>
    );
};

export default ProfileCard;
