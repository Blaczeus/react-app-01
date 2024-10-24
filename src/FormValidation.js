const requiredFields = [ 'firstName', 'lastName', 'role', 'company', 'github', 'facebook', 'twitter', 'instagram' ];

const fieldMessages = {
    firstName: "First name is required",
    lastName: "Last name is required",
    role: "Role is required",
    company: "Company name is required",
    github: "GitHub username is required",
    facebook: "Facebook handle is required",
    twitter: "Twitter handle is required",
    instagram: "Instagram handle is required"
};

const validate = (formData) =>
{
    const validationErrors = {};

    requiredFields.forEach( ( field ) =>
    {
        if ( !formData[ field ].trim() )
        {
            validationErrors[ field ] = fieldMessages[ field ];
        }
    } );

    return validationErrors;
};

export default validate;