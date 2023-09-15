import PropTypes from 'prop-types';

const Cart = ({cart,idx}) => {

    const {title}=cart;


    return (
        <div>
            <h2 className='text-[#1c1b1b99] text-base font-normal mb-2'>{++idx}. {title}</h2>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.object,
    idx: PropTypes.number
}

export default Cart;