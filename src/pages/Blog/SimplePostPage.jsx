import React from "react";
import { useParams } from "react-router-dom";
import "./simple.scss";

function SimplePostPage() {
  const { slug } = useParams();
  console.log(slug);

    return <>
    
    
    </>;
}

export default SimplePostPage;
