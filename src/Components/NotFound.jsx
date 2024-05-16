import React from "react";
import { Link as RouterLink } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <RouterLink className="router-link" to="*">
        <h1>NotFound</h1>
      </RouterLink>
    </div>
  );
}

export default NotFound;
