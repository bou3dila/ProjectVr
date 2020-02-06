import "aframe";
import "aframe-extras";
import "super-hands";
import 'aframe-event-set-component';
import { Scene, Entity } from "aframe-react";
import objtruck from "./assets/Truck.obj";
import mtltruck from "./assets/Truck.mtl";
import React from "react";
import ReactDOM from "react-dom";
import "aframe-physics-system";
import "aframe-physics-extras";
class App extends React.Component {
  state = {
    color: "red",
    x: 0,
    y: 0.5,
    z: -0.3,
    x1:0.256 ,
    y1:0.256 ,
    z1:-0.256 
  };


  
  randomizeColor = () => {
 
    // if( this.state.x == 0)
    // this.setState({ color: "blue", x: 1, y:1, z:0 })
    // else
    // this.setState({ color: "red", x: 0, y:0.256, z:-1 });


    const node = ReactDOM.findDOMNode(this);
    if (node instanceof HTMLElement) {
      const child1 = node.querySelector(".sphere");
      const count = child1.getAttribute("position");
      this.setState({x: count.x,y: count.y,z:count.z});
      child1.setAttribute("material", "color", "blue");
      // const child1 = node.querySelector(".sphere");
      // let count = child.getAttribute("position");
      // this.setState({x: count.x,y: count.y,z:count.z});
      // child1.setAttribute("material", "color", "blue");
    }
    
  }

  // componentDidUpdate(){
  //   this.randomizeColor();
  // }

  render() {
    return (
      <a-scene>
        <a-assets>
        <a-asset-item id="truck-obj" src={objtruck}></a-asset-item>
          <a-asset-item id="truck-mtl" src={mtltruck}></a-asset-item>
        </a-assets>
        <Entity
          position="0 0 -3 "
          geometry="primitive: plane; width: 4; height: auto"
          material="color: blue"
          text={`value: ${this.state.x},${this.state.y},${this.state.z}`}
        ></Entity>
        <Entity>
          <a-camera></a-camera>
          
          
          <Entity
          
            sphere-collider=""
            super-hands=""
            vive-controls="hand: right"
            oculus-touch-controls="hand: right"
            windows-motion-controls="hand: right"
          ></Entity>
          <Entity
            sphere-collider=""
            super-hands=""
            vive-controls="hand: left"
            oculus-touch-controls="hand: left"
            windows-motion-controls="hand: left"
          ></Entity>
        </Entity>
        <Entity
          position={{x:0, y: 0.5, z: -1}}
          hoverable=""
          grabbable=""
          stretchable=""
          draggable=""
          dropppable=""
          src="#truck-obj"
          mtl="#truck-mtl"
          scale="5 5 5"
          obj-model="obj: #truck-obj; mtl: #truck-mtl"
        ></Entity>
        <Entity
          className="sphere"
         // event-set__click={this.randomizeColor}
          geometry={{ primitive: "sphere", radius:"0.25"  }}
          material={{ color : this.state.color }}
          position={{ x: this.state.x, y: this.state.y, z: this.state.z }}
          events={{ click: this.randomizeColor}}
          hoverable=""
          grabbable=""
          stretchable=""
          draggable=""
          dropppable=""
        />
        <Entity
         // event-set__click={this.randomizeColor}
          geometry={{ primitive: "sphere", radius:"0.25"  }}
          material={{ color : this.state.color }}
          position={{ x: 1, y: 1, z: 1 }}
          //events={{ click: this.randomizeColor}}
          hoverable=""
          grabbable=""
          stretchable=""
          draggable=""
          dropppable=""
        />
        /
         {/* <Entity
          geometry={{ primitive: "box", width: 0.33, height: 0.33, depth: 0.33  }}
          material={{ color : this.state.color }}
          position={{ x: 0.5, y: 2, z: -0.5 }}
          events={{ click: this.randomizeColor}}
          hoverable=""
          grabbable=""
          stretchable=""
          draggable=""
          dropppable=""
        />
        <Entity
          geometry={{ primitive: "box", width: 0.33, height: 0.33, depth: 0.33  }}
          material={{ color : "blue" }}
          position={{ x: 1, y: 1, z: 0}}
          events={{ click: this.randomizeColor}}
          hoverable=""
          grabbable=""
          stretchable=""
          draggable=""
          dropppable=""
        /> */}
        {/* <a-sphere
          class="test"
          ondragstart={this.randomizeColor}
          hoverable=""
          grabbable=""
          stretchable=""
          draggable=""
          dropppable=""
          color={this.state.color}
          position="0 0 -1"
        ></a-sphere> */}
        <a-sky src={require("./assets/360_world.jpg")} />
      </a-scene>
    );
  }
}

export default App;
