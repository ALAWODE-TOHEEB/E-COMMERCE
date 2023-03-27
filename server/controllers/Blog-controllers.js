import Blog from "../models/Blog.js";

export const getAllBlogs = async (req, res, next) => {
    let blogs;
    try {
       blogs = await Blog.find(); 
    } catch (error) {
        return console.log(error);
    }
    if(!blogs) {
        return res.status.json({message: "No Blogs Found"});
    }
    return res.status(200).json({blogs})
};

export const addBlog = async (req, res, next) => {
    const {title, description, image, user} = req.body;
    const blog = new Blog({
        title: title,
        description: description,
        image: image,
        user: user,
    });
    try {
        await blog.save();
    } catch (error) {
        return console.log(error);
    }
    return res.status(200).json({blog});
};

export const updateBlog = async (req, res, next) => {
    const {title, description} = req.body;
    const  blogId  = req.params.id;
    let blog;
    try { blog = await Blog.findByIdAndUpdate(blogId, {
        title: title,
        description: description,
    })
    } catch (error) {
        return console.log(error);
    } 
    if (!blog) {
        return res.status(500).json({message: "Unable To Update The Blog"});
    }
    return res.status(200).json({blog});
};

export const getById = async (req, res, next) => {
    const id = req.params.id;
    let blog;
    try {
        blog = await Blog.findById(id);
    } catch (error) {
      return  console.log(error);
    }
    if (!blog) {
        return res.status(404).json({message: "No Blog Found"});
    }
    return res.status(200).json({blog});
};


export const deleteBlog = async (req, res, next) => {
    const id = req.params.id;
    let blog;
    try {
        blog = await Blog.findByIdAndRemove(id);
    } catch (error) {
        return console.log(error);
    }
    if (!blog) {
        return res.status(500).json({message: "Unable To Delete"});
    }
    return res.status(200).json({message: "Deleted Succesfully"});
}