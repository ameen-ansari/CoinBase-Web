import React from "react";
import Cards from "../Components/BlogPage/Cards";
import More from "../Components/BlogPage/More";
import BlogPageHeader from "../Components/Header/BlogPageHeader";
import Footer from '../Components/Footer/Footer'

function BlogPage() {
  return (
    <div>
      <BlogPageHeader />
      <Cards />
      <More />
      <Footer />
    </div>
  );
}

export default BlogPage;
