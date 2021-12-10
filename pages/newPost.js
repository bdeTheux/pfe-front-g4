import NewPost from "../components/NewPost/NewPost";

export const getServerSideProps = async () => {
    const res = await fetch("https://pfe-back-g4-dev.herokuapp.com/categories/") 
    const categories = await res.json()
    
    return {
        props : {
            categories,
        }
    }
}

const newPost = ({categories} ) => {
    return <NewPost categories={categories}/>
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


<select
                    name="categories"
                    required
                    className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                  >
                    <option key="d" className="bg-gray-200 text-gray-700">
                      Aucune catégorie parente
                    </option>
                    ;
                    {Object.keys(categories).map(function (key) {
                      return (
                        <option key={key} className="bg-gray-200 text-gray-700">
                          {categories[key]}
                        </option>
                      );
                    })}
                  </select>



*/