import { NavLink } from "react-router-dom";

export default function FailingLink({url, children}) {

    let errors = ["Problem following the link", "There was an error with code 523", "Error code 900, this is bad"]

    const canLink = (e) => {
        if(Math.random() > 0.5) {
            e.preventDefault()
            let index = Math.round(Math.random() * 3)
            throw new Error(errors[index])
        }
    }

    return (
        <NavLink to={url} activeClassName="active" onClick={canLink}>{children}</NavLink>
    )
}