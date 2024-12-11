import React from 'react'
import "./Style.css"
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState,useEffect } from 'react';
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

const Home = () => {
  const [search,setsearch]=useState("")

  const [product,setproduct]=useState([0])
  const [expanded, setExpanded] = React.useState(false);

  useEffect(() => {
    
  
    fetch("http://localhost:5000/api/v1/GetProducts").then(res=>res.json()).then(data=>setproduct(data))

  }, [])
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
 return (
    
<>
<input onChange={(e)=>setsearch(e.target.value)} type="text" placeholder='Search' /> 
<div className="container-01">
{
 product.filter((Item)=>{
  return search.toLowerCase() === '' ? Item : Item.tittle.toLowerCase().includes(search);

 }) .map(product=>(
<>


<div key={product.id} className="card-01">
 <img src={product.img} alt="" />
  <h1> {product.tittle} </h1>
  <p> {product.description} </p>
  <button> {product.btn} </button>
</div>

</>
))

}
</div>
{/* <Card className='card' key={product.id} >
<CardMedia
  component="img"
  height="194"
  image={product.img}
  alt="Paella dish"
/>
<CardContent><h1>
{product.tittle}
</h1>
</CardContent>
<CardContent><p>
{product.description}
</p>
</CardContent>
<CardContent><button>
{product.btn}
</button>
</CardContent>
<Collapse in={expanded} timeout="auto" unmountOnExit>
<CardContent>
</CardContent>
</Collapse>
</Card> */}


</>
)
}

// student.filter((Item)=>{
//   return search.toLowerCase() === '' ? Item : Item.Firstname.toLowerCase().includes(search);
// }

export default Home
