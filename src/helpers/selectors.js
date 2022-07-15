export function getAppointmentsForDay(state, day) {
  const filteredDay = state.days.filter(d => d.name === day);

  if (!filteredDay.length) {
    return [];
  }

  let filteredAppointments = filteredDay[0].appointments.map(appointmentId => state.appointments[appointmentId]);
  return filteredAppointments;
}

export function getInterview(state, interview) {

  const { interviewer } = interview || {};

  if (interviewer in state.interviewers) {
    const interviewerObj = state.interviewers[interviewer];
    return { ...interview, interviewer: interviewerObj };
  }

  return null;
}