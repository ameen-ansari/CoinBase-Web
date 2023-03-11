import React from "react";
import Content from "../Components/BlogContentPage/Content";
import FormT from "../Components/BlogContentPage/FormT";
import Header from "../Components/BlogContentPage/BlogContentHeader";
import Footer from "../Components/Footer/Footer"

function BlogContent() {
  return (
    <div>
      <Header />
      <Content />
      <FormT />
      <Footer />
    </div>
  );
}

export default BlogContent;
