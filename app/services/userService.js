// @flow

export function logIn(email: string, password: string) {
  const formData = `email=${email}&password=${password}&permanent=false`;
  return fetch('http://api.test.own-business-day.com/api/registration/login',
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      method: 'POST',
      body: formData,
    }).then((data) => {
    return data.status;
  });
}
