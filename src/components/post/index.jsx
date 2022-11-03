import { FaRegComment } from "react-icons/fa";
import { FiShare, FiEdit } from "react-icons/fi";
import { AiOutlineRetweet } from "react-icons/ai";
import { IoHeartOutline } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import { useState } from "react";
import { initializeApp } from "firebase/app";
import moment from "moment";
import { getFirestore, doc, deleteDoc, updateDoc } from "firebase/firestore";

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

const Posts = (props) => {
  const [editing, setEditing] = useState({
    editingId: null,
    editingText: "",
  });

  const deletePost = async () => await deleteDoc(doc(db, "posts", props.id));
  // console.log("postId: ", props.id);

  const updatePost = async (e) => {
    e.preventDefault();

    await updateDoc(doc(db, "posts", editing.editingId), {
      text: editing.editingText,
    });

    setEditing({
      editingId: null,
      editingText: "",
    });
  };

  return (
    <div className="posts">
      <div className="flex">
        <img
          className="profilePhoto"
          src="https://pbs.twimg.com/profile_images/1519059538556723203/ouFwv4wv_400x400.jpg"
          alt="userDP"
        />
        <div className="userNameDiv">
          <span>Your Username</span>

          <span>
            {moment(props?.postDate?.seconds * 1000 || undefined).fromNow()}
          </span>
        </div>
        <button onClick={() => deletePost(props.id)}>
          <MdDeleteForever />
        </button>

        {editing.editingId === props?.id ? null : (
          <button
            onClick={() => {
              setEditing({
                editingId: props?.id,
                editingText: props?.postText,
              });
            }}
          >
            <FiEdit />
          </button>
        )}
      </div>

      {props.id === editing.editingId ? (
        <form onSubmit={updatePost}>
          <input
            type="text"
            value={editing.editingText}
            onChange={(e) => {
              setEditing({
                ...editing,
                editingText: e.target.value,
              });
            }}
            placeholder="please enter updated value"
          />
          <button type="submit">Update</button>
        </form>
      ) : (
        <p className="post" target="_blank" rel="noreferrer">
          {props?.postText}
        </p>
      )}

      <br />
      <img className="postImg" src={props.postImage} alt="twitterImg" />
      <div className="actionBtn">
        <i>
          <FaRegComment />
        </i>
        <i>
          <AiOutlineRetweet />
        </i>
        <i>
          <IoHeartOutline />
        </i>
        <i>
          <FiShare />
        </i>
      </div>
    </div>
  );
};

export default Posts;
