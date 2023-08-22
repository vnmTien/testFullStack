import { useState } from "react";

const Form = ({onSaveForm}) => {
  const [job, setJob] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const onSubmitForm = (event) => {
		event.preventDefault()

		onSaveForm({
			job,
			isChecked,
		})

		setJob('');
		setIsChecked(false);
	}

  return (
    <form className="form" onSubmitForm={onSubmitForm}>
      <input placeholder="Enter task ..." value={job} onChange={e => setJob(e.target.value)}/>
      <button>Submit</button>
    </form>
  );
};

export default Form;
