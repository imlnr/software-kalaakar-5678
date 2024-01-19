import { EditIcon } from '@chakra-ui/icons'
import React from 'react'
import { useSelector } from 'react-redux'
import './css/profile.css'
import { useDisclosure } from '@chakra-ui/react'
import ProfileUpdate from '../components/ProfileUpdate'


const Profile = () => {
  const state = useSelector((state) => state.user);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
    <div className='user-profile'>
      <div className='inn-user-profile'>
        <div className='profile-left'>
          <div className='prof-card profile-edit-card'>
            <div className="edit-text">
              <p>Personal Details</p>
              <p onClick={onOpen}><EditIcon /></p>
            </div>
            <img src={state.avatar} alt="" />
            <h1>{state.name}</h1>
            <p>{state.email}</p>
            <p>{state.phone}</p>
            <p>@{state.username}</p>
          </div>
          <div className='prof-card profile-work-pref'>
            <div className="edit-text">
              <p>Work Preferences</p>
              <p><EditIcon /></p>
            </div>
            <p>Desire Role</p>
            <div className='role-prof'>
              <span className="material-symbols-outlined">
                person
              </span>
              <p>{"Full Stack Developer"}</p>
            </div>
          </div>

        </div>
        <div className='profile-right'>
          <h1>Experience</h1>
          <div className='prof-card courses-card'>
            <p>Courses</p>
            <div className='course-each'>
              {
                state.coursesEnrolled.map((val) => (
                  <div className='course-each-card'>
                    <p>{val.courseTitle}</p>
                    <p>{val.completed}%</p>
                    <div className='pro-bar'>
                      <div style={{width:`${val.completed}%`}} className='pro-bar-clr'></div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="prof-card experience-card">
            <p>Experience</p>
          </div>
          <div className="prof-card experience-card">
            <p>Projects</p>
          </div>
          <h1>Education</h1>
          <div className="prof-card experience-card">
            <p></p>
          </div>
        </div>
      </div>
    </div>
      <ProfileUpdate isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
      {/* <ProfileUpdate/> */}
    </>
  )
}

export default Profile