import header from './Header.module.css'

function Header() {
    return (
        <header className={header.header}>
            <h1 className={header.title}>Music Library</h1>
        </header>
    ) 
}
export default Header