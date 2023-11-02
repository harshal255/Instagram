import mobilescreen from '../assets/images/mobilescreen.png';
import screen1 from '../assets/images/screen1.png';
const Mobilescreen = () => {
    return (
        <div className='relative'>
            <img src={mobilescreen} alt="mobilescreen" />
            <img src={screen1} alt="screen1" className='absolute top-6 left-40'/>
        </div>
    )
}

export default Mobilescreen