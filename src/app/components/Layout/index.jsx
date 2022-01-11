import React from "react";
import Navigation from "../Navigation";

function Layout({ children }) {
  return (
    <div className="app">
      <Navigation />
      <main className="app-container">{children}</main>
      <div className="basket"></div>
    </div>
  );
}

export default Layout;
