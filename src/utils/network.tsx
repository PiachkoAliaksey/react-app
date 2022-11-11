
const baseUrl = 'https://swapi.dev/api/';
const rootPeople = `${baseUrl}/people`;

const getApiRes = async (url:string) =>{

try{
const response = await fetch(url);
if(!response.ok){
  console.log('Could.error', response.status)
}
return await response.json();

}catch(error){
  console.error('Could not fetch');
  return false;

};
}

getApiRes(rootPeople);
export default getApiRes;
