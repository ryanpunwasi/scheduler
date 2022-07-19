import React, { useState } from "react";
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";

import "./styles.scss";

const Form = props => {
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [studentError, setStudentError] = useState("");
  const [interviewerError, setInterviewerError] = useState("");

  const reset = () => {
    setStudent("");
    setInterviewer(null);
  };

  const cancel = () => {
    reset();
    props.onCancel();
  };

  function validate() {
    if (student === "") {
      setStudentError("Student name cannot be blank.");
      return;
    }

    if (interviewer === null) {
      setInterviewerError("Please select an interviewer.");
      return;
    }

    props.onSave(student, interviewer);
  }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <input
            onChange={e => setStudent(e.target.value)}
            value={student}
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            data-testid="student-name-input"
          />
          <section className="appointment__validation">{studentError}</section>
        </form>
        <InterviewerList
          value={interviewer}
          onChange={setInterviewer}
          interviewers={props.interviewers}
        />
        <section className="appointment__validation">
          {interviewerError}
        </section>
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>
            Cancel
          </Button>
          <Button confirm onClick={() => validate(student, interviewer)}>
            Save
          </Button>
        </section>
      </section>
    </main>
  );
};

export default Form;
