const TodoList = ({ jobs, setJobs, displayJobsOnly }) => {
  const handleOnchange = (index) => {
    jobs[index].isDone = !jobs[index].isDone;
    const newJobs = [...jobs];
    setJobs(newJobs);
  };

  const filteredJobs = displayJobsOnly
    ? jobs.filter((job) => !job.isDone)
    : jobs;

  return (
    <div className="todo-list-container">
      {filteredJobs.map((job, index) => (
        <div className="todo-item-container" key={job.id}>
          <input
            type="checkbox"
            onChange={() => handleOnchange(index)}
            name="check"
            checked={job.isDone}
          />
          {job.name}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
