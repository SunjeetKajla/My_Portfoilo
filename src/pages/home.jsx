import React from "react";
import { useNavigate } from 'react-router-dom';
import TypeText from "../components/TextType.jsx";
import ProfileCard from "../components/ProfileCard.jsx";
import avatar from '../assets/avatar.png';

export default function home() {
    const navigate = useNavigate();
    const goToConstact = () => {
        navigate('/contact');
      };
  return (
    <>
      <h1 className="m-0 p-0 text-3xl font-bold">
        <TypeText text="Hello World, I'm Sunjeet Kajla!" />
      </h1>
      {/* <ProfileCard onContactClick={goToConst                                                                                                                         */}
    </>
  );
}
