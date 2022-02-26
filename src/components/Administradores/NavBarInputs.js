import React from "react";
import logoFiltro from "./../../icons/Filtro.svg";
import buscar from "./../../icons/buscar.svg";
import buscar1 from "./../../icons/buscar1.svg";

const NavBarInputs = () => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
			}}
		>
			<div style={{ margin: "0 12px 0 0", position: "relative" }}>
				<input
					type="text"
					style={{
						borderRadius: "32px",
						background: "#E8EAF0",
						height: "42px",
						width: "309px",
						color: "#323232",
						border: "none",
						padding: "0 0 0 40px",
					}}
					placeholder="Buscar"
				/>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					style={{
						color: "#323232",
						position: "absolute",
						width: "20px",
						height: "20px",
						left: "12px",
						top: "50%",
						transform: "translateY(-50%)",
					}}
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
						clip-rule="evenodd"
					/>
				</svg>
			</div>
			<div style={{}}>
				<button
					type="button"
					style={{
						background: "#E8EAF0",
						borderRadius: "4px",
						width: "82px",
						height: "42px",
						alignItems: "center",
						border: "none",
						margin: "0 16px 0 0",
					}}
				>
					Buscar
				</button>
			</div>

			<div>
				<button
					type="button"
					style={{
						backgroundColor: "#4FB9BB",
						border: "none",
						width: "42px",
						height: "42px",
						borderRadius: "4px",
						margin: "0 16px 0 0",
					}}
				>
					<img src={logoFiltro} />
				</button>
			</div>

			<div style={{ margin: "0 40px 0 300px", width: "62px", height: "18px" }}>
				<button
					type="button"
					style={{
						backgroundColor: "transparent",
						border: "1px solid #4FB9BB",
						borderRadius: "4px",
						fontSize: "13px",
						fontWeight: "400",
						height: "42px",
						padding: "12px 16px 12px 16px",
					}}
				>
					Descargar
				</button>
			</div>
			<div style={{ margin: "0 0 0 20px", width: "163px" }}>
				<button
					type="button"
					style={{
						background: "#4FB9BB",
						color: "white",
						border: "none",
						width: "163px",
						height: "42px",
						fontSize: "13px",
						borderRadius: "4px",
						boxSizing: "border-box",
						alignItems: "center",
						margin: "0 64px 0 0",
					}}
				>
					Agregar nuevo admin
				</button>
			</div>
		</div>
	);
};

export default NavBarInputs;
