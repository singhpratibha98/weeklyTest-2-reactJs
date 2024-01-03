const Contact = ()=>{
    return(
        <div>
            <div style={{backgroundColor:"#255F71", height:"100px",width: "90%", borderRadius:"0.23rem",margin:"10px", color:"white",padding:"30px",fontWeight:"bolder"}}> 
            Email:
            
            <div style={{backgroundColor:"#2D4C57",height:"60px",width:"",fontWeight:"bolder", }}> 
            <br/>
            oktayshakirov@gmail.com
            <button style={{backgroundColor:"#383838", color:"#C2A95F", padding:"8px",}}>Copy</button>

            </div>
            </div>

            

            <div style={{backgroundColor:"#255F71", height:"300px",width: "90%",margin:"10px"}}> 
            <div>
            Schedule Video Call With Me:
            </div>

            <img  style={{height:"90px", width:"90px"}}src={require('./calenderimage.png')}/>

            </div>
            

        </div>
    )
}

export default Contact;