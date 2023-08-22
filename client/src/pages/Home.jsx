import React, { useState, useRef } from 'react'
import TodoList from "../components/TodoList";
import TodoListHeader from "../components/TodoListHeader";
// import Form from "../components/Form";
import Footer from "../components/Footer";

const Home = () => {

    const storageJobs = JSON.parse(localStorage.getItem('jobs'));
    const storageCompletedJobs = JSON.parse(localStorage.getItem('completedJobs'));

    const [job, setJob] = useState(storageJobs || []);
    const [isChecked, setIsChecked] = useState(false);
    const [completedJobs, setCompletedJobs] = useState(storageCompletedJobs || []);
    const inputRef = useRef(null);

    const handleAddJob = (e) => {
        if (inputRef.current.value === '') return;
        const newJob = {
            id: job.length + 1,
            job: inputRef.current.value,
            isChecked: false
        };

        setJob(prev => {

            const saveJobs = [...prev, newJob]

            const jsonJobs = JSON.stringify(saveJobs)
            localStorage.setItem('jobs', jsonJobs)

            console.log(jsonJobs)

            return saveJobs
        });
        inputRef.current.value = '';
    };

    const checkJob = (item, e) => {
        job.map((item) => {
          if (item.id == e.target.id) {
            item.isChecked = !item.isChecked;
            setCompletedJobs(prev => [...prev, item]);
          }
        })
        filterCompletedJobs(item);
        localStorage.setItem('jobs', JSON.stringify(job));
      };
    
    const filterCompletedJobs = () => {
        const completed = job.filter((item) => item.isChecked === true);
        setCompletedJobs(completed);
        localStorage.setItem('completedJobs', JSON.stringify(completed));
      };

    

    return (
        <div className="App">
            <div className="container">
                <TodoListHeader countDone={completedJobs.length} countJob={job.length}/>
                {
                    job?.map((item, index) => { return <TodoList key={index} item={item} checkJob={checkJob}/> })
                }
                <form className="form">
                    <input placeholder="Enter task ..." ref={inputRef} />
                    <button onClick={handleAddJob}>Submit</button>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default Home