import React, { useState } from 'react';
import axios from 'axios';
import './css/adminpanel.css';
import { useToast } from '@chakra-ui/toast';
import { url } from '../Redux/action';

const AdminPanel = () => {
    const toast = useToast();
    const [dispCourse, setDisp] = useState(false);
    const [dispUser, setUsDisp] = useState(false);

    const [courseData, setCourseData] = useState({
        courseTitle: '',
        coursePrice: '',
        description: '',
        level: '',
        duration: '',
        rating: '',
        language: '',
        skills: '',
        author: '',
        courseImage: '',
        reviews: '',
    });

    const [userData, setUserData] = useState({
        name: '',
        phone: '',
        email: '',
        username: '',
        avatar: '',
        password: '',
        role: '',
    });

    const handleCourseChange = (e) => {
        const { name, value } = e.target;
        setCourseData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleUserChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleCourseSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${url}/courses`, courseData);
            toast({
                title: 'Course added successfully.',
                description: "We've successfully added the course.",
                status: 'success',
                duration: 9000,
                isClosable: true,
            });
            setCourseData({
                courseTitle: '',
                coursePrice: '',
                description: '',
                level: '',
                duration: '',
                rating: '',
                language: '',
                skills: '',
                author: '',
                courseImage: '',
                reviews: '',
            })
        } catch (error) {
            console.error('Error adding course:', error);
            // alert('Error adding course. Please try again.');
            toast({
                title: 'Something Went Wrong.',
                description: "Please check the inputs again.",
                status: 'error',
                duration: 9000,
                isClosable: true,
            });
        }
    };

    const handleUserSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${url}/users`, userData);
            toast({
                title: 'User added successfully.',
                description: "We've successfully added the user.",
                status: 'success',
                duration: 9000,
                isClosable: true,
            });
            setUserData({
                name: '',
                phone: '',
                email: '',
                username: '',
                avatar: '',
                password: '',
                role: '',
            })
        } catch (error) {
            console.error('Error adding user:', error);
            toast({
                title: 'Something Went Wrong.',
                description: "Please check the inputs again.",
                status: 'error',
                duration: 9000,
                isClosable: true,
            });
            // alert('Error adding user. Please try again.');
        }
    };

    return (
        <div className="admin-panel-mod">
            <div className="inn-admin-panel">
                <button onClick={() => { setDisp(!dispCourse); setUsDisp(false); }}>{!dispCourse ? "ADD COURSE" : "CLOSE"}</button>
                <button onClick={() => { setUsDisp(!dispUser); setDisp(false); }}>{!dispUser ? "ADD USER" : "CLOSE"}</button>
                {
                    dispCourse ?
                        <div className="admin-form-container">
                            <h2 className='hText'>Add New Course</h2>
                            <form className='admin-data-form' onSubmit={handleCourseSubmit}>
                                <label>
                                    Course Title:
                                    <input type="text" name="courseTitle" value={courseData.courseTitle} onChange={handleCourseChange} required />
                                </label>
                                <label>
                                    Course Price:
                                    <input type="number" name="coursePrice" value={courseData.coursePrice} onChange={handleCourseChange} required />
                                </label>
                                <label>
                                    Description:
                                    <textarea name="description" value={courseData.description} onChange={handleCourseChange} required />
                                </label>
                                <label>
                                    Level:
                                    <input type="text" name="level" value={courseData.level} onChange={handleCourseChange} required />
                                </label>
                                <label>
                                    Duration:
                                    <input type='number' name='duration' value={courseData.duration} onChange={handleCourseChange} required />
                                </label>
                                <label>
                                    Rating:
                                    <input type="number" name='rating' value={courseData.rating} onChange={handleCourseChange} required />
                                </label>
                                <label >
                                    Language:
                                    <input type="text" name='language' value={courseData.language} onChange={handleCourseChange} required />
                                </label>
                                <label >
                                    Skills:
                                    <input type="text" name='skills' value={courseData.skills} onChange={handleCourseChange} required />
                                </label>
                                <label >
                                    Author:
                                    <input type="text" name='author' value={courseData.author} onChange={handleCourseChange} required />
                                </label>
                                <label >
                                    CourseImage:
                                    <input type="text" name='courseImage' value={courseData.courseImage} onChange={handleCourseChange} required />
                                </label>
                                {/* Add more input fields for other properties */}
                                <button type="submit">Add Course</button>
                            </form>
                        </div> : null
                }
                {
                    dispUser ?
                        <div className="admin-form-container">
                            <h2 className='hText'>Add New User</h2>
                            <form className='admin-data-form' onSubmit={handleUserSubmit}>
                                <label>
                                    Name:
                                    <input type="text" name="name" value={userData.name} onChange={handleUserChange} required />
                                </label>
                                <label>
                                    Phone:
                                    <input type="text" name="phone" value={userData.phone} onChange={handleUserChange} required />
                                </label>
                                <label>
                                    Email:
                                    <input type="email" name="email" value={userData.email} onChange={handleUserChange} required />
                                </label>
                                <label>
                                    Username:
                                    <input type="text" name="username" value={userData.username} onChange={handleUserChange} required />
                                </label>
                                <label>
                                    Avatar:
                                    <input type="text" name="avatar" value={userData.avatar} onChange={handleUserChange} required />
                                </label>
                                <label>
                                    Password:
                                    <input type="password" name="password" value={userData.password} onChange={handleUserChange} required />
                                </label>
                                <label>
                                    Role:
                                    <input type="text" name="role" value={userData.role} onChange={handleUserChange} required />
                                </label>

                                <button type="submit">Add User</button>
                            </form>
                        </div> : null
                }
            </div>
        </div>
    );
};

export default AdminPanel;
