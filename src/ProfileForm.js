import React, { useState } from 'react';

const ProfileForm = ( { onSubmit } ) =>
{
    const [ formData, setFormData ] = useState( {
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        about: ''
    } );

    const [ errors, setErrors ] = useState( {} );

    const handleChange = ( event ) =>
    {
        const { name, value } = event.target;
        setFormData( { ...formData, [ name ]: value } );
    };

    const validate = () =>
    {
        let validationErrors = {};
        if ( !formData.username ) validationErrors.username = 'Username is required';
        if ( !formData.firstName ) validationErrors.firstName = 'First name is required';
        if ( !formData.lastName ) validationErrors.lastName = 'Last name is required';
        if ( !formData.email || !/\S+@\S+\.\S+/.test( formData.email ) ) validationErrors.email = 'A valid email is required';
        return validationErrors;
    };

    const handleSubmit = ( e ) =>
    {
        e.preventDefault();
        const validationErrors = validate();
        if ( Object.keys( validationErrors ).length > 0 )
        {
            setErrors( validationErrors );
        } else
        {
            setErrors( {} );
            onSubmit( formData );
            console.log( 'Form Data Submitted:', formData );
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-3xl p-10 bg-white shadow-lg dark:bg-gray-800 rounded-2xl">
            <div className="space-y-6">
                <div className="pb-6 border-b border-gray-300 dark:border-gray-700">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">Profile</h2>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        This information will be displayed publicly, so be mindful of what you share.
                    </p>
                    <div className="mt-4">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-900 dark:text-white">
                            Username
                        </label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            value={formData.username}
                            onChange={handleChange}
                            required
                            autoComplete="username"
                            className="block w-full mt-1 border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                        />
                        {errors.username && <span className="text-red-500">{errors.username}</span>}
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-900 dark:text-white">
                            First Name
                        </label>
                        <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="block w-full mt-1 border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                        />
                        {errors.firstName && <span className="text-red-500">{errors.firstName}</span>}
                    </div>

                    <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-900 dark:text-white">
                            Last Name
                        </label>
                        <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="block w-full mt-1 border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                        />
                        {errors.lastName && <span className="text-red-500">{errors.lastName}</span>}
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white">
                            Email Address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="block w-full mt-1 border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                        />
                        {errors.email && <span className="text-red-500">{errors.email}</span>}
                    </div>
                </div>

                <div>
                    <label htmlFor="about" className="block text-sm font-medium text-gray-900 dark:text-white">
                        About
                    </label>
                    <textarea
                        id="about"
                        name="about"
                        value={formData.about}
                        onChange={handleChange}
                        rows={4}
                        className="block w-full mt-1 border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                        placeholder="Tell us something about yourself"
                    />
                </div>

                <div className="flex items-center justify-end">
                    <button
                        type="submit"
                        className="px-5 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-500"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </form>
    );
};

export default ProfileForm;
