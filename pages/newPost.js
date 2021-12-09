import { useState, FormEvent } from "react";

const newPost = () => {

    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState("")
    const [postNature, setPostNature] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")
    

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

    

    return(
<div className="flex h-screen bg-gray-100">
   <div className="m-auto">
      <div>

        <p className="text-4xl font-light pt-16">Annonce</p>


        <div className="mt-5 bg-white rounded-lg shadow">
            <div className="flex">
               <div className="flex-1 py-5 pl-5 overflow-hidden">
                  <h1 className="inline text-2xl font-semibold leading-none">Crée une annonce</h1>
               </div>
            </div>
            <form action="post" className="">

            <div className="px-5 pb-5">
               <input  onChange={val => setTitle(val.target.value)} name="title" type="text" placeholder='titre' required  className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/>
               <textarea value={description} onChange={val => setDescription(val.target.value)} name="description" rows="3" placeholder='description' required className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/> 
               <div className="flex">
                  <div className="flex-grow w-1/4 pr-2">
                      <input value={price} onChange={val => setPrice(val.target.value)} name="price" type="number" placeholder='0.0€' required className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/>
                  
                  </div>
                  
                  <div className="flex-grow">
                  <label> A vendre: </label><input value={postNature} onChange={val => setPostNature(val.target.value)} name="postNature" type="radio" value="sell" required/>
                        <label> A donner: </label><input value={postNature} onChange={val => setPostNature(val.target.value)} name="postNature" type="radio" value="given" required/>
                  </div>

               </div>
               <label className=" text-black placeholder-gray-600 w-full py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"> 
                    <input value={image} onChange={val => setImage(val.target.value)} name="file" type="file" multiple hidden    required />
                    <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"></rect></g><g><g><polygon opacity=".3" points="14.17,11 13,11 13,5 11,5 11,11 9.83,11 12,13.17"></polygon><rect height="2" width="14" x="5" y="18"></rect><path d="M19,9h-4V3H9v6H5l7,7L19,9z M11,11V5h2v6h1.17L12,13.17L9.83,11H11z"></path></g></g></svg>

               </label>

            </div>
            
            <hr className="mt-4"/>
            <div className="flex flex-row-reverse p-3">
               
               <div className="flex-initial pl-3">    
                  <button name="submitPost" onClick={submitPost} type="button" className="flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize   bg-black rounded-md hover:bg-gray-800  focus:outline-none focus:bg-gray-900  transition duration-300 transform active:scale-95 ease-in-out">
                     <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF">
                        <path d="M0 0h24v24H0V0z" fill="none"></path>
                        <path d="M5 5v14h14V7.83L16.17 5H5zm7 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-8H6V6h9v4z" opacity=".3"></path>
                        <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"></path>
                     </svg>
                     <span className="pl-2 mx-1">Créer</span>
                  </button>
               </div>
            </div>
            </form>
         </div>        
      </div>
      <p className="text-4xl text-center font-light pt-16">Votre annonce sera soumise à un modérateur.<br/>
                Vous en serez notifié !</p>

   </div>
</div>
        
    )
}

export default newPost; 

/*

const [campus, setCampus] = useState("")

    const campusList = ["Woluwe", "LLN", "Ixelles"]

const campusHandler = (val) => {
        
        setCampus(val.target.value)
    }
<label>Campus:
                        <select name="campus" onChange={campusHandler} required className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                            {campusList.map((campu, index) => {
                            return <option key={index} className="bg-gray-200 text-gray-700">{campu}</option>;
                            })}
                        </select>
                    </label>

*/

/*


<section className="">
            <h1>Crée une annonce</h1>
            <div>zdzdzd </div>
            <div className="">
                
                <form action="post" className="">
                    <label>
                        Titre:<input  onChange={val => setTitle(val.target.value)} name="title" type="text" placeholder='titre' required className=""/>
                    </label>

                    <label>
                        Description:<textarea value={description} onChange={val => setDescription(val.target.value)} name="description" rows="3" placeholder='description' required className=""/>
                    </label>
                    <div>
                        <label> A vendre: </label><input value={postNature} onChange={val => setPostNature(val.target.value)} name="postNature" type="radio" value="sell" required/>
                        <label> A donner: </label><input value={postNature} onChange={val => setPostNature(val.target.value)} name="postNature" type="radio" value="given" required/>
                    </div>
                    <label>
                        Prix:<input value={price} onChange={val => setPrice(val.target.value)} name="price" type="number" placeholder='0.0€' required className=""/>
                    </label>

                    <label className="">
                    Dossier a telecharger:<input value={image} onChange={val => setImage(val.target.value)} name="file" type="file" multiple className="hidden" required/>
                    </label>
                                        
                    <button name="submitPost" onClick={submitPost} type="button" className="">Crée</button>
                </form>
            </div>
            <p className="">Votre annonce sera soumise à un modérateur.<br/>
                Vous en serez notifié !
            </p>
        </section>
class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
        */