import { BsPlusCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import useBlogs from "../../hooks/useBlogs";
import { useState } from "react";


const BlogVolunteer = () => {

    const [selectedValue, setSelectedValue] = useState("default");
    const [blogs, refetch] = useBlogs(selectedValue);

    const handleSelection = (event) => {
        refetch();
        setSelectedValue(event.target.value);
      };
    return (
        <div className=" mx-auto flex flex-col  ">
      <h1 className="self-center text-4xl font-bold mb-5">
        Blog Page (0{blogs.length}){" "}
      </h1>
      <div className=" self-end mb-10 ">
        <Link to="/dashboard/content-management/add-blog">
          <button className="btn btn-primary ">
            {" "}
            <BsPlusCircleFill /> Add Blog
          </button>
        </Link>
      </div>
      <div>
        <div className="text-center mb-7">
          <select
            className="select select-primary w-full max-w-xs"
            value={selectedValue}
            onChange={handleSelection}
          >
            <option value="default">default</option>
            <option value="draft">draft</option>
            <option value="publish">published</option>
          </select>
        </div>
        <div className="flex justify-between items-center pb-4 font-bold">
          <img src="" alt="" />
          <h4>title</h4>
          <p>content</p>
        </div>
        <hr />
        {blogs.map((blog) => (
          <div key={blog._id} className="flex justify-between items-center">
            <img
              src={blog.image}
              className="max-h-[120px] max-w-[200px]"
              alt=""
            />
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
          </div>
        ))}
      </div>
    </div>
    );
};

export default BlogVolunteer;