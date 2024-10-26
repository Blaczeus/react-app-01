import React from 'react';
import profileImage from './assets/profileImage.jpg';

export default function ProfileCard ( { profileData } )
{
    const {
        firstName = 'John',
        lastName = 'Doe',
        role = 'User',
        company = 'Unknown Company',
        github = '',
        facebook = '',
        twitter = '',
        instagram = '',
    } = profileData;

    const socialLinks = {
        github: `https://github.com/${ github }`,
        facebook: `https://facebook.com/${ facebook }`,
        twitter: `https://twitter.com/${ twitter }`,
        instagram: `https://instagram.com/${ instagram }`,
    };

    return (
        <div className="max-w-sm mx-auto overflow-hidden bg-white shadow-md rounded-xl dark:bg-gray-800">
            {/* Image Section */}
            <div className="w-full h-64 overflow-hidden">
                <img
                    src={profileImage}
                    alt="profile"
                    className="object-cover w-full h-full"
                />
            </div>

            {/* Profile Info Section */}
            <div className="p-6 text-center">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    {`${ firstName } ${ lastName }`}
                </h2>
                <p className="text-gray-500 dark:text-gray-400">{role}</p>
                <p className="text-sm text-gray-400">{company}</p>
            </div>

            {/* Social Links Section */}
            <div className="flex justify-center py-4 space-x-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-gray-600 hover:text-black"
                >
                    <i className="fab fa-github"></i>
                </a>
                <a
                    href={socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-blue-600 hover:text-blue-800"
                >
                    <i className="fab fa-facebook"></i>
                </a>
                <a
                    href={socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-blue-400 hover:text-blue-600"
                >
                    <i className="fab fa-twitter"></i>
                </a>
                <a
                    href={socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-pink-600 hover:text-pink-800"
                >
                    <i className="fab fa-instagram"></i>
                </a>
            </div>
        </div>
    );
}
