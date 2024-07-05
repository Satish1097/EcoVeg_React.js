import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Test() {
  const [categories, setCategories] = useState([]);
  console.log("pppppppppppppppppiiiiiiiiii")
  
  useEffect(() => {
    console.log("iiiiiiiiiiiiiiiiiiiii")
    axios.get('http://127.0.0.1:8000/categories/')
      .then(response => {
        console.log("1111111111111--->",response.data)
        setCategories(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  console.log("=============>",categories)

  return (
    <div>
      <h1>Hello, World!</h1>
      <ul>
        {categories.map((category) => (
  
          <li key={category.id}>{category.Category}</li>
)
)}
      </ul>
    </div>
  );
}

export default Test;
