import { useState } from "react";

const newPost = () => {

    const [posts, setPosts] = useState([]);
    const [newPosts, setNewPosts] = useState('');
    const getStaticProps = async () => {
        const res = await fetch("http//localhost:3000")
    }




    return(

        <section className="flex-auto">
            <h1>Crée une annonce</h1>
            <div className="flex-grow bg-green-800 rounded mx-auto bg-center w-7/12 h-full mt-48">
                <form className="flex">
                    <label>
                        Titre:<input name="title" type="text" placeholder='titre' required className="flex appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"/>
                    </label>

                    <label>
                        Description:<textarea name="description" rows="3" placeholder='description' required className="flex appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"/>
                    </label>
                    <label>
                        Prix:<input name="price" type="number" placeholder='0.0€' required className="flex appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"/>
                    </label>
                    
                    <label>Campus:
                        <select name="campus" required className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                            <option value="Woluwe" className="bg-gray-200 text-gray-700">Woluwe</option>
                            <option value="LLN" className="bg-gray-200 text-gray-700">Louvain-La-Neuve</option>
                            <option value="Ixelles" className="bg-gray-200 text-gray-700">Ixelles</option>
                        </select>
                    </label>
                    <label className="flex md:w-44 bg-gray-200 rounded text-gray-700">
                    Dossier a telecharger:<input name="file" type="file" multiple className="hidden" required/>
                    </label>
                    
                    <button name="submitPost" type="submit" className="shadow bg-green-700 rounded hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4">Crée</button>
                </form>
            </div>
            <p className="flex-auto mx-auto">Votre annonce sera soumise à un modérateur.<br/>
                Vous en serez notifié !
            </p>
        </section>
    )
}

export default newPost;