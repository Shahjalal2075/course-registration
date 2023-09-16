import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import "./Courses.css";

const Courses = ({handleAddToCart}) => {

    const [courses,setCourses]=useState([]);

    useEffect( () => {
        fetch('coursedetails.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, []);

    return (
        <div className="lg:w-3/4">
            <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4  md:grid-cols-2 md:gap-4">
            {
                courses.map(course => <Course 
                    key={course.id}
                    course={course}
                    handleAddToCart={handleAddToCart}
                >
                </Course>)
            }
            </div>
        </div>
    );
};

Courses.propTypes = {
    handleAddToCart: PropTypes.func
}

export default Courses;