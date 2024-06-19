import { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import { convert } from "html-to-text";
import useAxiosPublic from "../hooks/axios public/useAxiosPublic";
import useAxiosSecure from "../hooks/axios secure/useAxiosSecure";

import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useUserdata from "../hooks/use user data/useUserdata";

const imageHostingKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const imageHostingAPI = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

const AddBlog = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const [userDetails] = useUserdata();

  const options = {
    wordwrap: 130,
    // ...
  };
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const text = convert(content, options);

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const details = {
      ...data,
      content: text,
    };
    const imageFile = { image: details.image[0] };
    const res = await axiosPublic.post(imageHostingAPI, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log(details);
    console.log(res.data);
    if (res.data.success) {
      const blog = {
        title: details.title,
        image: res.data.data.display_url,
        content: text,
        status: "draft",
      };
      const blogRes = await axiosSecure.post("/blog", blog);
      console.log(blogRes.data);
      if (blogRes.data.insertedId) {
        // show popup
        Swal.fire({
          title: "blog successfully created ",
          width: 600,
          padding: "3em",
          color: "#716add",
          background: "#fff url(/images/trees.png)",
          backdrop: `
            rgba(0,0,123,0.4)
            url("/images/nyan-cat.gif")
            left top
            no-repeat
          `,
        });
      }
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto grid place-items-center pt-20 min-h-screen">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <h4>title:</h4>
          <input
            className="pr-10 pl-2 py-2 rounded-md border-[2px] border-black"
            type="text"
            {...register("title", { required: true })}
            placeholder="Enter title name"
          />
        </div>

        <div>
          <p>Choose an image:</p>
          <input type="file" {...register("image", { required: true })} />
        </div>

        <JoditEditor
          ref={editor}
          value={content}
          tabIndex={1} // tabIndex of textarea
          onBlur={(newContent) => setContent(newContent)}
        />

        <input type="submit" className="btn btn-primary" />
        {userDetails.role === "admin" && (
          <Link to="/dashboard/content-management">
            <button className="btn btn-outline ml-5">GO Back</button>
          </Link>
        )}
        {userDetails.role === "volunteer" && (
          <Link to="/dashboard/content-management-volunteer">
            <button className="btn btn-outline ml-5">GO Back</button>
          </Link>
        )}
      </form>
    </div>
  );
};

export default AddBlog;
