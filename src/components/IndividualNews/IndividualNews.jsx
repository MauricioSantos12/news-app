import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";
import { ArrowLeft } from 'feather-icons-react';
import './individualNews.scss'
import { Link } from 'react-router-dom';

const IndividualNews = () => {
  const location = useLocation();
  console.log({location})
  let data = location.state.data;

  return (
    <section className='container-principal-news'>
      <div className='container-individual-new'>
        <Link to='/'> <ArrowLeft className='icoLeft' /></Link>
        <h4>{data.title}</h4>
      </div>
      <img src={data.media} alt={data.title} />
      <p>{data.summary}</p>
    </section>
  )
}

export default IndividualNews