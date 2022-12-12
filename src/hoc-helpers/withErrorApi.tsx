import React, {useState} from 'react';
import ErrorMessage from '../components/ErrorMessage';

interface IProps{
  id?:string,
  name?:string,
  img?:string
}

interface IView {
  setErrorApi:React.Dispatch<React.SetStateAction<boolean>>
}
export const withErrorApi = (View:React.FC<IView>) => {
  return (props:IProps) => {
    const[errorApi, setErrorApi] = useState(false);
    return (
    <>
    {errorApi? <ErrorMessage/>:(<View setErrorApi = {setErrorApi} {...props}/>)}
    </>
    )
  }
}
