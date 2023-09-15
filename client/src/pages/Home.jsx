import TodoList from "../components/TodoList.jsx";
import TodoListHeader from "../components/TodoListHeader.jsx";
import Form from "../components/Form.jsx";
import Footer from "../components/Footer.jsx";
import { useState, useEffect } from "react";

const Home = () => {
    const storedJobs = JSON.parse(localStorage.getItem("jobs"));

    const [jobs, setJobs] = useState(storedJobs);
    const [displayJobsOnly, setDisplayJobsOnly] = useState(false);
    const [language, setLanguage] = useState("en");

    const handleLanguageChange = (newLanguage) => {
        setLanguage(newLanguage);
    };

    //   useEffect(() => {
    //     const storedJobs = localStorage.getItem("jobs");
    //     if (storedJobs) {
    //       setJobs(JSON.parse(storedJobs));
    //     }
    //   }, []);

    useEffect(() => {
        const jsonJobs = JSON.stringify(jobs);
        localStorage.setItem("jobs", jsonJobs);
    }, [jobs]);

    return (
        <div className="App">
            <div className="container">
                <TodoListHeader
                    jobs={jobs}
                    displayJobsOnly={displayJobsOnly}
                    setDisplayJobsOnly={setDisplayJobsOnly}
                    language={language}
                    handleLanguageChange={handleLanguageChange}
                />
                <TodoList
                    jobs={jobs}
                    setJobs={setJobs}
                    displayJobsOnly={displayJobsOnly}
                />
                <Form
                    setJobs={setJobs}
                    handleLanguageChange={handleLanguageChange}
                    language={language}
                />
            </div>
            <Footer language={language} handleLanguageChange={handleLanguageChange} />
        </div>
    );
};

export default Home;