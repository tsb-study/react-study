import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);

  const onClick = async () => {
    try {
      const response = await axios.get("https://newsapi.org/v2/top-headlines?country=kr&apikey=9390808960274625b9143c907ec9f436");
      setData(response.data)
    }catch(e){
      console.log(e)
    }
  };
    return(
      <div>
        <div>
          <button onClick = {onClick}>불러오기</button>
        </div>
        {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
      </div>
    )
  
};

export default App;
