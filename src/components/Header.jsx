import logo from '../assets/logo.png'
export const Header = () => {
    return (
        <header className='header'>
            <img className='header_logo' src={logo} alt='Rick and Morty Logo' />
        </header>
    )
}
