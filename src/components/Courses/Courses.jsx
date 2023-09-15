import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import "./Courses.css";

const Courses = () => {

    const [courses,setCourses]=useState([]);

    useEffect( () => {
        fetch('coursedetails.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])

    return (
        <div className="lg:w-3/4 md:w-3/4">
            <div className="course-container">
            {
                courses.map(course => <Course 
                    key={course.id}
                    course={course}
                >
                </Course>)
            }
            </div>
        </div>
    );
};

export default Courses;