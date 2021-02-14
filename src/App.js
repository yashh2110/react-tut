import React from 'react';
import FileClass from './FileClass';
import FileOne from './FileOne';
const styles = {
    main:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center",
        width:"100%",
        height:"100vh",
    }
}
function App(){
    return (
        <div style={styles.main}>
            {/* <FileOne name="yashh" age="10" />
            <FileOne name="pig" />
            <FileOne name="dog" />
            <FileOne name="lion" /> */}
            <FileClass />
        </div>
    )
}
export default App;