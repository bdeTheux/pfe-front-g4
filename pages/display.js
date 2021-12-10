import CategoryPage from "../components/CategoryPage/CategoryPage"

export const getServerSideProps = async () => {
    const res = await fetch("https://pfe-back-g4-dev.herokuapp.com/categories/") 
    const categories = await res.json()
    
    return {
        props : {
            categories,
        }
    }
}

const display = ({categories}) => {

    return <CategoryPage categories={categories}/>

}

export default display