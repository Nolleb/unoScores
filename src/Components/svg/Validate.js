import React from 'react';

const Validate = ({
  style = {fill: "#70d4b4"},
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
        <path d="M8.294 16.998c-0.435 0-0.847-0.203-1.111-0.553l-3.573-4.721c-0.465-0.613-0.344-1.486 0.27-1.951 0.615-0.467 1.488-0.344 1.953 0.27l2.351 3.104 5.911-9.492c0.407-0.652 1.267-0.852 1.921-0.445s0.854 1.266 0.446 1.92l-6.984 11.21c-0.242 0.391-0.661 0.635-1.12 0.656-0.022 0.002-0.042 0.002-0.064 0.002z"></path>
        </svg>
    );
}


export default Validate;