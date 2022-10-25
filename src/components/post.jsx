import { FaRegComment } from 'react-icons/fa';
import { FiShare } from "react-icons/fi";
import { AiOutlineRetweet } from "react-icons/ai";
import { IoHeartOutline } from "react-icons/io5";

const Posts = (props) => {


	// const [posts, setPosts]= useState([]);

	// useEffect{ ()=>{
	// 	axios.get("https://my-json-server.typicode.com/minzamammalik/jsonplaceholder/posts").then(response=>console.log("response: ", response))
	// 		 .catch(error=>console.log("error: ", error))
	// },[]}



	return ( 

		<div className="posts">
			<div className="flex">
				<img className="profilePhoto" src="https://pbs.twimg.com/profile_images/1519059538556723203/ouFwv4wv_400x400.jpg" alt="userDP" />
				<span>Your Username</span>
			</div>
			<p>{props.postText}</p>
			<br />
			{/* <img className='postImg' src="https://pbs.twimg.com/media/Fci88JXXoAAhV2G?format=jpg&name=small" alt="twitterImg" /> */}
			<div className="actionBtn">
				<i><FaRegComment /></i>
				<i><AiOutlineRetweet /></i>
				<i><IoHeartOutline /></i>
				<i><FiShare /></i>
			</div>
		</div>
	);
}

export default Posts;