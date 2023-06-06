import TuitItem from "./tuit-item";
import { useSelector } from "react-redux";
import "./tuit-item.css";
const TuitList = ()=> {

    const { tuits } = useSelector(state => state.tuitslist)

return (
    <div >
      <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v6.0.0-beta3/css/all.css"/>
      <ul srtyle={{width : '100%',  display: 'table-cell'} }>

        {tuits.map((tuit,index) => (
        <TuitItem key={tuit._id} tuit={tuit} idx={index} len={tuits.length}/>
        
      ))}
       </ul>
    </div>
);
}

export default TuitList;