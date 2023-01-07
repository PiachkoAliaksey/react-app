
/**
 * REST API fetch
 * @param {String} url - url for request
 * @returns {Promise} - Promise with result of request
 */
export const getApiRes = async (url: string) => {

  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.log('Could.error', response.status)
      return false;
    }
    return await response.json();

  } catch (error) {
    console.error('Could not fetch');
    return false;
  };
}

export const  getCurrentRequest = async(arrUrls:string[]) => {
  const response = await Promise.all(arrUrls.map(res => {
    return fetch(res).then(res => res.json());

  }))
  return response;
}
