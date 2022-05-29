import React from 'react'

export default function Footer() {
    // Get current year
    const date = new Date();
    const currentYear = date.getFullYear();
    return (
        < section
            id="footer"
            className="d-flex flex-column justify-content-center align-items-center my-5"
        >
            <hr className="w-50 lblue-bg" />
            <h6 className="mb-5">© {currentYear} M Genta.</h6>
        </section >
    )
}
