import {useState, useEffect}from 'react';
import { useDispatch,useSelector} from 'react-redux'
import { addAsset, editAsset} from '../features/assetSlice'
import {v4 as uuid} from 'uuid'
import { useNavigate , useParams} from 'react-router-dom';


function AssetForm () {

    const [asset, setAsset] = useState ({
        asset_id:"",
        employee_id:"",
        name:"",
        type:"",
        code:"",
        marca:"",
        description:"",
        purchase_date:""
    });

    const dispatch = useDispatch ();
    const navigate = useNavigate ();
    const params = useParams()
    const assets = useSelector ( state => state.assets)

    const handleChange = (e) => {
        setAsset({
            ...asset,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
            if (params.id) {
                dispatch(editAsset(asset))

            } else {
                dispatch(
                    addAsset({
                    ...asset,
                    id: uuid(),
                   } ,alert ('Asset agregado exitosamente :)'),
                   ),
                )
            }
       
      navigate ('/assets');
    };

    useEffect(() => {
        if (params.id) {
           setAsset( assets.find((asset) => asset.id === params.id));
        }

    }, []);

    return (
        <form onSubmit={handleSubmit}>
             < input type = "number" placeholder="employee id" name="employee_id" onChange={handleChange} value={asset.employee_id}/>
            < input type = "text" placeholder="name" name="name" onChange={handleChange} value={asset.name}/>
            < input type = "text" placeholder= " type" name="type" onChange={handleChange} value={asset.type}/>
            < input type = "number" placeholder="code" name="code" onChange={handleChange} value={asset.code}/>
            < input type = "text" placeholder="marca" name="marca" onChange={handleChange} value={asset.marca}/>
            < input type = "description" placeholder="description" name="decription" onChange={handleChange} value={asset.description}/>
            < input type = "date" placeholder="purchase date" name="purchase_date" onChange={handleChange} value={asset.purchase_date}/>
            <button> save</button>
            <button> cancel</button>
            
        </form>


    )

}

export default AssetForm