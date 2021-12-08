import { posts } from "../../../data";

//api fictive

export default function handler(req, res) {
  if (req.method === "GET"){
    res.status(200).json(posts);
  }else if (req.method === "POST"){
    const post = req.body.newPostSubmit
    console.log("post api : " + post)
    const newPost = {
      "id" : 3,
      "title" : post.title,
            "description" : post.description,
            "postNature" : post.postNature,
            "price" : post.price,
            "image" : post.image,
            "campus" : post.campus,
    }
    console.log(newPost)
    posts.push(newPost);
    res.status(201).json(newPost)
  }
}
