// import React from 'react';
// import PropTypes from 'prop-types';
//
// const ACHIEVEMENTS = [
//   {
//     id: 1,
//     name: 'test Achievement1',
//     bals: '30',
//     image: 'Paladin-256.png'
//   },
//   {
//     id: 2,
//     name: 'test Achievement2',
//     bals: '30',
//     image: 'Mage-256.png'
//   },
//   {
//     id: 3,
//     name: 'test Achievement3',
//     bals: '30',
//     image: ' Hunter-256.png'
//   }
// ];
//
// class Achievement extends React.Component {
//   render() {
//     return (
//       <li className="ada-media-box">
//         <img
//           src={this.props.image}
//           alt="Achievement"
//           width="100px"
//           height="100px"
//         />
//         <div className="ada-media-box__text">
//           <div>{ this.props.name }</div>
//           <div>{ this.props.bals }</div>
//         </div>
//         <div className="ada-icon" data-iconname="open" ></div>
//       </li>
//     );
//   }
// }
//
// class AchievementsList extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       displayedAchievements: ACHIEVEMENTS // ?
//     };
//
//     this.handleSearch = this.handleSearch.bind(this);
//   }
//   // getInitialState(){
//   //   return {
//   //     displayedAchievements: ACHIEVEMENTS //?
//   //   };
//   // }
//   handleSearch(event) {
//     const searchQuery = event.target.value.toLowerCase();
//     const displayedAchievements = ACHIEVEMENTS.filter(function (el) {
//       const searchValue = el.name.toLowerCase();
//       return searchValue.indexOf(searchQuery) !== -1;
//     });
//     console.log(displayedAchievements);
//     this.setState({
//       displayedAchievements
//     });
//   }
//
//   render() {
//     return (
//       <div>
//         <input type="text" className="ada-input" onChange={this.handleSearch} />
//         <ul>
//           {
//               this.state.displayedAchievements.map(function (el) {
//               return <Achievement
//                 key={el.id}
//                 name={el.name}
//                 bals={el.bals}
//                 image={el.image} />;
//               })
//           }
//         </ul>
//       </div>
//     );
//   }
// }
//
// ReactDOM.render(
//   <AchievementsList />,
//   document.getElementById('content')
// );
