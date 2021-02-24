import React, {Component} from 'react';

class OpenFxDemoAccount extends Component {
    render() {
        return (
            <div>
                <form>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">First Name</label>
    <input type="text" className="form-control" id="firstName" aria-describedby="emailHelp" placeholder="Enter First Name"/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Last Name</label>
    <input type="text" className="form-control" id="lastName" aria-describedby="emailHelp" placeholder="Enter Last Name"/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Country</label>
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Country"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
   </div>
        );
    }
}


export default OpenFxDemoAccount;
