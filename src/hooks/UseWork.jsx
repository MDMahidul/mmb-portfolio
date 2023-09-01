import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const UseWork = () => {
     const [items, setItems] = useState([]);

     useEffect(() => {
       fetch("work.json")
         .then((res) => res.json())
         .then((data) => {
           setItems(data);
         });
     }, []);
    return [items,setItems];
};

export default UseWork;