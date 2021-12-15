import React from 'react';
import { useParams } from 'react-router-dom';

Detail.propTypes = {};

function Detail(props) {
  const { id } = useParams();

  return <div>Product Detail {id} </div>;
}

export default Detail;
