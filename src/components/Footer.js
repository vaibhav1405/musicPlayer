import React from 'react';
import 'font-awesome/css/font-awesome.css';

function Footer() {
  return (
    <>
        <footer>
            <div className="footer bg-dark text-center text-white">
                <div className="container p-4 pb-0">
                    <div className="text-center">
                        <div className="col-12">
                            <h3>Portfolio Webiste</h3>
                            <br/>
                        </div>
                        <div className="col-12">
                            {/* <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/profile.php?id=100083387141433" role="button"><i className="fa fa-facebook fa-lg"></i></a>
                            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fa fa-twitter fa-lg"></i></a>
                            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fa fa-google fa-lg"></i></a>
                            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fa fa-instagram fa-lg"></i></a>
                            <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/devanshu-dalal-3042a1219/" role="button"><i className="fa fa-linkedin fa-lg"></i></a>
                            <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/devanshukd04" role="button"><i className="fa fa-github fa-lg"></i></a> */}
                            <a className="btn text-white btn-floating m-1" style={{backgroundColor: "#55acee"}} href="https://www.facebook.com" role="button" ><i className="fa fa-facebook fa-lg"></i></a>
                            <a className="btn text-white btn-floating m-1" style={{backgroundColor: "#55acee"}} href="#!" role="button" ><i className="fa fa-twitter fa-lg"></i></a>
                            <a className="btn text-white btn-floating m-1" style={{backgroundColor: "#dd4b39"}} href="#!" role="button"><i class="fa fa-google fa-lg"></i></a>
                            <a className="btn text-white btn-floating m-1" style={{backgroundColor: "#ac2bac"}} href="#!"role="button"><i class="fa fa-instagram fa-lg"></i></a>
                            <a className="btn text-white btn-floating m-1" style={{backgroundColor: "#0082ca"}} href="https://www.linkedin.com" role="button"><i class="fa fa-linkedin fa-lg"></i></a>
                            <a className="btn text-white btn-floating m-1" style={{backgroundColor: "#333333"}} href="https://github.com" role="button"><i class="fa fa-github fa-lg"></i></a>
                        </div>
                    </div>
                   
                </div>
            </div>

        </footer>

       
    </>
  );
}

export default Footer