import React, { useState } from 'react';
import validate from './FormValidation';

const ProfileForm = ( { onSubmit } ) =>
{
    const [ formData, setFormData ] = useState( {
        firstName: '',
        lastName: '',
        role: '',
        company: '',
        github: '',
        facebook: '',
        twitter: '',
        instagram: '',
    } );

    const [ errors, setErrors ] = useState( {} );    

    const handleChange = ( e ) =>
    {
        const { name, value } = e.target;
        setFormData( { ...formData, [ name ]: value } );
        console.log( formData );
    }

    const handleSubmit = ( e ) =>
    {
        let validationErrors = validate(formData);

        if ( Object.keys( validationErrors ).length > 0 )
        {
            setErrors( validationErrors );
            return;
        }
        setErrors( {} );
        onSubmit( formData );

        // console.log( formData );
    };

    return (
        <form
            onSubmit={( e ) =>
            {
                e.preventDefault();
                handleSubmit( e );
            }}
            className="w-full max-w-3xl p-10 bg-white shadow-lg dark:bg-gray-800 rounded-2xl"
        >
            <h2 className="text-4xl font-semibold tracking-tight text-center text-gray-900 dark:text-white sm:text-5xl">
                Career Profile
            </h2>
            <p className="mt-2 text-sm leading-8 text-center text-gray-600 dark:text-gray-400">
                Showcase your career profile
            </p>
            <div className="mt-12 space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

                    <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-900 dark:text-white">
                            First Name
                        </label>
                        <input
                            id="firstName"
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="block w-full mt-1 text-sm border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-900 dark:text-white placeholder:text-sm"
                            placeholder="John"
                        />
                        {errors.firstName && <span className="text-red-500">{errors.firstName}</span>}
                    </div>

                    <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-900 dark:text-white">
                            Last Name
                        </label>
                        <input
                            id="lastName"
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="block w-full mt-1 text-sm border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-900 dark:text-white placeholder:text-sm"
                            placeholder="Doe"
                        />
                        {errors.lastName && <span className="text-red-500">{errors.lastName}</span>}
                    </div>

                    <div>
                        <label htmlFor="role" className="block text-sm font-medium text-gray-900 dark:text-white">
                            Current Role
                        </label>
                        <input
                            id="role"
                            type="text"
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            required
                            className="block w-full mt-1 text-sm border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-900 dark:text-white placeholder:text-sm"
                            placeholder="Backend Developer"
                        />
                        {errors.role && <span className="text-red-500">{errors.role}</span>}
                    </div>

                    <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-900 dark:text-white">
                            Company/Organization
                        </label>
                        <input
                            id="company"
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            required
                            className="block w-full mt-1 text-sm border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-900 dark:text-white placeholder:text-sm"
                            placeholder="Nervego"
                        />
                        {errors.company && <span className="text-red-500">{errors.company}</span>}
                    </div>

                    {/* GitHub Profile Field */}
                    <div className='sm:col-span-2'>
                        <label htmlFor="github" className="block text-sm font-medium text-gray-900 dark:text-white">
                            GitHub Profile
                        </label>
                        <input
                            id="github"
                            type="text"
                            name="github"
                            value={formData.github}
                            onChange={handleChange}
                            required
                            className="block w-full mt-1 text-sm border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-900 dark:text-white placeholder:text-sm"
                            placeholder="Enter Github username"
                        />
                        {errors.github && <span className="text-red-500">{errors.github}</span>}
                    </div>
                </div>
                {/* Social Media Fields */}
                <div className="pb-12 border-b border-gray-900/10">

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                        <div>
                            <label htmlFor="facebook" className="block text-sm font-medium text-gray-900 dark:text-white">
                                Facebook Handle
                            </label>
                            <input
                                id="facebook"
                                type="text"
                                name="facebook"
                                value={formData.facebook}
                                onChange={handleChange}
                                required className="block w-full mt-1 text-sm border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-900 dark:text-white placeholder:text-xs"
                                placeholder="Enter Facebook handle"
                            />
                            {errors.facebook && <span className="text-red-500">{errors.facebook}</span>}
                        </div>

                        <div>
                            <label htmlFor="twitter" className="block text-sm font-medium text-gray-900 dark:text-white">
                                Twitter Handle
                            </label>
                            <input
                                id="twitter"
                                type="text"
                                name="twitter"
                                value={formData.twitter}
                                onChange={handleChange}
                                required className="block w-full mt-1 text-sm border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-900 dark:text-white placeholder:text-xs"
                                placeholder="Enter Twitter handle"
                            />
                            {errors.twitter && <span className="text-red-500">{errors.twitter}</span>}
                        </div>

                        <div>
                            <label htmlFor="instagram" className="block text-sm font-medium text-gray-900 dark:text-white">
                                Instagram Handle
                            </label>
                            <input
                                id="instagram"
                                type="text"
                                name="instagram"
                                value={formData.instagram}
                                onChange={handleChange}
                                required className="block w-full mt-1 text-sm border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-900 dark:text-white placeholder:text-xs"
                                placeholder="Enter Instagram handle"
                            />
                            {errors.instagram && <span className="text-red-500">{errors.instagram}</span>}
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-end mt-6">
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
