import React from "react";
import styled from "styled-components";
import useWindowSize from "./../../hooks/useWindowSize";
import logo from "./../../icons/search.svg";
import profile from "./../../img/Procter-Gamble-SWOT 1.png";
import logout from "./../../icons/log-out.svg";

const Navbar = () => {
	return (
		<Navbar1>
			<div style={{ borderRight: "1px solid #e8eaf0", margin: "15px" }}>
				<img src={logo} style={{ margin: "15px 30px 10px 30px" }}></img>
			</div>
			<div style={{ color: "white", display: "flex", flexDirection: "row" }}>
				<div style={{ padding: "25px 10px 20px 10px" }}>
					<img
						src={profile}
						style={{
							borderRadius: "100%",
							width: "36px",
							height: "34px",
						}}
					/>
				</div>
				<div style={{ textAlign: "left", padding: "0 20px 0 0" }}>
					<div style={{ padding: "20px 20px 5px 0" }}>Adrian Stefan</div>
					<div>Recursos Humanos</div>
				</div>
			</div>

			<div style={{ margin: "30px 80px 30px 20px" }}>
				<img src={logout} onClick={() => alert("Sliste!")}></img>
			</div>
		</Navbar1>
	);
};

const Navbar1 = styled.div`
	grid-column: 2 / 10;
	grid-row: 1 / 1;
	background: #4fb9bb;
	align-content: right;
	display: flex;
	margin: 0;
	justify-content: right;
	width: 1200px;
`;
export default Navbar;
