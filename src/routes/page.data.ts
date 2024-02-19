export const loader = async () => {
  await new Promise(resolve => {
    setTimeout(() => {
      resolve(null);
    }, 2000);
  });
  return {
    message: 'Hello World',
  };
};
