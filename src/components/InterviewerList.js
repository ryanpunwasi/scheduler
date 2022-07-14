import React from 'react';
import InterviewerListItem from './InterviewerListItem';

import './InterviewerList.scss';

const InterviewerList = (props) => {
  const { value, onChange } = props;
  const interviewerItems = props.interviewers.map((interviewer) => {
    return <InterviewerListItem key={interviewer.id} id={interviewer.id} avatar={interviewer.avatar} name={interviewer.name} setInterviewer={() => onChange(interviewer.id)} selected={interviewer.id === value}/>
  });

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {interviewerItems}
      </ul>
    </section>
  );
};

export default InterviewerList;