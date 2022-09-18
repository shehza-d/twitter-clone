import { FaTwitter } from 'react-icons/fa';
import { RiHomeHeartFill, RiHashtag } from "react-icons/ri";
import { BsPeople, BsBookmark } from "react-icons/bs";
import { IoNotificationsOutline, IoPersonOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { CgMoreO } from "react-icons/cg";

const Menubar = () => {
	return (
		<div className="menubar">
			<ul>
				<li><button><FaTwitter /></button></li>
				<li><button><RiHomeHeartFill /> Home</button></li>
				<li><button><RiHashtag /> Explore</button></li>
				<li><button><BsPeople /> Communities</button></li>
				<li><button><IoNotificationsOutline /> Notifications</button></li >
				<li><button><HiOutlineMail /> Messages</button></li >
				<li><button><BsBookmark /> Bookmarks</button></li >
				<li><button><IoPersonOutline /> Profile</button></li >
				<li><button><CgMoreO /> More</button></li >
				<li ><button className="tweetBtn" > Tweet</button></li>
			</ul >
			<div className="myProfile">
				<img src="https://pbs.twimg.com/profile_images/1519059538556723203/ouFwv4wv_400x400.jpg" alt="twitter DP" width={50} />
			</div>
		</div >
	);
}

export default Menubar;