import React from "react";
import logoArrow from "./../../icons/outline-keyboard_arrow_right-24px.svg";
import NavBarInputs from "./NavBarInputs";
import TablaAdmins from './TablaAdmins';

const AdministradoresView = () => {
	return (
		<div style={{ margin: "10px 0 0 30px" }}>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					margin: "20px 0 8px 0",
				}}
			>
				<div style={{ fontColor: "#323232" }}>Inicio</div>
				<div style={{ margin: "0 10px 0 10px" }}>
					<img src={logoArrow} />
				</div>
				<div
					style={{
						color: "#4FB9BB",
						fontSize: "16px",
					}}
				>
					Administradores
				</div>
			</div>
			<div style={{ fontWeight: "bolder", margin: "0 0 25px 0" }}>
				Administradores de la consola
			</div>
			<NavBarInputs />
			<TablaAdmins />
		</div>
	);
};

export default AdministradoresView;
