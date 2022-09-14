import Posts from './post';
import { BsStars } from "react-icons/bs";

const Content = () => {
	return (
		<div className="content">
			<header className="header">
				<span>Home</span>
				<i title='Top Tweets'><BsStars /></i>
			</header>
			<div className="myProfileContainer">
				<div className="flex">
					<a href="https://twitter.com/Shehza_d_">
						<img className="profilePhoto" src="https://pbs.twimg.com/profile_images/1519059538556723203/ouFwv4wv_400x400.jpg" alt="twitter DP" /></a>
					<input className='postInput' type="text" placeholder="What's Happening?" />
				</div>
				<div className="postOptions">
					<ul>
						<li>io</li>
						<li>io</li>
						<li>io</li>
						<li>io</li>
						<li>io</li>
					</ul>
					<button >Tweet</button>
				</div>
			</div>
			<Posts />
			<Posts />
			<Posts />
			<Posts />
		</div>
	);
}

export default Content;