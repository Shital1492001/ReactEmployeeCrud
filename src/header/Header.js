import './Header.css'
import { Navbar } from '../components/Navbar';
export function Header() {
    return(
        <header className="header">
            <h4 className="subheading">Employee CRUD</h4>
            <Navbar/>
        </header>
    );
}
