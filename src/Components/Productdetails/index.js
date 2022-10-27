import React from "react";
import './Productdetails.scss';
import productimg1 from "../../images/image-product-1.jpg";
import productimg2 from "../../images/image-product-2.jpg";
import productimg3 from "../../images/image-product-3.jpg";
import productimg4 from "../../images/image-product-4.jpg";
import carticon from "../../images/icon-cart.svg";
import profilePic from "../../images/image-avatar.png"


class Productdetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newimage: "",
            counter: 0
        };
    }
    handleImageclick = (e) => {
        console.log("e:::", e, e.target.currentSrc)
        let newimagevar = e.target.currentSrc;
        this.setState({
            newimage: newimagevar
        })
    }
    handleIncClick = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    handleDecClick = () => {
        if (this.state.counter > 0) {
            this.setState({
                counter: this.state.counter - 1
            })
        }
    }
    render() {
        return (
            <div className="main-wrapper">
                <div className="nav-wrapper">
                    <div className="nav-home"> sneakers </div>
                    <div className="nav-list">
                        <ul>
                            <li><a href="Collections">Collections </a> </li>
                            <li> <a href="mens">mens  </a></li>
                            <li><a href="womens"> womens </a> </li>
                            <li><a href="About"> About </a> </li>
                            <li><a href="Contact"> Contact  </a></li>
                        </ul>
                    </div>
                    <div className="nav-right">
                        <div className="nav-cart">                            
                     <img className="img-slider" src={carticon} tabindex="0" alt="Italian Trulli" ></img></div>
                        <div className="nav-profile">
                        <img className="img-slider" src={profilePic} tabindex="0" alt="Italian Trulli" ></img>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="container">
                    <div className="left-wrapper">
                        <div className="img-slider-main">
                            <img className="img-slider" alt="img-slider" src={this.state.newimage ? this.state.newimage : productimg1}></img>
                            <div className="small-img-slider">
                                <img className="img-slider" src={productimg1} tabindex="0" alt="Italian Trulli" onClick={(e) => this.handleImageclick(e)}></img>
                                <img className="img-slider" src={productimg2} tabindex="1" alt="Italian Trulli" onClick={(e) => this.handleImageclick(e)}></img>
                                <img className="img-slider" src={productimg3} tabindex="2" alt="Italian Trulli" onClick={(e) => this.handleImageclick(e)}></img>
                                <img className="img-slider" src={productimg4} tabindex="0" alt="Italian Trulli" onClick={(e) => this.handleImageclick(e)}></img>
                            </div>
                        </div>

                    </div>
                    <div className="right-wrapper">
                        <small>sneakers Company</small>
                        <h2> Fall Limited Edition sneakers</h2>
                        <p> These low price snearers are your perfect causel wear campanion.
                            futuring a double rubber outer sole.they'll whitestand everthing the whether can offer </p>
                        <h4>$125.00</h4>
                        <div className="discount"> 50%</div>
                        <h5>$250.00</h5>
                        <div className="btn-wrapper">
                        <div className="counter">
                            <button className="button-dec"  onClick={this.handleDecClick}>-</button>
                            <div className="Counter-value"> {this.state.counter}</div>  <button className="button-inc"  onClick={this.handleIncClick}>+</button>
                        </div>
                        <button className="add-to-cart-btn"> Add to cart</button></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Productdetails;