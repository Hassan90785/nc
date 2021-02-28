import React, {Component} from 'react';
import './openFxDemoAccount.css'
class OpenFxDemoAccount extends Component {
    render() {
        return (
            <>

        <div className="container">
            <div className="row my-3">
            <div className="col-md-6 mt-2">
                <h1>GTN Platform</h1>
                 <p>Change the way you trade and take charge of your stocks. Join Noor Capital Stocks Trading Platform (GTN), the most advanced and robust platform built with attention to detail to make your trading quick and easy.</p>
                <p>Now you can trade from anywhere in the world at a click of your fingertip. With our highly user-friendly and accessible platform, you can stay updated with the latest trends, news, alerts, and advice to keep you ahead in your trading.</p>
                <p>Whether you are a new or a pro trader, our platform is for everyone, making Noor Capital Stocks Trading Platform (GTN) the most preferred platform globally. 100% secured, this platform is available on the web, and mobile.</p>
            </div>
            <div className="col-md-6">
           <form>
              <div className="form-group mb-0">
                <label htmlFor="exampleInputEmail1">Do you have Noor Capital Live Account</label>
                  <br/>
                  <div className="form-check form-check-inline">
                     <label class="pure-material-radio">
                         <input type="radio" name='group'/>
                         <span>Yes</span>
                     </label>
                     <label class="pure-material-radio ml-2">
                         <input type="radio" name='group'/>
                         <span>No</span>
                     </label>
                    </div>
                </div>
                   <div className="group">
                      <input type="text" required name="name" required class="mat-input"/>
                      <span className="highlight"></span>
                      <span className="bar"></span>
                      <label class="mat-label">Name</label>
                    </div>
             <div className="group">
                      <input type="text" required name="email" required className="mat-input"/>
                      <span className="highlight"></span>
                      <span className="bar"></span>
                      <label className="mat-label">Email</label>
                    </div>
                <div className="group">
                      <input type="text" required name="phone" required className="mat-input"/>
                      <span className="highlight"></span>
                      <span className="bar"></span>
                      <label className="mat-label">Phone Number</label>
                </div>
                <div className="select">
					<select className="select-text" required>
						<option value=""  selected></option>
						<option value="1">Option 1</option>
						<option value="2">Option 2</option>
						<option value="3">Option 3</option>
					</select>
					<span className="select-highlight"></span>
					<span className="select-bar"></span>
					<label className="select-label">Select</label>
				</div>
               <div className="custom-control custom-checkbox my-2 mr-sm-2">
                <input type="checkbox" className="custom-control-input" id="customControlInline"/>
                <label className="custom-control-label" htmlFor="customControlInline">I have read the <a href="">agreement</a></label>
              </div>
              <button type="submit" className="btn btn-primary my-2">Request Account</button>
            </form>
            </div>
            </div>
    </div>
   </>
        );
    }
}


export default OpenFxDemoAccount;
