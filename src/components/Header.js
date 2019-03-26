import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { connect } from react-redux
import "./Header.css";

class SecondNav extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
      orchestral: false,
      guitars: false
    };
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(prop, val) {
    this.setState({
      [prop]: !val
    });
  }

  //   showMenu(event) {
  //     event.preventDefault();

  //     this.setState({ showMenu: true }, () => {
  //       document.addEventListener("click", this.closeMenu);
  //     });
  //   }
  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target))
      this.setState({ showMenu: false }, () => {
        document.removeEventListener("click", this.closeMenu);
      });
  }
  render() {
    const { orchestral, guitars } = this.state;
    return (
      <div className="secondNav">
        <div className="secondNav__mainList">
          <h3 onMou={() => this.showMenu("orchestral", orchestral)}>
            Orchestral
          </h3>
          <h3 onClick={() => this.showMenu("guitars", guitars)}>Guitars</h3>
          <h3 onClick={this.showMenu}>Keyboards</h3>
          <h3 onClick={this.showMenu}>Drums</h3>
          <h3 onClick={this.showMenu}>Other</h3>
          <h3 onClick={this.showMenu}>Audio Equipment</h3>
          <h3 onClick={this.showMenu}>Services</h3>
        </div>

        <div
          className="secondNav__subList"
          ref={element => {
            this.dropdownMenu = element;
          }}
        >
          <div
            className={
              orchestral
                ? "secondNav__orchestral"
                : "secondNav__orchestral hidden"
            }
          >
            <ul>
              <h4>Brass</h4>
              <li>French Horns</li>
              <li>Trombones</li>
              <li>Trumpets</li>
              <li>Tubas</li>
            </ul>
            <ul>
              <h4>Percussion</h4>
              <li>Bass Drums</li>
              <li>Bongos</li>
              <li>Marimbas</li>
              <li>Snares</li>
              <li>Timpani</li>
              <li>Xylophones</li>
            </ul>
            <ul>
              <h4>Strings</h4>
              <li>Basses</li>
              <li>Cellos</li>
              <li>Violas</li>
              <li>Violins</li>
            </ul>
            <ul>
              <h4>Woodwinds</h4>
              <li>Bass Clarinets</li>
              <li>Bassoons</li>
              <li>Clarinets</li>
              <li>Flutes</li>
              <li>Saxophones</li>
            </ul>
          </div>
          <div
            className={
              guitars ? "secondNav__guitars" : "secondNav__guitars hidden"
            }
          >
            <ul className="">
              <li>Bass Guitars</li>
              <li>Accoustic Guitars</li>
              <li>Electric Guitars</li>
            </ul>
          </div>
          <div className="secondNav__keyboards">
            <ul className="">
              <li>Pianos</li>
              <li>Electric Pianos</li>
            </ul>
          </div>
          <div className="secondNav__drums">
            <ul className="">
              <li>Bass Drums</li>
              <li>Cymbals</li>
              <li>Hi-Hats</li>
              <li>Kits</li>
              <li>Snares</li>
              <li>Tom-toms</li>
            </ul>
          </div>
          <div className="secondNav__other">
            <ul className="">
              <li>Harmonicas</li>
              <li>Tambourines</li>
              <li />
            </ul>
          </div>
          <div className="secondNav__audioEquipment">
            <ul className="">
              <li>Cables</li>
              <li>Headphones</li>
              <li>Microphone</li>
              <li>MIDIs</li>
              <li>Turntables</li>
            </ul>
          </div>
          <div className="secondNav__services">
            <ul className="">
              <li>Performers</li>
              <li>DJ</li>
              <li>Tuning</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default SecondNav;
