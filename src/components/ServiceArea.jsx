import React, { Component } from "react";

class ServiceArea extends Component {
  render() {
    return (
      <div className="service-area">
        <h3>SERVICE AREA</h3>
        <div className="line"></div>
        <div className="service-areas">
          <div className="service-areas service-areas-left">
            <div></div>
            <div>Davie</div>
            <div>Plantation</div>
            <div>Hollywood</div>
          </div>
          <div className="service-areas service-areas-left">
            <div>Coral Springs</div>
            <div>Pompano</div>
            <div>Pembroke Pines</div>
            <div>Dania Beach</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ServiceArea;


// class ServiceArea extends Component {
//   render() {
//     return (
//       <div className="service-area">
//         <h3>SERVICE AREA</h3>
//         <div className="line"></div>
//         <div className="service-areas">
//           <div className="service-areas service-areas-left">
//             <div> Dania Beach</div>
//             <div>Davie</div>
//             <div>Plantation</div>
//             <div>Hollywood</div>
//           </div>
//           <div className="service-areas service-areas-left">
//             <div>Coral Springs</div>
//             <div>Pompano</div>
//             <div>Pembroke Pines</div>
//             <div>Dania Beach</div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default ServiceArea;
