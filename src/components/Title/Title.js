import React from "react";
import "./Title.css";

const Title = (props) => {
    return (
    <div className="bg-dark box-shadow text-white text-center">
        <h1>
            {props.mainTitle}
        </h1>
        <h4>
            {props.subTitle}
        </h4>
    </div>
    )
};

// ALTERNATE OPTION FOR CREATING STYLES IN REACT
// const Title = (props) => {
//     const style={
//         bgColor:{
//             backgroundColor: "red"
//         }
//     }
//     return (
//     <div className="bg-dark box-shadow text-white text-center">
//         <h1 style={style.bgColor}>
//             {props.mainTitle}
//         </h1>
//         <h4>
//             {props.subTitle}
//         </h4>
//     </div>
//     )
// };

export default Title;
