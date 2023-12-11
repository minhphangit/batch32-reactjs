import React from "react";
import Header from "./header";
import Footer from "./footer";

// function Layout(props) {
//   const children = props.children;
//   const { children } = props;
//   const {children:content} =props;
function Layout({ children, headerTitle, footerTitle }) {
  return (
    // <React.Fragment>
    //   <Header />
    //   <Footer />
    // </React.Fragment>

    <>
      <Header title={headerTitle} />
      {children}
      <Footer title={footerTitle} />
    </>
  );
}

export default Layout;
