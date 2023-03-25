
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import EmployeesList from './components/EmployeesList';
import AssetsList from './components/AssetsList';
import EmployeeForm from './components/EmployeeForm';
import AssetForm from './components/AssetForm';
import Navbar from "./components/Navbar";
import NotFoundPage from './pages/NotFoundPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormGroup, ModalBody, ModalFooter, ModalHeader,Table,Modal ,Container, Button} from 'reactstrap';



function App() {

  return (
  <div >
   <BrowserRouter>
   <div>
    <Navbar/>
      <Routes>
      <Route path="*" element={<NotFoundPage/>}/>
        <Route path='/' exact element={<EmployeesList/>} />
        <Route path='/employees' exact element={<EmployeesList/>} />
        <Route path='/create-employee' element={<EmployeeForm/>} />
        <Route path='/edit-employee/:id' element={<EmployeeForm/>} />
        <Route path='/assets' exact element={<AssetsList/>} />
         {/* <Route path='/assets/employee/:id' exact element={<AssetEmployeeList/>} /> */}
        <Route path='/create-asset' element={<AssetForm/>} />
        <Route path='/edit-asset/:id' element={<AssetForm/>} />
      </Routes>
      </div>
   </BrowserRouter>
  </div>
  );
}

export default App;
