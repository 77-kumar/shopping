import React,{useState} from 'react'
import './Customer.css'

const Customer = () => {
    const [data,setData]=useState({
        email:'',
        text:'',
    });

    const {email,text}=data;

    const handler=(e)=>{
        setData({...data,[e.target.name]:[e.target.value]});
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        console.log(data);
        setData({
            email:'',
            text:''
        })
    }

  return (
    <div className='customer-card'>
       
            <div className='customer-title'>
                how can i help you today
            </div>
        
       
        <div className='details'>
            <form onSubmit={submitHandler}>
                <label >Email : </label>
                <input type="email" placeholder='enter your mail id' value={email} name='email' onChange={handler}/>
                <p>Enter what type of problem your are face i will try to fix it</p>
                <label>Text hear : </label>
                <input type="text" class="input-box" value={text} name='text' onChange={handler}/><br/>
                <button>post</button>
            </form>

        </div>
        <div className='customer-care-details'>
            <label>company name : Alta Vista Info Solutions</label>
            <h1>If you are facing any problem please reach out through a mail i can help you </h1>
            <label>Email : hr@altavistainfosolution.in</label>
            <h1>In case it was emergency please contact to this number</h1>
            <label>mobile no : 6301646269</label>


        </div>
      
    </div>
  )
}

export default Customer
