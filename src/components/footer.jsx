function Footer() {
    return (
        <footer className='page-footer purple lighten-2'>
            <div className='footer-copyright purple lighten-2'>
                <div className='container'>
                    © {new Date().getFullYear()} Copyright Text
                    <a
                        className='grey-text text-lighten-4 right'
                        href='https://github.com/Feoktist92/react-shop'
                        target='__blank'
                        rel='noreferrer'
                    >
                        Repository
                    </a>
                </div>
            </div>
        </footer>
    );
}

export { Footer };
