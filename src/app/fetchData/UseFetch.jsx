export const UseFetch=async ()=>{
    const res=await fetch("http://localhost:5173/api/data.json")
    try{
        if(!res.ok){
            throw new Error("failed to fetch data")
        }
        else{
            const data=await res.json()
            return data 
        }
    }
    catch(error){
        console.log(error)
    }
}