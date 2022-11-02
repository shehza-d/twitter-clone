import Posts from "../post";
import { BsStars, BsImage } from "react-icons/bs";
import { useEffect, useState } from "react";
import { IoImageOutline } from "react-icons/io5";
import { AiOutlineFileGif } from "react-icons/ai";
import { BiPoll } from "react-icons/bi";
import { TbMoodCrazyHappy } from "react-icons/tb";
import { GrSchedulePlay } from "react-icons/gr";
import { MdOutlineAddLocationAlt } from "react-icons/md";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  onSnapshot,
  query,
  serverTimestamp,
  orderBy,
  deleteDoc,
  updateDoc,
  limit,
} from "firebase/firestore";

// import axios from 'axios';
// import HomeSvg from '../img/home.svg';

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDSFR44NqKejUJV8TKLhlAOD63wQ4bpOGM",
  authDomain: "twetterdb.firebaseapp.com",
  projectId: "twetterdb",
  storageBucket: "twetterdb.appspot.com",
  messagingSenderId: "494029255747",
  appId: "1:494029255747:web:44e7e0908cf662afa490f6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const Content = () => {
  const [posts, setPosts] = useState([]);
  const [postText, setPostText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // const [editing, setEditing] = useState({
  //   editingId: null,
  //   editingText: "",
  // });

  useEffect(() => {
    // (async () => {
    //   const querySnapshot = await getDocs(collection(db, "posts"));
    //   querySnapshot.forEach((doc) => {
    //     console.log(`${doc.id} =>`, doc.data());
    //     setPosts((perviousValue)=>[...perviousValue, doc.data()]);
    //   });
    // })();

    let unsubscribe;
    const getRealTimeData = async () => {
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
    };
    getRealTimeData();

    //this is useEffect cleanup and is called when i leave this useEffect
    return () => {
      unsubscribe();
    };
  }, []);

  const savePost = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "posts"), {
        text: postText,
        createdOn: serverTimestamp(),
      });
      // console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="content">
      <header className="header">
        <span>Home</span>
        <i title="Top Tweets">
          <BsStars />
        </i>
      </header>

      <div className="myProfileContainer">
        <form onSubmit={savePost}>
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
              onChange={(e) => setPostText(e.target.value)}
            />

          </div>
          <div className="postOptions">
            <ul>
              <li>
                <BsImage />
                <IoImageOutline />
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
      </div>

      {/* <Posts postText={posts?.text} /> */}
      {/* <Posts postText={postText} /> */}

      {posts?.map((eachPost, i) => (
        <Posts
          // updatePost={updatePost}
          // deletePost={deletePost}
          key={i}
          // name={eachPost?.name}
          id={eachPost?.id}
          // name={eachPost?.name}
          postText={eachPost?.text}
          // profilePhoto={eachPost?.profilePhoto}
          // postImage="https://cdn.motor1.com/images/mgl/mrz1e/s3/coolest-cars-feature.jpg"
          postDate={eachPost?.createdOn}
        />

      ))}
      {/* <Posts />
      <Posts />
      <Posts /> */}
    </div>
  );
};

export default Content;
