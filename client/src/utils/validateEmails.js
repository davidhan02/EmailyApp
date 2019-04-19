// eslint-disable-next-line
const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default emails => {
  const invalidEmails = emails
    .replace(/\s/g, '') // Remove all white space characters
    .replace(/,,+/g, ',') // Remove any surplus commas from anywhere in the string
    .replace(/(^,|,$)/g, '') // Remove a comma from the start or end of the string
    .split(',')
    .filter(email => regex.test(email) === false);

  if (invalidEmails.length) {
    return `These emails are invalid: ${invalidEmails.join(', ')}`;
  }

  return;
};
