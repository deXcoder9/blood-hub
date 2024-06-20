import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/axios public/useAxiosPublic";
import { Link } from "react-router-dom";


const PublicBlog = () => {
    const axiosPublic =useAxiosPublic()
    const [allBlogs, setAllBlogs]= useState([])

    useEffect( ()=>{
        axiosPublic.get("/blogs")
        .then(res => {
            setAllBlogs(res.data)
        })
    } ,[])



    return (
        <div className="max-w-[1000px] mx-auto mt-10 min-h-screen">
             <div className="flex justify-between items-center pb-4 font-bold">
          <img src="" alt="" />
          <h4>title</h4>
          <p>content</p>
          <p></p>
        </div>
        <hr />
            {allBlogs.map((blog) => (
          <div key={blog._id} className="flex justify-between items-center my-4">
            <img
              src={blog.image}
              className="max-h-[120px] max-w-[200px]"
              alt=""
            />
            <h1 className="px-6">{blog.title}</h1>
            <p>{blog.content}</p>
           <Link to={`/public-blog-details/${blog._id}`}>
           <button className="btn btn-primary btn-xs">View Details</button>
           </Link>
            
          </div>
        ))}
        </div>
    );
};

export default PublicBlog;