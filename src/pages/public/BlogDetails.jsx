import { Link, useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/axios public/useAxiosPublic";
import { useEffect, useState } from "react";


const BlogDetails = () => {
    const {id} = useParams()
    const axiosPublic = useAxiosPublic()
    const [blog, setBlog] = useState([])

    useEffect( ()=>{
        axiosPublic.get(`/getblogdetailsbyid/${id}`)
        .then(res =>{
            setBlog(res.data)
        })
    } ,[])

    return (
        <div className="mx-auto max-w-[1000px] mt-20">
             <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={blog.image} className="w-3/4 rounded-lg shadow-2xl" />
                </div>
                <div className='lg:w-1/2 space-y-5 p-4'>
                    <h1 className="text-5xl font-bold">{blog.title}</h1>
                    <p className="py-6"> {blog.content} </p>
                    <Link to="/blog">
                    <button className="btn btn-primary">Go Back</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;