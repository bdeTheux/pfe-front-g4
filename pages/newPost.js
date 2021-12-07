
const newPost = () => {

    return(

        <section>
            <h1>Crée une annonce</h1>
            <div>
                <form class="flex">
                    <label>
                        Titre:<input name="title" type="text" placeholder='titre' required class="flex appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"/>
                    </label>

                    <label>
                        Description:<textarea name="description" rows="3" placeholder='description' required class="flex appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"/>
                    </label>
                    <label>
                        Prix:<input name="price" type="number" placeholder='0.0€' required class="flex appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"/>
                    </label>
                    
                    <label>Campus:
                        <select name="campus" required class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                            <option value="Woluwe" class="bg-gray-200 text-gray-700">Woluwe</option>
                            <option value="LLN" class="bg-gray-200 text-gray-700">Louvain-La-Neuve</option>
                            <option value="Ixelles" class="bg-gray-200 text-gray-700">Ixelles</option>
                        </select>
                    </label>
                    <label class="flex md:w-44 bg-gray-200 text-gray-700">
                    Dossier a telecharger:<input name="file" type="file" multiple class="hidden" required/>
                    </label>
                    
                    <button name="submitPost" type="submit" class="shadow bg-green-700 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4">Crée</button>
                </form>
            </div>
            <p>Votre annonce sera soumise à un modérateur.<br/>
                Vous en serez notifié !
            </p>
        </section>
    )
}

export default newPost;