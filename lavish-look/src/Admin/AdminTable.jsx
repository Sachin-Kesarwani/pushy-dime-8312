// Admin 
import AdminLogin from "./AdminLogin"
import AdminSignup from "./AdminSignup"
import Login from "../Navbar/Login"



import AdminWelcome from "./Adminwelcome"
import { useEffect, useState } from "react"
import { Button, Heading, Input, Select ,Container} from '@chakra-ui/react'
import {ButtonGroup } from '@chakra-ui/react'
import axios from "axios"
import { useContext } from "react"
import { AdminAuthContext } from "../Context/AdminAuth"
let inidata=  {
    title: '',
    price:"",
    description: '',
    image: '',
    category: '',
    rating:"",
    discount:""
}



// import Signup from "../Navbar/Signup"
 export default function AdminPostdata(){


    let [data,setData]=useState(inidata)
    let [editData,setEditdata]=useState({id:""})
     let [arr,setarr]=useState([])
     let [deleteid,setDeleteid]=useState("")
     let [loadingpost,setLoadingpost]=useState(false)
     let [loadingedit,setLoadingedit]=useState(false)
     let [loadingdel,setLoadingdel]=useState(false)
     let [url,setUrl]=useState("https://63c43284a908563575336689.mockapi.io/products")


     let {adminAuth}=useContext(AdminAuthContext)
function getdata(e){
   let {name,value}=e.target
   setData({...data,[name]:value})
}




async function getData(){
    console.log("hi")
    axios({
        method:"get",
        url:"https://reqres.in/api/users",


    })
    .then((res)=>{
        // console.log(res.data)
        setarr(res.data.data)
    })
}
 function postdata(data,link){
setLoadingpost(true)
    console.log("35",data)
   axios({
    method:"post",
    url:link,
    data:data
   }).then((res)=>{
    setLoadingpost(false)
   }).finally((res)=>{
    setLoadingpost(false)
   })
 
}


function Adddata(e){
    e.preventDefault()
     postdata(data,url)
}
function editdata(e){
 
    let {name,value}=e.target
    if(value!==""){
        setEditdata({...editData,[name]:value})
    }
 
   
}


function handleedit(e){


   e.preventDefault()
   postEdit(url,editData)
}


async function postEdit(url,obj){
    setLoadingedit(true)
    let id=Number(obj.id)
    console.log(url,obj,id)
  try {
     let res=await fetch(`${url}/${id}`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(obj)
     })
     setLoadingedit(false)
  } catch (error) {
   
  }
}
async function handledelete(url,id){
    setLoadingdel(true)
try {
    let res=await fetch(`${url}/${id}`,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json"
        },
    })
    setLoadingdel(false)
} catch (error) {
   
}
}
// let [name,setName]=useState("")
// function showname(){
//     let data=JSON.parse(localStorage.getItem("LogAdmin"))
//     setName(data.fname)
// }
// useEffect(()=>{
//     showname()
// },[])
    return(
        <>
        {/* < AdminWelcome  name={name} /> */}
        {/* <AdminLogin/>
    <AdminSignup/> */}
         <Container maxW='md' bg='white' color='black'>
        <Heading>Add data Here, </Heading>
        {/* <Heading as="h5" size='xs' >(Following URL is just for your testing)</Heading>
        <Heading  as='h6' size='xs'>
        https://63c43284a908563575336689.mockapi.io/products
          </Heading> */}
<Select placeholder="Select Section For Post The Data"    onChange={(e)=>setUrl(e.target.value)} >
    <option value="https://63ca76f3d0ab64be2b5319f8.mockapi.io/womens" >In Womens Section</option>
    <option value="https://63c8d5b2c3e2021b2d4a4e00.mockapi.io/mens">In Mens Section</option>
    <option value="https://63ca76f3d0ab64be2b5319f8.mockapi.io/Kids" > In Kids Section </option>
    <option value="https://63ca8992f36cbbdfc75aa2e5.mockapi.io/shoes" >In Shoes Section </option>
    <option value="https://63ca8992f36cbbdfc75aa2e5.mockapi.io/sleeper" >In Sleeper Section</option>

</Select>




        {/* <Input placeholder="Enter URL where you want to POST"   name="title" onChange={(e)=>setUrl(e.target.value)} /> */}
        <Input placeholder="PrductName" value={data.title} name="title" onChange={getdata} />
        {/* <Input placeholder="Price" value={data.price} name="price"onChange={getdata} /> */}
        <Select placeholder='Select Price' name="price"  value={data.price} onChange={getdata}>
        <option value='300'>300</option>
        <option value='500'>500</option>
        <option value='700'>700</option>
        <option value='800'>800</option>
        <option value='1000'>1000</option>
        <option value='1200'>1200</option>
        <option value='1400'>1400</option>
        <option value='1600'>1600</option>
        <option value='1800'>1800</option>
        </Select>
        <Input placeholder="Description" value={data.description} onChange={getdata} name="description"/>
        <Input placeholder="Image URL" value={data.image} name="image"onChange={getdata} />
        <Input placeholder="Category" value={data.category} name="category"onChange={getdata} />
        {/* <Input placeholder="Rating" value={data.rating} name="rating"onChange={getdata} /> */}
<Select placeholder="Select Rating" value={data.rating} name="rating"onChange={getdata}>
 
<option value="2.0">2.0</option>
<option value="2.4">2.4</option>
<option value="2.8">2.8</option>
<option value="3.2">3.2</option>
<option value="3.6">3.6</option>
<option value="4.0">4.0</option>
<option value="4.4">4.4</option>
<option value="4.8">4.8</option>
<option value="5.0">5.0 </option>
</Select>


        {/* <Input placeholder="Discount" value={data.discount} name="discount"onChange={getdata} /> */}
        <Select placeholder="Select Discount" value={data.discount} name="discount"onChange={getdata}>
        <option value='300'>100</option>
        <option value='200'>200</option>
        <option value='300'>300</option>
        <option value='400'>400</option>
        <option value='500'>500</option>
        <option value='600'>600</option>
        <option value='700'>700</option>
        <option value='800'>800</option>
        <option value='900'>900</option>
        </Select>
       {
        loadingpost?  <Button
          isLoading
       loadingText='Adding'
        colorScheme='teal'
        variant='outline'
        spinnerPlacement='end'
        >
    Adding
        </Button>:  <Button
        onClick={Adddata}
       
        colorScheme='teal'
        variant='outline'
        spinnerPlacement='end'
        >
      Add
        </Button>
       }
     


{/*
         <Button onClick={Adddata}>Add</Button> */}
         {/* <Button onClick={handleclick}>get</Button> */}
        <Heading>Edit data here ,</Heading>
        {/* <Heading  as='h6' size='xs'>
        https://63c43284a908563575336689.mockapi.io/products
          </Heading> */}
          <Select placeholder="Select Section For Edit The Data"    onChange={(e)=>setUrl(e.target.value)} >
    <option value="https://63ca76f3d0ab64be2b5319f8.mockapi.io/womens" >In Womens Section</option>
    <option value="https://63c8d5b2c3e2021b2d4a4e00.mockapi.io/mens">In Mens Section</option>
    <option value="https://63ca76f3d0ab64be2b5319f8.mockapi.io/Kids" > In Kids Section </option>
    <option value="https://63ca8992f36cbbdfc75aa2e5.mockapi.io/shoes" >In Shoes Section </option>
    <option value="https://63ca8992f36cbbdfc75aa2e5.mockapi.io/sleeper" >In Sleeper Section</option>

</Select>
        {/* <Input placeholder="Enter URL where you want to EDIT" name="title" onChange={(e)=>setUrl(e.target.value)} /> */}
        <Input placeholder="Enter Your  Product Id" value={editData.id}  name="id" onChange={editdata} />
        <Input placeholder="PrductName" value={editData.title} name="title" onChange={editdata} />
        <Input placeholder="Price" value={editData.price} name="price"onChange={editdata} />
        <Input placeholder="Description" value={editData.description} onChange={editdata} name="description"/>
        <Input placeholder="Image URL" value={editData.image} name="image"onChange={editdata} />
        <Input placeholder="Category" value={editData.category} name="category"onChange={editdata} />
        <Input placeholder="Rating" value={editData.rating} name="rating"onChange={editdata} />
        <Input placeholder="Discount" value={editData.discount} name="discount"onChange={editdata} />
        {
        loadingedit?  <Button
          isLoading
       loadingText='Editing'
        colorScheme='teal'
        variant='outline'
        spinnerPlacement='end'
        >
    Adding
        </Button>:  <Button
      onClick={handleedit}
       
        colorScheme='teal'
        variant='outline'
        spinnerPlacement='end'
        >
      Edit
        </Button>
       }
        {/* <Button onClick={handleedit} >Edit</Button> */}
        <Heading>Delete Data</Heading>
        {/* <Heading  as='h6' size='xs'>
        https://63c43284a908563575336689.mockapi.io/products
          </Heading> */}
          <Select placeholder="Select Section For Edit The Data"    onChange={(e)=>setUrl(e.target.value)} >
    <option value="https://63ca76f3d0ab64be2b5319f8.mockapi.io/womens" >In Womens Section</option>
    <option value="https://63c8d5b2c3e2021b2d4a4e00.mockapi.io/mens">In Mens Section</option>
    <option value="https://63ca76f3d0ab64be2b5319f8.mockapi.io/Kids" > In Kids Section </option>
    <option value="https://63ca8992f36cbbdfc75aa2e5.mockapi.io/shoes" >In Shoes Section </option>
    <option value="https://63ca8992f36cbbdfc75aa2e5.mockapi.io/sleeper" >In Sleeper Section</option>

</Select>
        {/* <Input placeholder="Enter URL where you want to DELETE" name="title" onChange={(e)=>setUrl(e.target.value)} /> */}
        <Input placeholder="Enter Your  Product Id" value={deleteid}  name="id" onChange={(e)=>setDeleteid(e.target.value)} />


        {
        loadingdel?  <Button
          isLoading
       loadingText='Deleting'
        colorScheme='teal'
        variant='outline'
        spinnerPlacement='end'
        >
   
        </Button>:  <Button
     onClick={()=>handledelete(url,Number(deleteid))}
       
        colorScheme='teal'
        variant='outline'
        spinnerPlacement='end'
        >
     Delete
        </Button>
       }
       </Container>
       
        </>
    )
}

