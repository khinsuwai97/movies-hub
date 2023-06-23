const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.NEXT_MOVIES_ACESS_TOKEN_AUTH}`,
  },
};

export default options;
