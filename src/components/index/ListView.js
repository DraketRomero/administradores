import React from "react";
import styled from "styled-components";
import logo from "./../../img/GLI_LogoColor1.png";
import logoHelp from "./../../icons/external-link.svg";
import logoAdmin from "./../../icons/Administradores.svg";
import logoCat from "./../../icons/Catálogos.svg";
import logoLideres from "./../../icons/Lideres.svg";
import logoUsers from "./../../icons/usuarios.svg";
import logoCursos from "./../../icons/Cursos.svg";
import logoEventos from "./../../icons/Eventos.svg";
import logoNotificacioens from "./../../icons/notificaciones.svg";
import logoReportes from "./../../icons/reportes.svg";

const ListView = () => {
	return (
		<ListOpc>
			<div style={{ borderRight: "1px solid #e8eaf0" }}>
				<div
					style={{
						padding: "20px 0 20px 20px",
						// width: "100px",
						alignItems: "center",
					}}
				>
					<ImgLogo src={logo}></ImgLogo>
				</div>
				<div>
					<listGroup>
						<li
							style={{
								background: "#E5E5E5",
								border: "1px solid #E8EAF0",
								height: "36px",
								textAlign: "left",
								padding: "15px 0 0 60px",
								listStyle: "none",
								fontSize: "14px",
								// width: "256px",
							}}
						>
							<img src={logoAdmin} style={{ margin: "3px 10px 0 0" }} />
							Administradores
						</li>
						<li
							style={{
								borderTop: "1px solid #E8EAF0",
								height: "36px",
								textAlign: "left",
								padding: "15px 0 0 60px",
								listStyle: "none",
								fontSize: "14px",
							}}
						>
							<img src={logoCat} style={{ margin: "3px 10px 0 0" }} />
							Catálogos
						</li>
						<li
							style={{
								borderTop: "1px solid #E8EAF0",
								height: "36px",
								textAlign: "left",
								padding: "15px 0 0 60px",
								listStyle: "none",
								fontSize: "14px",
							}}
						>
							<img src={logoLideres} style={{ margin: "3px 10px 0 0" }} />
							Líderes
						</li>
						<li
							style={{
								borderTop: "1px solid #E8EAF0",
								height: "36px",
								textAlign: "left",
								padding: "15px 0 0 60px",
								listStyle: "none",
								fontSize: "14px",
							}}
						>
							<img src={logoUsers} style={{ margin: "3px 10px 0 0" }} />
							Usuarios
						</li>
						<li
							style={{
								borderTop: "1px solid #E8EAF0",
								height: "36px",
								textAlign: "left",
								padding: "15px 0 0 60px",
								listStyle: "none",
								fontSize: "14px",
							}}
						>
							<img src={logoLideres} style={{ margin: "3px 10px 0 0" }} />
							Mi Empresa
						</li>
						<li
							style={{
								borderTop: "1px solid #E8EAF0",
								height: "36px",
								textAlign: "left",
								padding: "15px 0 0 60px",
								listStyle: "none",
								fontSize: "14px",
							}}
						>
							<img src={logoCursos} style={{ margin: "3px 10px 0 0" }} />
							Cursos
						</li>
						<li
							style={{
								borderTop: "1px solid #E8EAF0",
								height: "36px",
								textAlign: "left",
								padding: "15px 0 0 60px",
								listStyle: "none",
								fontSize: "14px",
							}}
						>
							<img src={logoUsers} style={{ margin: "3px 10px 0 0" }} />
							Recompensas
						</li>
						<li
							style={{
								borderTop: "1px solid #E8EAF0",
								height: "36px",
								textAlign: "left",
								padding: "15px 0 0 60px",
								listStyle: "none",
								fontSize: "14px",
							}}
						>
							<img src={logoEventos} style={{ margin: "3px 10px 0 0" }} />
							Eventos
						</li>
						<li
							style={{
								borderTop: "1px solid #E8EAF0",
								height: "36px",
								textAlign: "left",
								padding: "15px 0 0 60px",
								listStyle: "none",
								fontSize: "14px",
							}}
						>
							<div style={{ display: "flex", flexDirection: "row" }}>
								<div>
									<img
										src={logoNotificacioens}
										style={{
											margin: "3px 10px 0 0",
										}}
									/>
								</div>
								<div style={{ width: "122px" }}>Notificaciones</div>
								<div
									style={{
										color: "#4CAF50",
										background: "#E8F5E9",
										padding: "3px 0 0 0",
										fontSize: "12px",
										fontWeight: "bolder",
										borderRadius: "2.5px",
										height: "20px",
										width: "15px",
										textAlign: "center",
										alignContent: "center",
									}}
								>
									2
								</div>
							</div>
						</li>
						<li
							style={{
								borderTop: "1px solid #E8EAF0",
								height: "36px",
								textAlign: "left",
								padding: "15px 6px 30px 60px",
								fontSize: "14px",
							}}
						>
							<img src={logoReportes} style={{ margin: "3px 10px 0 0" }} />
							Reportes
						</li>
					</listGroup>
				</div>
				<div
					style={{
						background: "#E8EAF0",
						margin: "311px 16px 0 16px",
						borderRadius: "4px",
					}}
				>
					<div style={{ display: "flex", padding: "10px 10px 10px 16px" }}>
						<div>
							<div style={{ fontSize: "14px" }}>¿Necesitas ayuda?</div>
							<div style={{ fontSize: "12px" }}>
								<a href="#" style={{ color: "#323232" }}>
									Ir a Seccion de Ayuda
								</a>
							</div>
						</div>

						<div style={{ padding: "5px 5px 0 40px" }}>
							<img src={logoHelp}></img>
						</div>
					</div>
				</div>
				<div
					style={{
						margin: "16px 16px 0 16px",
						textAlign: "center",
					}}
				>
					<div
						style={{
							fontSize: "12px",
							borderTop: " 1px solid #E8EAF0",
							padding: "16px 0 24px 0",
							color: "#323232"
						}}
					>
						@ Copyrigth GLI 2021
					</div>
				</div>
			</div>
		</ListOpc>
	);
};

const ListOpc = styled.div`
	grid-column: 1;
	grid-row: 1 / 5;
	height: 60px;
	width: 256px;
`;

const ImgLogo = styled.img`
	height: 52px;
	width: 62px;
	padding: 10px 0 0 80px;
`;

export default ListView;
