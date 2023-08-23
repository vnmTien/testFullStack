const Header = ({ jobs, displayJobsOnly, setDisplayJobsOnly, language }) => {
  const count = jobs.filter((i) => !i.isDone).length;

  const handleCheckboxChange = () => {
    setDisplayJobsOnly(!displayJobsOnly);
  };

  return (
    <div className="header">
      <div >
      <label>
        <input
          type="checkbox"
          checked={displayJobsOnly}
          onChange={handleCheckboxChange}
        />
        {language === "en"
          ? "Not finished only"
          : "Những việc chưa hoàn thành"}
      </label>
      </div>
      <div>
        {language === "en"
          ? `You have ${count} task not done`
          : `Bạn có ${count} công việc chưa hoàn thành`}
      </div>
    </div>
  );
};

export default Header;
