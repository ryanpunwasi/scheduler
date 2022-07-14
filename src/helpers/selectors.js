export function getAppointmentsForDay(state, day) {
  const filteredDay = state.days.filter(d => d.name === day);

  if (!filteredDay.length) {
    return [];
  }

  let filteredAppointments = filteredDay[0].appointments.map(appointmentId => state.appointments[appointmentId]);
  return filteredAppointments;
}