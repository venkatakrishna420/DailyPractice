import { useEffect , useState} from "react";
import axios from "axios";

function FeatchingData(){
    const [data, setData] =useState([]);
    const [Loading, setLoading] = useState(true);
    useEffect(()=>{
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY")
        .then((response)=>{
            setData(response.data.results);
            setLoading(false);
            setTimeout(()=>{
                console.log(data);
            },1000)
          window.localStorage.setItem("movieData" , JSON.stringify(response.data.results))
          handleData(response.data.results)
        }).catch((error)=>{
            console.log(error);
        }).finally(()=>{
            setLoading(false);
        })     
    
    })
    return (
        <div>
            {Loading ? <h1>Loading...</h1> : <h1>Data Loaded</h1>}
        </div>
        

        )
}