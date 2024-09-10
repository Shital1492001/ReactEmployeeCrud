import './Footer.css'
export function Footer() {
    let authorName="Shital Avhad"
    return(

        <header className="footer">
            <p>
            <small className="subfooter">NEOSOFT EMPLOYEE MANAGEMENT</small><br></br>
            <small className="author">Author Name:<span>{authorName}</span></small>
            </p>
        </header>
    );
}
