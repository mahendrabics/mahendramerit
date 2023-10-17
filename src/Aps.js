import React from "react";
import ProductList from "./productList";
import { deleteData, getData, putData, postData } from './api';
import { useEffect, useState } from 'react';
// import PieChartComponent from './PieChartComponent.js';
import ProductForm from "./Form";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";



const Aps = () => {
    

    const [products, setProducts] = useState([]);
    const [edit, setEdit] = useState(false);
    const [openForm, setopenForm] = useState(false);
    const [initialForm, setForm] = useState({projectname: '', username: '', workdescription: '', startdate: '',enddate: '',workhours: '' })
    const navigate = useNavigate();

    // const navigate = useNavigate();


    
    
      
    
   
    // useEffect(() => {
    //     getAllProducts();
    // }, [])

    useEffect(() => {
        const isAuthenticated = localStorage.getItem('authToken') !== null;
    
        if (!isAuthenticated) {
            
            navigate('/login');
        } else {
        
            getAllProducts();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    

    async function getAllProducts() {
        const response = await getData();
        setProducts(response.data);
    }
    async function addProduct(product) {
        const loggedInUsername = localStorage.getItem('lastEnteredUsername');

        let data = {
            projectname:product.projectname,
            username:loggedInUsername,
            // username: product.username,
            workdescription: product.workdescription,
            startdate:product.startdate,
            enddate:product.enddate,
            workhours: product.workhours,
        }
        if (edit)
            await putData(product.id, data);
        else
            await postData(data);
        getAllProducts();
        setopenForm(false);


    }
    async function deleteProduct(id) {
        await deleteData(id);
        getAllProducts();
    }

    function editProduct(value) {
        setEdit(true);
        setopenForm(true);
        setForm(value)

    }
    function closeForm() {
        setopenForm(false)
    }
    function showForm() {
        setForm({projectname: '',username: '', workdescription: '', startdate: '',enddate: '',workhours: '' })
        setopenForm(true);
        setEdit(false);

    }
    
    
    

    return (
        

        <div>
            <h2 className="text-primary text-center">CRUD Operations with React JS</h2>
            <button className="btn btn-primary float-end" onClick={() => { showForm() }}>Add Project</button> 
            <div className="float-end">
            <Link to="/logout" className="btn btn-primary" style={{ marginRight: '10px' }}>
             Logout
            </Link>

      </div>
        
            <ProductList products={products} deleteProduct={deleteProduct} editProduct={editProduct}></ProductList>
            {openForm && <ProductForm addProduct={addProduct} data={initialForm} closeForm={closeForm}  ></ProductForm>}
            {/* <PieChartComponent data={products} /> */}
            
            
        
            
            

        </div>

    )

};

export default Aps;


