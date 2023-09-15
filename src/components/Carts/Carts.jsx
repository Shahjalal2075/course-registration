import PropTypes from 'prop-types';
import Cart from '../Cart/Cart';

const Carts = ({carts}) => {

    const a=5;


    return (
        <div className="md:w-1/4 lg:w-1/4 px-3">
            <div className="bg-[#fff] rounded-lg p-4">
                <h2 className="text-[#2F80ED] text-lg font-bold py-3">Credit Hour Remaining 7 hr</h2>
                <hr className="my-3"/>
                <div className="">
                    <h2 className="text-[#1C1B1B] text-xl font-bold pb-5">Course Name</h2>
                    {
                        carts.map((cart,idx)=><Cart
                            key={cart.id}
                            cart={cart}
                            idx={idx}
                        ></Cart>)
                    }
                </div>
                <hr className="my-3" />
                <h2 className="text-[#1c1b1bcc] text-base font-medium">Total Credit Hour : 13</h2>
                <hr className="my-3" />
                <h2 className="text-[#1c1b1bcc] text-base font-semibold">Total Price : 48000 USD</h2>
            </div>
        </div>
    );
};

Carts.propTypes = {
    carts: PropTypes.array,
}

export default Carts;