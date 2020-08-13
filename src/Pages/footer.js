import React from 'react'

class Footer extends React.Component{
    render(){
        return(
            <footer className="footer">
                <div className="container-fluid">
                    <nav>
                        <p className="copyright text-center">
                            ©
                            <script>
                                document.write(new Date().getFullYear())
                            </script>
                            <a href="http://www.creative-tim.com">Creative Tim</a>, made with love for a better web
                        </p>
                    </nav>
                </div>
            </footer>
        )
    }
}

export default Footer;