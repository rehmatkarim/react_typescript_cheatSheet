import React from "react";
interface childProps {
  color: string;
  onClick:()=>void;
}
const Child: React.FC<childProps> = ({ color,onClick,children }) => {
  return <div>
    {color}
    <button onClick={onClick}>button</button>
    {children}
  </div>;
};

export default Child;
