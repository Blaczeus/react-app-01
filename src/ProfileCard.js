import React from 'react';
import
{
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
} from "@material-tailwind/react";

export function ProfileCard ( { profileData } )
{

    const {
        firstName = "John",
        lastName = "Doe",
        role = "User",
        company = "Unknown Company",
        github = "",
        facebook = "",
        twitter = "",
        instagram = ""
    } = profileData;

    // Construct URLs based on the provided input
    const socialLinks = {
        github: `https://github.com/${ github }`,
        facebook: `https://facebook.com/${ facebook }`,
        twitter: `https://twitter.com/${ twitter }`,
        instagram: `https://instagram.com/${ instagram }`,
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Profile Card</h2>
            <p className="mt-1 text-gray-600 dark:text-gray-400">This is your profile information:</p>
            <ul className="mt-4 space-y-2">
                <li><strong>First Name:</strong> {firstName}</li>
                <li><strong>Last Name:</strong> {lastName}</li>
                <li><strong>Role:</strong> {role}</li>
                <li><strong>Company:</strong> {company}</li>
            </ul>
        </div>
    );
}

export default ProfileCard;
