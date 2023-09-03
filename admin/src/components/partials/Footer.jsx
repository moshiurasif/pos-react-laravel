import React from 'react';

const Footer = () => {
    return (
        <footer className="py-4 bg-theme mt-auto">
                    <div className="container-fluid px-4">
                        <div className="d-flex align-items-center justify-content-between small text-silver">
                            <div>Copyright &copy; Moslin Fashion {new Date().getFullYear()} | Version 0.1.0</div>
                            <div className='text-silver'>
                                Design & Developed By
                                <a className='text-white' href="#"> Moshiur Asif</a>
                            </div>
                        </div>
                    </div>
                </footer>
    );
};

export default Footer;