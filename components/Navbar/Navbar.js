import Link from "next/link";

const Navbar = () => {

    return (
        <nav>
            <ul>
                <li>
                    <Link href='/'>Accueil</Link>
                </li>
                <li>
                    <Link href='/NextPage'>NextPage</Link>
                </li>
            </ul>
        </nav>
    )

}

export default Navbar;

