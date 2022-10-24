import Posts from "./post";
import { BsStars } from "react-icons/bs";
import { useEffect,useState } from "react";
// import axios from 'axios';
// import HomeSvg from '../img/home.svg';

const Content = () => {
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //     axios.get("https://my-json-server.typicode.com/minzamammalik/jsonplaceholder/posts")
  //         .then(response => {
  //             console.log("response: ", response.data);

  //             setPosts(response.data);
  //         })
  //         .catch(err => {
  //             console.log("error: ", err);
  //         })

  // }, [])

  return (
    <div className="content">
      <header className="header">
        <span>Home</span>
        <i title="Top Tweets">
          <BsStars />
        </i>
      </header>
      <div className="myProfileContainer">
        <div className="flex">
          <a href="https://twitter.com/Shehza_d_">
            <img
              className="profilePhoto"
              src="https://pbs.twimg.com/profile_images/1519059538556723203/ouFwv4wv_400x400.jpg"
              alt="twitter DP"
            />
          </a>
          <input
            className="postInput"
            type="text"
            placeholder="What's Happening?"
          />
        </div>
        <div className="postOptions">
          <ul>
            <li>O</li>
            <li>O</li>
            <li>O</li>
            <li>O</li>
            <li>O</li>
            <li>O</li>
          </ul>
          <button>Tweet</button>
        </div>
      </div>

      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />

    {/*{posts.map((eachPost, i) => (
        <>
          <Posts
            name={eachPost.name}
            postText={eachPost.postText}
            profilePhoto={eachPost.profilePhoto}
            postImage="https://cdn.motor1.com/images/mgl/mrz1e/s3/coolest-cars-feature.jpg"
            postDate={eachPost.postDate}
          />
        </>
	))}*/}
    </div>
  );
};

export default Content;
