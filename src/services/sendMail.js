const sendMail = (api, key) => async body => {
  await fetch(api, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': key,
    },
    body: JSON.stringify(body),
  });
}

export default sendMail;
