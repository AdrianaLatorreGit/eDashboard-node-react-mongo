import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
    const auth = localStorage.getItem("user");
    const navigate = useNavigate;
    const logout = () => {
        localStorage.clear();
        navigate("/signup");
    };
    return (
        <div>
            <img
                className="logo"
                alt="logo"
                src="https://static.vecteezy.com/system/resources/previews/005/230/520/original/octopus-alien-logo-vector.jpg"
            />
            {auth ? (
                <ul className="nav-ul">
                    <li>
                        <Link to="/">Products</Link>
                    </li>
                    <li>
                        <Link to="/add">Add Products</Link>
                    </li>
                    <li>
                        <Link to="/update">Update Products</Link>
                    </li>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                        <Link onClick={logout} to="/signup">
                            Logout{" "}
                            <span className="name">
                                {JSON.parse(auth).name}
                            </span>
                        </Link>
                    </li>
                </ul>
            ) : (
                <ul className="nav-ul nav-right">
                    <li>
                        <Link to="/signup">Sign Up</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default Nav;
