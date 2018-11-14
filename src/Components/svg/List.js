import React from 'react';

const List = ({
  style = {fill: "#fff", marginLeft: "10px"},
  width = "20px",
  height = "20px",
  className = "",
  viewBox = "0 0 20 20"
}) => {
    
    return(
        <svg 
            viewBox={viewBox}
            width={width} 
            height={height}
            style={style}
            className = {className}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
        <path d="M14.4 9h-5.8c-0.552 0-0.6 0.447-0.6 1s0.048 1 0.6 1h5.8c0.552 0 0.6-0.447 0.6-1s-0.048-1-0.6-1zM16.4 14h-7.8c-0.552 0-0.6 0.447-0.6 1s0.048 1 0.6 1h7.8c0.552 0 0.6-0.447 0.6-1s-0.048-1-0.6-1zM8.6 6h7.8c0.552 0 0.6-0.447 0.6-1s-0.048-1-0.6-1h-7.8c-0.552 0-0.6 0.447-0.6 1s0.048 1 0.6 1zM5.4 9h-1.8c-0.552 0-0.6 0.447-0.6 1s0.048 1 0.6 1h1.8c0.552 0 0.6-0.447 0.6-1s-0.048-1-0.6-1zM5.4 14h-1.8c-0.552 0-0.6 0.447-0.6 1s0.048 1 0.6 1h1.8c0.552 0 0.6-0.447 0.6-1s-0.048-1-0.6-1zM5.4 4h-1.8c-0.552 0-0.6 0.447-0.6 1s0.048 1 0.6 1h1.8c0.552 0 0.6-0.447 0.6-1s-0.048-1-0.6-1z"></path>
        </svg>
    );
}


export default List;