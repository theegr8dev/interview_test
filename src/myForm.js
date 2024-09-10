// src/MyForm.js
import React, { useState, useEffect } from 'react';
import GetFormData from './getFormData';

const MyForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        otherName: '',
        dateOfBirth: '',
        gender: '',
        type: '',
        homeAddress: '',
        stateOfOrigin: '',
        local_government_area: '',
        nationality: '',
        parent: '',
        religion: '',
        profile_image: '',
        class_assigned: '',
    });
    const [postedData, setPostedData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            const reponse = await fetch(
                'https://verbumdei-management-system-vms.onrender.com/student/students',
                {
                    method: 'POST',
                    body: JSON.stringify(formData),
                }
            );
            if (!reponse.ok) {
                throw new Error('Failed to post data');
            }
            const result = await reponse.json();
            console.log(result);
            setPostedData(result);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="otherName">Other Name:</label>
                    <input
                        type="text"
                        id="otherName"
                        name="otherName"
                        value={formData.otherName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="dateOfBirth">Date of Birth:</label>
                    <input
                        type="date"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="gender">Gender:</label>
                    <select
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                    >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="homeAddress">Home Address:</label>
                    <textarea
                        id="homeAddress"
                        name="homeAddress"
                        value={formData.homeAddress}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="stateOfOrigin">State of Origin:</label>
                    <input
                        type="text"
                        id="stateOfOrigin"
                        name="stateOfOrigin"
                        value={formData.stateOfOrigin}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="profileImage">Profile Image:</label>
                    <input
                        type="file"
                        id="profileImage"
                        name="profileImage"
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="local_government_area">
                        Local Government:
                    </label>
                    <input
                        type="text"
                        id="local_government_area"
                        name="local_government_area"
                        value={formData.local_government_area}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="nationality">Nationality:</label>
                    <input
                        type="text"
                        id="nationality"
                        name="nationality"
                        value={formData.nationality}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="parent">Parent:</label>
                    <input
                        type="text"
                        id="parent"
                        name="parent"
                        value={formData.parent}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="religion">Religion:</label>
                    <input
                        type="text"
                        id="religion"
                        name="religion"
                        value={formData.religion}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="class_assigned">Class Assigned:</label>
                    <input
                        type="text"
                        id="class_assigned"
                        name="class_assigned"
                        value={formData.class_assigned}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            {loading && <p>Posting data...</p>}
            {error && <p>Error: {error}</p>}

            {postedData && (
                <div>
                    <ul>
                        {postedData.map(
                            (
                                {
                                    first_name,
                                    date_of_birth,
                                    profile_image,
                                    registration_id,
                                },
                                item
                            ) => (
                                <li key={item.id}>
                                    <img src={profile_image} alt="img" />
                                    <p>Registration no: {registration_id} </p>
                                    <p>Name: {first_name}</p>
                                    <p>DOB: {date_of_birth}</p>
                                </li>
                            )
                        )}
                    </ul>
                </div>
            )}
        </>
    );
};

export default MyForm;
