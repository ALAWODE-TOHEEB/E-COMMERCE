import express from "express";
import mongoose from "mongoose";
import { addBlog, deleteBlog, getAllBlogs, getById, updateBlog } from "./controllers/Blog-controllers.js";
import { getAllUser, logIn, signUp } from "./controllers/User-controller.js";


const app = express();
app.use(express.json());

// USER-APIs
app.get("/api/users", getAllUser);
app.post("/api/signup", signUp);
app.post("/api/login", logIn);



// BLOG-APIs
app.get("/api/blogs", getAllBlogs);
app.post("/api/add", addBlog);
app.put("/api/update/:id", updateBlog);
app.get("/api/blog/:id", getById);
app.delete("/:id", deleteBlog);

const PORT = 4000;
await mongoose.connect("mongodb+srv://alawodetoheeb8:Tosibey2@cluster0.vlpywiq.mongodb.net/?retryWrites=true&w=majority"
);

console.log("Mongo connection is successful");


app.use("/", (req, res) => {
    res.send("i love coding")
});




app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})