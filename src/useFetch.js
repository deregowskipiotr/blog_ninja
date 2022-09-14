import { useState, useEffect } from "react";

/* custom hook */
/* url - localhost data/db.json( npx json-server --watch data/db.json) */
const useFetch = (url) => {

  const[data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then(res => {
          if(!res.ok) {
            throw Error('npx json-server --watch data/db.json...Nie ma za co...');
          }
          return res.json();
      })
      .then(data => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch(err => {
        setIsPending(false);
        setError(err.message);
      })
    }, 500);

    //return () => console.log('cleanup');
  }, [url]);

  return{data, isPending, error}
}

export default useFetch;