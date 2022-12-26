import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
// import { Wraper } from 'components/Wraper/Wraper';

// const Profile = {
//   username: "Jacques Gluke",
//   tag: "jgluke",
//   location: "Ocho Rios, Jamaica",
//   avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   }
// }

// const UserCard = (
//  <div class="profile">
//   <div class="description">
//     <img
//       src={Profile.avatar}
//       alt="User avatar"
//       class="avatar"
//     />
//     <p class="name">{Profile.username}</p>
//     <p class="tag">{Profile.tag}</p>
//     <p class="location">{Profile.location}</p>
//   </div>

//   <ul class="stats">
//     <li>
//       <span class="label">Followers</span>
//       <span class="quantity">{Profile.stats.followers}</span>
//     </li>
//     <li>
//       <span class="label">Views</span>
//       <span class="quantity">{Profile.stats.views}</span>
//     </li>
//     <li>
//       <span class="label">Likes</span>
//       <span class="quantity">{Profile.stats.likes}</span>
//     </li>
//   </ul>
// </div>
// );



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// 

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//   <Wraper/>
//   </React.StrictMode>
// );


