const Header = ({countDone, countJob}) => {
  return <div className="header">You have {countJob-countDone} tasks left!</div>;
};

export default Header;
