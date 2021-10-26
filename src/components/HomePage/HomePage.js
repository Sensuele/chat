/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";
import userServices from "../../store/services/user.services";

const HomePage = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  const [content, setContent] = useState("");

  useEffect(() => {
    userServices.getUserBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);
  console.log(content);
  return (
    <div className="container">
      <header className="jumbotron">
        <h3>    
          {/* <strong>{currentUser.username}</strong> Profile */}
        </h3>
      </header>
   
    </div>
  );
};

export default HomePage
