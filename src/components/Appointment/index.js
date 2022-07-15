import React from 'react'
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";

const Appointment = (props) => {
  const { interview } = props;
  return (
    <article className="appointment">
      <Header time={props.time}/>
      {props.interview ? <Show student={interview.student} interviewer={interview.interviewer}/> : <Empty />}
    </article>
  );
};

export default Appointment;