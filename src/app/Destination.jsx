import SeacrhModal from "./search/SeacrhModal";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import './style/destination.css'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UseFetch } from "./fetchData/UseFetch";
function Destination() {
  const [listCategory,setCategory]=useState([
    {id:1,name:"All",active:true},
    {id:2,name:"Park",active:false},
    {id:3,name:"beach",active:false},
    {id:4,name:"Montain",active:false},
    {id:5,name:"Nature",active:false}
  ])  

  const [listData,setListData]=useState([])

  useEffect(()=>{
    const fetchData=async ()=>{
        const data=await UseFetch()
        setListData(data)
    }
    fetchData()
  },[])

  const activeCategory=(id)=>{
    setCategory(prev=>prev.map(cat=>
    cat.id==id?{...cat,active:true} : {...cat,active:false}    
        ))
  }
  return (
    <>
      <div
        data-aos="fade-right"
        className="text-center mt-5 pb-5"
        style={{ fontFamily: "monospace" }}
      >
        <h2>Find Your Destination</h2>
        <p>Fill in the field below to find the best sport for your tour</p>
      </div>
      <form action="" className="row d-flex justify-content-evenly align-items-center">
        <input className="col-10 col-md-3 " type="text" placeholder="Location" />
        <input  className="col-10 col-md-3 " type="text" placeholder="Budget"/>
        <input  className="col-10 col-md-3 " type="text" placeholder="Date" />
        <div style={{cursor:"pointer"}} className="col-10 col-md-2 shadow searchButton mb-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            <span className="me-1"><ion-icon name="search-outline"></ion-icon></span>
            <span>Search</span>
            <SeacrhModal/>
        </div>
      </form>

      <div className="category d-flex ">
        {listCategory.map((category)=>(
            <div style={{backgroundColor:category.active&&"orange",color:category.active!=true?'black':"black"}} onClick={()=>activeCategory(category.id)} key={category.id} className="m-3 card shadow-lg  d-flex align-items-center justify-content-center">
                <p style={{cursor:'pointer',fontFamily:'monospace',width:'70px',borderRadius:'35px'}} className="mt-2  text-center">{category.name}</p>
            </div>
        ))}
      </div>

      <div data-aos="fade-up" style={{flexWrap:'wrap',width:'100%',display:'flex',justifyContent:'space-between'}} className="showData">
        {listData.map((d)=>(
            <div style={{position:'relative'}} key={d.id}>
              <Link to={`/category/${d.name}`}>
              <img className="rounded shadow m-2" src={d.src} alt="" style={{width:'260px',height:'200px'}} />
              </Link>
                <div className="content">
                    <h5 className="w-75" style={{top:'74%',left:'6%',position:'absolute',color:'#eee',fontFamily:'monospace'}}>{d.name}</h5>
                    <p className="card shadow bg-light" style={{width:'30px',height:'30px', textAlign:'center',position:'absolute',top:'75%',left:'80%'}}>{d.rating}</p>
                </div>
            </div>
        ))}
      </div>
    </>
  );
}

export default Destination;
