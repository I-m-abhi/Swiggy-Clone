import {useRouteError} from 'react-router-dom';

const Error = () => {
  const error = useRouteError();
  console.log(error);
  
  return (
    <h1>Error Loading...</h1>
  )
};

export default Error;