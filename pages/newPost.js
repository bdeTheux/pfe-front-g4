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
