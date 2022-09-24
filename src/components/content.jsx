import Posts from './post';
import { BsStars } from "react-icons/bs";
import { useEffect } from 'react';
// import axios from 'axios';
// import HomeSvg from '../img/home.svg';

const Content = () => {

	
//json placeholder
//jo chez state variable ma ho gyi wohi display ho gyi aur kuxh bhi display nhi hoga
//khali array per map nhi kam karta


//make weather app on react
//apply router on twitter and call api on twitter
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
						<li>O</li>
						<li>O</li>
						<li>O</li>
						<li>O</li>
						<li>O</li>
						<li>O</li>
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