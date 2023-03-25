import { useSelector , useDispatch} from "react-redux";
import {deleteAsset} from "../features/assetSlice"
import {Link} from 'react-router-dom'

function AssetsList () {

    const assets = useSelector ( state => state.assets)
    const dispatch= useDispatch()

    const handleDelete = (id) => {
        dispatch (deleteAsset(id))
    }
    return (
        <div> 
            <header>
                <h1>Assets Actuales {assets.length}</h1>
             <Link to={'/create-asset'}  color='primary'>
             Agregar Asset 
             </Link> 
            
            </header>
            { assets.map (asset =>(
                <div key= {asset.id}>
                    <h1>asset id {asset.id}</h1>
                    <h1>employee id {asset.employee_id}</h1>
                    <h1>  name: {asset.name}</h1>
                    <h3> type :{asset.type}</h3>
                    <h3> code: {asset.code}</h3>
                    <h3> marca: {asset.marca}</h3>
                    <h3> description :{asset.description}</h3>
                    <h3> purchase date :{asset.purchase_date}</h3>
                    <button onClick={() =>handleDelete (asset.id)} >Delete</button>
                    <Link to={`/edit-asset/${asset.id}`}>Edit</Link>
                    
                </div>
            ))};
            </div>
    );

};

export default AssetsList