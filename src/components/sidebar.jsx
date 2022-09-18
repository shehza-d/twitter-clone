import { useState } from 'react';
import { BsFillMoonFill, BsFillSunFill, BsSun } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";

const Sidebar = (props) => {

	// const [myStyle, setMyStyle] = useState({
	// 	color: 'white',
	// 	backgroundColor: ' rgb(21,32,43)'
	// })
	// const [btnText, setBtnText] = useState(<BsSun />)

	// const themeMode = () => {
	// if (props.mode==="dark") {
	// 	setMyStyle({
	// 		color: 'black',
	// 		backgroundColor: 'white'
	// 	})
	// }
	// else {
	// 	setMyStyle({
	// 		color: 'white',
	// 		backgroundColor: ' rgb(21,32,43)'
	// 	})
	// }
	// }
	// <BsFillMoonFill/>
	// <BsFillSunFill/>
	// <BsSun/>
	// <BsFillMoonFill/>
	//style={myStyle}
	return (
		<div className="siderbar"  >
			<button type="button" onClick={props.toggleThemeMode}>{(props.mode === "light") ? <BsFillMoonFill /> : <BsSun />}</button>

			<div className="searchBar">
				<BiSearch /><input type="search" placeholder="Search Twitter" />
			</div>



			<ul className="trends">
				<h2>Trends for you</h2>
				<li>trend 1</li>
				<li>trend 1</li>
				<li>trend 1</li>
				<li>trend 1</li>
				<li>trend 1</li>
				<li>trend 1</li>
				<li>trend 1</li>
				<li>trend 1</li>
			</ul>

		</div>
	);
}

export default Sidebar;