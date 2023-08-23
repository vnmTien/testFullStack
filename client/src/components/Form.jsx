const Form = ({ setJobs, language }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.job.value;

    setJobs((jobs) => [
      ...jobs,
      {
        id: Date.now(),
        name: name,
        isDone: false
      }
    ]);

    event.target.reset();
  };

  const placeholderText =
    language === "en" ? "Enter task ..." : "Nhập công việc ...";
  const submitButtonText = language === "en" ? "Submit" : "Gửi";

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input name="job" type="text" placeholder={placeholderText} />
      <input type="submit" value={submitButtonText} />
    </form>
  );
};

export default Form;
