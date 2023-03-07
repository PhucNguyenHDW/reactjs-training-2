import React from 'react';
import { useRouteError } from "react-router-dom";
import './Page404.css'
import { Link } from "react-router-dom";

export default function Page404() {
  // eslint-disable-next-line
  const error: any = useRouteError();
  console.error(error);

  return (
    <div className="error-page">
      <div>
        <h1>{error.status} { error.statusText }</h1>
      </div>
      <div>
        <p><Link to="/">Back To Home</Link></p>
      </div>
    </div>
  );
}
