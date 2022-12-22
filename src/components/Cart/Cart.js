import './Cart.css';
import myImg from '../../images/my-img.jpg';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
const Cart = ({cart}) => {


  const timer = [10, 20, 30, 40, 50];
  const [time, setTime] = useState(0);
  const handleClick = (t) => {
    localStorage.setItem('timer', t);
    setTime(t);
  }
  
  useEffect(()=>{
    const getTimer = localStorage.getItem('timer');
    if(getTimer){
        setTime(getTimer);
    }
  },[]);

  const notify = () => toast('Well Done! See You Next Day.');

    return (
        <div>
             <div className='info-container'>
                    <img className='my-img' src={myImg} alt="" />
                    <h4>Mahbuba Akhter</h4>
                </div>
                <div className='personal-info'>
                    <div className='weight'>
                    <h2>53 <small>kg</small></h2>
                    <p>Weight</p>
                    </div>
                    <div>
                        <h2>6.3</h2>
                        <p>Height</p>
                    </div>
                    <div>
                        <h2>24</h2>
                        <p>yrs</p>
                    </div>
                </div>
                <h3 className='cart-headings'>Add a Break</h3>
                <div className='timer'>
                    {
                        timer.map(t => <button onClick={()=> handleClick(t)} className='btn-timer'>{t}s</button> )
                    }
                </div>
                <div>
                <h3 className='cart-headings'>Exercise Details</h3>
                <div className='exercise-time'>
                    <h3>Exercise Time: {cart} Minutes</h3>
                </div>
                <div className='break-time'>
                    <h3>Break Time: {time} Seconds</h3>
                </div>
            </div>
            <div>
            <button onClick={notify} className='btn-activity'>Activity Completed</button>
            <Toaster />
            </div>
            </div>
    );
};

export default Cart;