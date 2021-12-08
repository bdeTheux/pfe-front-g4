import { useState, FormEvent } from "react";

const newPost = () => {

    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState("")
    const [postNature, setPostNature] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")
    const [campus, setCampus] = useState("")

    const campusList = ["Woluwe", "LLN", "Ixelles"]

    const getStaticProps = async () => {
        const res = await fetch(process.env.URL_FRONT + `/api/posts/posts`)
        const data = await res.json()
        setPosts(data);
        
    }
    const submitPost = async () => {
        console.log(title)
        let newPostSubmit = {
            "title" : title,
            "description" : description,
            "postNature" : postNature,
            "price" : price,
            "image" : image,
            "campus" : campus,
        }
        console.log("before fetch " + JSON.stringify({newPostSubmit}))
        const res = await fetch(`http://localhost:3000/api/posts/posts`, {
            method: 'POST',
            body: JSON.stringify({newPostSubmit}),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        console.log(newPostSubmit)
        const data = await res.json()
        console.log(data)
    }

    const campusHandler = (val) => {
        
        setCampus(val.target.value)
    }

    return(

        <section className="flex-auto">
            <h1>Crée une annonce</h1>
            <div className="flex-grow bg-green-800 rounded mx-auto bg-center w-7/12 h-full mt-48">
                
                <form action="post" className="flex">
                    <label>
                        Titre:<input  onChange={val => setTitle(val.target.value)} name="title" type="text" placeholder='titre' required className="flex appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"/>
                    </label>

                    <label>
                        Description:<textarea value={description} onChange={val => setDescription(val.target.value)} name="description" rows="3" placeholder='description' required className="flex appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"/>
                    </label>
                    <div>
                        <label> A vendre: </label><input value={postNature} onChange={val => setPostNature(val.target.value)} name="postNature" type="radio" value="sell" required/>
                        <label> A donner: </label><input value={postNature} onChange={val => setPostNature(val.target.value)} name="postNature" type="radio" value="given" required/>
                    </div>
                    <label>
                        Prix:<input value={price} onChange={val => setPrice(val.target.value)} name="price" type="number" placeholder='0.0€' required className="flex appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"/>
                    </label>

                    <label>Campus:
                        <select name="campus" onChange={campusHandler} required className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                            {campusList.map((campu, index) => {
                            return <option key={index} className="bg-gray-200 text-gray-700">{campu}</option>;
                            })}
                        </select>
                    </label>
                     
                    <label className="flex md:w-44 bg-gray-200 rounded text-gray-700">
                    Dossier a telecharger:<input value={image} onChange={val => setImage(val.target.value)} name="file" type="file" multiple className="hidden" required/>
                    </label>
                                        
                    <button name="submitPost" onClick={submitPost} type="button" className="shadow bg-green-700 rounded hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4">Crée</button>
                </form>
            </div>
            <p className="flex-auto mx-auto">Votre annonce sera soumise à un modérateur.<br/>
                Vous en serez notifié !
            </p>
        </section>
    )
}

export default newPost; 