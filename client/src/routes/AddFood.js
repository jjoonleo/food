import axios from 'axios';
import { useParams } from "react-router-dom";
import React, { useEffect, useState }  from 'react';
import RestaurantList from '../components/RestaurantList';
import errorCode from '../constants/errorCode';

const AddFood = () => {
    const {restaurant} = useParams();
    console.log(restaurant);
    // const [restaurantNameText, setRestaurantNameText] = useState("");
    // const [Error, setError] = useState(null);
    // const [restaurants, setRestaurants] = useState([]);

    // const getRestaurants = async () => {
    //     try {
    //         console.log("gettin restaurants");
    //         let result = await axios.get(
    //             "/api/restaurant/all",
    //             { withCredentials: true }
    //         );
            
    //         result = result.data.result;
    //         console.log([...result]);
    //         setRestaurants([...result]);


    //     } catch (error) {
    //         console.log(error);
    //         setError("식당 목록을 불러오는데 실패했습니다.");
    //     }
    // }

    // const validate = () => {
    //     if(restaurantNameText === ""){
    //         return false;
    //     }
    //     return true;
    // }

    // const handleSubmit = async (event) => {
    //     if(!validate()){
    //         setError("이름을 입력해 주세요.");
    //         return;
    //     }
    //     try {
    //         let result = await axios.post(
    //             "api/restaurant",
    //             {
    //                 name: restaurantNameText,
    //             },
    //             { withCredentials: true }
    //         )
    //         console.log(result);
    //         if(result.status === 201){
    //             setRestaurantNameText("");
    //             setError("");
    //             getRestaurants();
    //             alert("입력을 성공했습니다.");
    //         }
    //     } catch (error) {
    //         let response = error.response;
    //         let err = error.response.data.error;
    //         if(response.status === 405){
    //             if(err.code === errorCode.MongoServerError){
    //                 setError("중복된 이름입니다. 다른 이름을 입력하세요.");
    //             }
    //         }else if(response.status === 400){
    //             if(err.code === errorCode.ValidationError){
    //                 setError("이름을 입력해 주세요.");
    //             }
    //         }else{
    //             setError("알 수 없는 에러가 발생했습니다.")
    //         }
    //     }
        
    // }

    // useEffect(()=>{
    //     getRestaurants();
    // },[]);

    // return(
    //     <div className="App">
    //         {Error? <p>{Error}</p>:null}
    //         <input type="text" placeholder="restaurant name" value={restaurantNameText} onChange={(e)=>setRestaurantNameText(e.target.value)}/>
    //         <button onClick={handleSubmit}>submit</button>
    //         {restaurants?<RestaurantList restaurants={restaurants}/>:null}
    //     </div>
    // );
    return(
        <div className="App">
            <header className="App-header">
                <h1>Hello World!123!!!</h1>
                <h1>text for testing server</h1>
            </header>
        </div>
    );
}

export default AddFood;