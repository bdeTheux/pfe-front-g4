import Navbar from "../Navbar/Navbar"


const Layout = ({ children })=>{
    return(
        <div>
            <Navbar/>
            <div>
                <main>      
                    {children} 
                </main>
                <h1>Put the NavBar Here</h1>
            </div>
            
        </div>
    )
}

export default Layout