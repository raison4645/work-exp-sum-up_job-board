const slugHandle = (text) => {
  const regex = /[^a-zA-Z0-9]+/g
  const result = text && text.replace(regex, match => {
  if (match === " ") {
      return "-";
    } else if (match === "--") {
      return "-";
    } else {
      return "-";
    }
  });
  return result
}

export default slugHandle;