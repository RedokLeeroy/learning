import { Link } from 'react-router-dom';

export const NotFoundView = () => {
  return (
    <>
      <h2>
        Page now found go to the <Link to="/">HomePage</Link>
      </h2>
      <img
        src="https://i.gifer.com/origin/3f/3fcf565ccc553afcfd89858c97304705.gif"
        alt="TRAVOLTA"
      ></img>
    </>
  );
};
