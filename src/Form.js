import { useState } from "react";

function Form(props) {

    const [product, setProduct] = useState(props.data);
    const [sumitted, setSubmitted] = useState(false)

    let changeFormData = (event) => {
        const { name, value } = event.target;
        setProduct({ ...product, [name]: value })
    }
    return (
        <div className="form-overlay">
            <form>
                <div className="form-group">
                    <label>projectname:</label>
                    <input className="form-control mt-2" value={product.projectname} type="text" name="projectname" placeholder="Enter Name"
                        onChange={changeFormData} />
                    {
                        sumitted && product.projectname.length < 5 && <span className="text-danger">Product name must be 5 charecters</span>
                    }

                </div>

                {/* <div className="form-group">
                    <label>username:</label>
                    <input className="form-control mt-2" value={product.username} type="text" name="username" placeholder="Enter Name"
                        onChange={changeFormData} />
                    {
                        sumitted && product.username.length < 5 && <span className="text-danger">Product name must be 5 charecters</span>
                    }

                </div> */}
                
                <div className="form-group">
                    <label>workdescription:</label>
                    <input className="form-control mt-2"

                        value={product.workdescription}
                        onChange={changeFormData}

                        type="text" name="workdescription" placeholder="Enter workdescription" />
                    {
                        sumitted && product.workdescription === "" && <span className="text-danger">Product workdescription required</span>
                    }
                </div>

                <div className="form-group">
                    <label>startdate:</label>
                    <input className="form-control mt-2"

                        value={product.startdate}
                        onChange={changeFormData}

                        type="date" name="startdate" placeholder="Enter startdate" />
                    {
                        sumitted && product.startdate === "" && <span className="text-danger">Product startdate required</span>
                    }
                </div>

                <div className="form-group">
                    <label>enddate:</label>
                    <input className="form-control mt-2"

                        value={product.enddate}
                        onChange={changeFormData}

                        type="date" name="enddate" placeholder="Enter enddate" />
                    {
                        sumitted && product.enddate === "" && <span className="text-danger">Product end required</span>
                    }
                </div>
                
                <div className="form-group">
                    <label>workhours:</label>
                    <input className="form-control mt-2"

                        value={product.workhours}
                        onChange={changeFormData}

                        type="text" name="workhours" placeholder="Enter workhours" />
                    {
                        sumitted && product.workhours === "" && <span className="text-danger">Product workhours required</span>
                    }
                </div>
                

                <button className="btn btn-primary float-end"

                    onClick={(e) => {
                        setSubmitted(true)
                        e.preventDefault();
                        if (!!product.projectname &&  !!product.workdescription && !!product.startdate && !!product.enddate && !!product.workhours) {
                            props.addProduct(product)
                        }



                    }}

                >Send</button>
                <button className="btn btn-danger float-end"
                    onClick={(e) => { 
                        e.preventDefault();
                        props.closeForm()


                    }}
                >Cancel</button>

            </form>

        </div>
    )
}


export default Form