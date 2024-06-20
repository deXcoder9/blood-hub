
import { Link } from 'react-router-dom';
import doctors from '../../assets/images/doctors.jpg'
import injections from '../../assets/images/injections.jpg'

const About = () => {
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={doctors} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={injections} className="w-1/2 absolute right-5 top-1/2 rounded-lg border-8 border-white shadow-2xl" />
                </div>
                <div className='lg:w-1/2 space-y-5 p-4'>
                    <h3 className='text-3xl  underline'>About Us</h3>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                   <Link to="/blog">
                   <button className="btn btn-primary">Get More Info</button>
                   </Link>
                </div>
            </div>
        </div>
    );
};

export default About;