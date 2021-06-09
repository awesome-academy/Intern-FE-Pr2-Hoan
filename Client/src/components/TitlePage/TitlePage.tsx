import React from "react";
import "./TitlePage.scss";

interface TitlePageProps {
  title: string;
}

const TitlePage: React.FC<TitlePageProps> = (props) => {
  return (
    <div className="title-page">
      <p className="title">{props.title}</p>
    </div>
  );
};

export default TitlePage;
