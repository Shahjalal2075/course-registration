import PropTypes from 'prop-types';
import {LuDollarSign} from 'react-icons/lu';
import {HiOutlineBookOpen} from 'react-icons/hi2';

const Course = ({course,handleAddToCart}) => {

    const {cover,title,description,price,credit}=course;


    return (
        <div className='p-3 bg-[#ffffff] rounded-lg'>
            <img className='w-full' src={cover}/>
            <h2 className='text-[#1C1B1B] text-lg font-semibold py-3'>{title}</h2>
            <p className='text-[#1c1b1b99] text-sm font-normal pb-3'>{description}</p>
            <div className="flex justify-between">
                <div className="flex items-center">
                    <p className='pr-2 text-[#1C1B1B] text-2xl'><LuDollarSign></LuDollarSign></p>
                    <p className='text-[#1c1b1b99] text-base font-medium'>Price: {price}</p>
                </div>
                <div className="flex items-center">
                    <p  className='pr-2 text-[#1C1B1B] text-2xl'><HiOutlineBookOpen></HiOutlineBookOpen></p>
                    <p className='text-[#1c1b1b99] text-base font-medium'>Credit: {credit}hr</p>
                </div>
            </div>
            <button onClick={() =>handleAddToCart(course)} className='rounded-lg border bg-[#2F80ED] text-[#ffffff] w-full text-lg font-medium py-1 mt-4'>Select</button>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object,
    handleAddToCart: PropTypes.func
}

export default Course;