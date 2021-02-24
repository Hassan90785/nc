import React, {Component} from 'react';
import {Button} from "@material-ui/core";

class FooterTwo extends Component {
    render() {
        return (
        <>
            <div className="container bg-primary">
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-4 font-xs">
                                Subscribe to our Newsletter
                            </div>
                            <div className="col-md-4">
                                <input type='email' name='newsletter' placeholder='main@example.com' class='text-center'/>
                            </div>
                            <div className="col-md-4">
                                <Button variant="contained" color="secondary">
                                  Secondary
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <Button variant="contained" color="secondary">
                                  Secondary
                                </Button>
                            <div className="col-md-4">
                              <Button variant="contained" color="secondary">
                                  Secondary
                                </Button>
                            </div>
                            <div className="col-md-4">
                               <Button variant="contained" color="secondary">
                                  Secondary
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        );
    }
}

export default FooterTwo;
