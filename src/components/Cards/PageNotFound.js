import React from "react";
import { Link, useRouteError } from "react-router-dom";

const NotFoundPage = () => {
    const error = useRouteError()
    // console.log(error);
    return (
        <>
            <div className="m-3">
                <p className="display-5">Page Not Found</p>
                <p>{error.message}</p>
                <Link to="/" className="btn btn-primary">Back to the Homepage</Link>
            </div>
        </>
    )
}

export default NotFoundPage;