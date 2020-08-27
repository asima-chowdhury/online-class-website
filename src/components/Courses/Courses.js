import React, { useState } from 'react';
import fakeData from '../../fakeData'
import SingleCourse from '../SingleCourse/SingleCourse';
import AddedCourse from '../AddedCourse/AddedCourse';
import './Courses.css';

const Course = () => {
    const courseList = fakeData;
    // console.log(courseList)
    const [courses, setCourses] = useState(courseList);
    const [addedCourse, setAddedCourse] = useState([]);

    const handlerAddCourse =(course) =>{
        console.log('clicked', course);
        const newAddedCourse = [...addedCourse, course];
        setAddedCourse(newAddedCourse);
    }

    return (
        <div className="container d-flex">
            <div className="col-md-9 my-3 course-container">
                    <div className="row">
                        {
                            courses.map(course => <SingleCourse course={course} handlerAddCourse= {handlerAddCourse} key={course.id}></SingleCourse>)
                        }
                    </div>
            </div>
            <div className="addedCourse-container col-md-2">
                <AddedCourse addedCourse={addedCourse}></AddedCourse>
            </div>
        </div>
    );
};

export default Course;