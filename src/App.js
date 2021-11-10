import React from "react";
import { Route, Routes } from "react-router";
//import logo from './logo.svg';
import './App.css';
//import { Home, Register, Login } from "./pages";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";

/*const reducer = (state, action) => {
  if (action.type === "Increment"){
    return state + 1;
  }
  if (action.type === "Decrement"){
    return state - 1;
  }
  return state;
}*/

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Home" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )

}

export default App;


/*const [count, setcount] = useState(0);
  return (
   <>
    <p>{count}</p>
    <button onClick={() => setcount(count + 1)}>Incre</button>
    <button onClick={() => setcount(count - 1)}>Drecre</button>
   </>
  )*/

/*<form className="was-validated">
      <div className="form-floating mb-3 mt-3">
      <input type="email" className="form-control" id="Email1" placeholder="Email Address" required />
      <label for="Email1">Email Address</label>
      <div className="valid-feedback">Valid</div>
      <div className="invalid-feedback">In-Valid</div>
      </div>
      <div className="form-floating mb-3 mt-3">
      <input type="password" className="form-control" id="Password1" placeholder="Password" required/>
      <label for="Password1">Password</label>
      <div className="valid-feedback">Valid</div>
      <div className="invalid-feedback">In-Valid</div>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>*/

/*<Form className="was-validated">
    <Form.Group>
      <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3 mt-3">
        <Form.Control type="email" placeholder="Enter email" />
      </FloatingLabel>
      <Form.Text className="valid-feedback">Valid"</Form.Text>
      <Form.Text className="Invalid-feedback">Valid"</Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" >
      <FloatingLabel controlId="formBasicPassword" label="Password" >
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>*/
