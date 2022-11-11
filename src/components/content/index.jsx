import Posts from "../post";
import "./style.css";
import { BsStars, BsImage } from "react-icons/bs";
import { useEffect, useState } from "react";
import { IoImageOutline } from "react-icons/io5";
import { AiOutlineFileGif } from "react-icons/ai";
import { BiPoll } from "react-icons/bi";
import { TbMoodCrazyHappy } from "react-icons/tb";
import { GrSchedulePlay } from "react-icons/gr";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import { MdAddAPhoto } from "react-icons/md";
import axios from "axios";
// Import the functions you need from the SDKs you need
import { db } from "../../firebase";
import {                   
  collection,  addDoc,
  onSnapshot,  query,
  serverTimestamp,  orderBy,
  limit,
} from "firebase/firestore";

// import axios from 'axios';
// import HomeSvg from '../img/home.svg';

const Content = () => {
  const [posts, setPosts] = useState([]);
  const [postText, setPostText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [pic, setPic] = useState(undefined);

  useEffect(() => {
    // (async () => {
    //   const querySnapshot = await getDocs(collection(db, "posts"));
    //   querySnapshot.forEach((doc) => {
    //     console.log(`${doc.id} =>`, doc.data());
    //     setPosts((perviousValue)=>[...perviousValue, doc.data()]);
    //   });
    // })();

    let unsubscribe;
    (() => {
      const q = query(
        collection(db, "posts"),
        orderBy("createdOn", "desc"),
        limit(60)
      );
      unsubscribe = onSnapshot(q, (querySnapshot) => {
        const posts = [];
        querySnapshot.forEach((doc) => {
          posts.push({ id: doc.id, ...doc.data() });
          // console.log({ id: doc.id, ...doc.data() })
        });
        setPosts(posts);
        console.log("posts", posts);
      });
    })();

    //this is useEffect cleanup and is called when i leave this useEffect
    return () => {
      unsubscribe();
    };
  }, []);

  const savePost = async (e) => {
    e.preventDefault();
    //pix/
    if (!pic) {
      try {
        const docRef = await addDoc(collection(db, "posts"), {
          text: postText,
          createdOn: serverTimestamp(),
        });
        // console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      return;
    }
    //pic/
    const cloudinaryData = new FormData();
    cloudinaryData.append("file", pic);
    cloudinaryData.append("upload_preset", "shehzadPosting ");
    cloudinaryData.append("cloud_name", "deh1sqok6");
    console.log(cloudinaryData);
    axios
      .post(
        `https://api.cloudinary.com/v1_1/deh1sqok6/image/upload`,
        cloudinaryData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      )
      .then(async (res) => {
        console.log("from then", res.data);
        try {
          const docRef = await addDoc(collection(db, "posts"), {
            text: postText,
            img: res?.data?.url,
            createdOn: serverTimestamp(),
          });
          // console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      })
      .catch((err) => console.log("from catch err", err));
  };
  return (
    <div className="content">
      <header className="header">
        <span>Home</span>
        <i title="Top Tweets">
          <BsStars />
        </i>
      </header>

      <form onSubmit={savePost} className="myProfileContainer_Form">
        <div className="mainPostFormDiv">
          <a href="https://twitter.com/Shehza_d_" className="myProfileA">
            <img
              className="profilePhoto"
              src="https://pbs.twimg.com/profile_images/1519059538556723203/ouFwv4wv_400x400.jpg"
              alt="twitter DP"
            />
          </a>

          <textarea
            className="postInput"
            type="text"
            placeholder="What's Happening?"
            onChange={(e) => setPostText(e.target.value)}
          />
          <label name="postPictureInput" className="postPictureInput">
            <input
              className="imgInput"
              type="file"
              name="postPictureInput"
              accept="image/*"
              placeholder="dg"
              onChange={(e) => {
                console.log(e.currentTarget.files[0]);
                setPic(e.currentTarget.files[0]);
              }}
            />
            <MdAddAPhoto />
          </label>
        </div>
        <div className="postOptions">
          <ul className="postOptionsIcons">
            <li>
              <BsImage title="hello" />
            </li>
            <li>
              <AiOutlineFileGif />
            </li>
            <li>
              <BiPoll />
            </li>
            <li>
              <TbMoodCrazyHappy />
            </li>
            <li>
              <GrSchedulePlay />
            </li>
            <li>
              <MdOutlineAddLocationAlt />
            </li>
          </ul>
          <button type="submit" className="tweetBtn">
            Tweet
          </button>
        </div>
      </form>

      {posts?.map((eachPost, i) => (
        <Posts
          key={i}
          id={eachPost?.id}
          // name={eachPost?.name}
          postText={eachPost?.text}
          // profilePhoto={eachPost?.profilePhoto}
          postImage={eachPost?.img}
          postDate={eachPost?.createdOn}
        />
      ))}
    </div>
  );
};

export default Content;
