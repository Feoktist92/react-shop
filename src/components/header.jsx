function Header() {
    return (
        <nav className='purple lighten-3'>
            <div className='nav-wrapper'>
                <a
                    href='https://feoktist92.github.io/react-shop/'
                    className='brand-logo'
                >
                    React Shop
                </a>
                <ul id='nav-mobile' className='right hide-on-med-and-down'>
                    <li>
                        <a
                            href='https://github.com/Feoktist92/react-shop'
                            target='__blank'
                            rel='noreferrer'
                        >
                            Repository
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export { Header };
