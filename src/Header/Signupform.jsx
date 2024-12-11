import{ React,useState} from 'react'
import "./Style.css"
import { Images } from '../Images/images'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Signupform = () => {
  const navigate = useNavigate();
    const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
  const [Confirm,setConfirm]=useState("")
  const SubmitHandler=(e)=>{
    e.preventDefault()
    try {
      const response=axios
      .post("http://localhost:5000/api/v1/Register",{
        email,password,Confirm
      })
      .then(res =>{
        navigate("/Loginform")

        console.log(res.data)} )
      .catch(err => console.error(err));
    } catch (error) {

      console.log(error)
    }
    console.log(`${'User email  '+email},${'User password  '+ password}${'User confirm password   '+ Confirm}`)
    let input =document.getElementById("email").value=""
    let input1=document.getElementById("email1").value=""
    let input2 =document.getElementById("email2").value=""
 
  }
   return (
    <>
      <h1 className='signup-head'>Signup form</h1>

    <div className="formsection">
    <form onSubmit={SubmitHandler} action="">
      <label htmlFor="">Email Aderess</label>
      <input  onChange={(e)=>setemail(e.target.value)} id='email' type="email" placeholder='Email Adress' />
      <label htmlFor="">Password</label>
      <input onChange={(e)=>setpassword(e.target.value)}  id='email1' type="Password" placeholder=' Password' />
      <label htmlFor="">Confirm Password</label>
      <input onChange={(e)=>setConfirm(e.target.value)} id='email2' type="password" placeholder='Confirm Password' />
      <button className='form-button'>Submit</button>
    </form>
    <div className="form-img">
      <img src={Images.heroimg} alt="" />
    </div>
    </div>
    </>
  )
}

export default Signupform
