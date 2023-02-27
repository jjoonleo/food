import React from 'react';

const RestaurantList = ({restaurants}) => {
    const length = restaurants.length;
    const onClick = (restaurant) => {
        console.log(restaurant.name);
    }

    return(
        <div>
            {(()=>{
                const options=[];
                for(let i = 0; i < length; i++){
                    console.log(i);
                    options.push(<div><button onClick={()=>{onClick(restaurants[i])}}>{restaurants[i].name}</button></div>);
                }
                return options;
            })()}
        </div>
    );
}

export default RestaurantList;