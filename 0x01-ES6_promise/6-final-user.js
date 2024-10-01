import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  // Call both functions and use Promise.allSettled to handle their results
  const promises = [
    signUpUser(firstName, lastName),
    uploadPhoto(fileName)
  ];

  // Return a promise that resolves to the formatted result
  return Promise.allSettled(promises).then(results => {
    // Map the results to the desired structure
    return results.map(result => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : result.reason
    }));
  });
}
