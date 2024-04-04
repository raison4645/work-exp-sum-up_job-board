// TODO: *** Try JS INTL WEB API ***
const timeFormater = (dateTime) => {
  const assignedDate = new Date(dateTime = '2023-12-25 03:00:00');
  const now = new Date();
  const timeDiff = now - assignedDate;
  const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  if (dayDiff === 0) {
    // Today
    const hours = assignedDate.getHours().toString().padStart(2, '0');
    const minutes = assignedDate.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  } else if (dayDiff === 1) {
    // Yesterday
    return 'Yesterday';
  } else if (dayDiff <= 7) {
    // X days ago
    return `${dayDiff} days ago`;
  } else {
    // More than 7 days ago
    return 'A Week Ago';
  }
}

export default timeFormater;


// const timeFormater = (dateTime) => {
//   const assignedDate = new Date(dateTime)
//   const now = new Date();
//   // TODO: the first argument after dateTimeFormat input locale dynamically, now is static
//   const intlFormater = new Intl.DateTimeFormat('zh-HK').format(assignedDate)

//   return intlFormater
// }

// export default timeFormater;