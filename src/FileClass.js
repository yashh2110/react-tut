import React,{ useState } from 'react';
function FileClass(){
    const [count,setCount]=useState(0);
    return(
        <div>
            <p>{count}</p>
            <button onClick={()=>setCount(count+1)}>add</button>
        </div>
    )
}
export default FileClass;