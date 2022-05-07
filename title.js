import React, { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import { useDispatch } from "react-redux";
import axios from "axios";
import { postArticle } from "../actions/articleAction";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [imagedescription, setImagedescription] = useState("");
  const [iframeLink, setIframeLink] = useState("");
  const [creatorname, setCreatorname] = useState("");
  const [uploading, setUploading] = useState(false);

  const dispatch = useDispatch();

  const uploadFileHnadler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);
    try {
      const config = {
        header: {
          "Content-Type": "multipart/form-data",
        },
      };
      const { data } = await axios.post(
        "http://localhost:5000/backend/upload",
        formData,
        config
      );
      setImage(data);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

const validate=()=>{
  let isError=false;
  let errors={}
  if(title<5){
    errors.title="title must be greator than 5 "
  }

  return isError
}




  const formSubmit = async (e) => {
    e.preventDefault();
    const err = validate();
    if (!err) {
      const data = {
        title,
        image,
        description,
        category,
        imagedescription,
        iframeLink,
        creatorname,
      };
      console.log(data);
      const res = await dispatch(postArticle(data));
      if (res.status) {
        alert(res.message);
        setTitle("");
        setDescription("");
        setImage("");
      }
    }
  };

  return (
    <div className="blogdetail">
      <div className="ui container ">
        <h1>Blog detail Page</h1>
        <form className="ui form" onSubmit={formSubmit}>
          <div className="field">
            <label>Blog Title</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter title here"
            />
          </div>
          <div className="field">
            <label>Blog Details</label>
            <textarea
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description about blog here ....."
            ></textarea>
          </div>
          <div className="field">
            <select onChange={(e) => setCategory(e.target.value)}>
              <option value="" disabled>
                Category
              </option>
              <option value="Politics">Politics</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Entertainment">Tech</option>
              <option value="Entertainment">Religious</option>
            </select>
          </div>
          <div className="field">
            <label>Image</label>
            <input
              type="text"
              name="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="enter image url"
            />
            <input
              type="file"
              name="image"
              onChange={uploadFileHnadler}
              placeholder="choose image file"
            />
            {uploading && <Spinner />}
          </div>
          <div className="field">
            <label>Image description</label>
            <input
              type="text"
              name="imageDescription"
              value={imagedescription}
              onChange={(e) => setImagedescription(e.target.value)}
              placeholder="write something about image here..."
            />
          </div>
          <div className="field">
            <label>Iframe Link</label>
            <input
              type="text"
              name="iframeLink"
              value={iframeLink}
              onChange={(e) => setIframeLink(e.target.value)}
              placeholder="Paste the link here...."
            />
          </div>
          <div className="field">
            <label>Your Name</label>
            <input
              type="text"
              name="creatorName"
              value={creatorname}
              onChange={(e) => setCreatorname(e.target.value)}
              placeholder="Enter yout name here..."
            />
          </div>

          <input value="submit" className="ui button" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddBlog;