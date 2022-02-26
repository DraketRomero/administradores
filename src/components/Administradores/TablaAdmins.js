import React, { useState } from "react";
import imgGustavo from "./../../img/profiles/1.jpg";
import imgMaria from "./../../img/profiles/2.jpg";
import imgMaren from "./../../img/profiles/3.jpg";
import imgPaityn from "./../../img/profiles/4.jpg";
import imgKierra from "./../../img/profiles/5.jpg";
import imgTalan from "./../../img/profiles/6.jpg";

const TablaAdmins = () => {
	return (
		<div style={{ padding: "16px 0 0 0" }}>
			<table style={{borderCollapse: "collapse"}}>
				<tr>
					<th style={{}}>
						<input
							type="checkbox"
							style={{
								border: "#607D8B",
								padding: "16px",
								width: "60px",
								heigth: "56px",
							}}
						></input>
					</th>
					<th style={{ width: "303px", heigth: "56px", fontSize: "14px" }}>
						<div style={{padding: "16px 154px 16px 16px"}}>Administradores</div>
					</th>
					<th style={{ width: "165px", heigth: "56px", fontSize: "14px" }}>
                    <div style={{padding: "17px 21px 17px 16px", textAlign: "left"}}>Área</div>
						
					</th>
					<th style={{ width: "263px", heigth: "72px", fontSize: "14px" }}>
						Correo
					</th>
					<th style={{ width: "178px", heigth: "56px", fontSize: "14px" }}>
						Estatus
					</th>
					<th style={{ width: "118px", heigth: "56px", fontSize: "14px" }}>
						Detalles
					</th>
				</tr>
				<tbody>
					<tr style={{ background: "#E8EAF0" }}>
						<td
							style={{
								padding: "27px 16px 27px 16px",
								borderTop: "1px solid #e8eaf0",
							}}
						>
							<input
								type="checkbox"
								style={{
									border: "#607D8B",
									width: "60px",
									heigth: "56px",
								}}
								checked={true}
							></input>
						</td>
						<td
							style={{
								width: "303px",
								heigth: "56px",
								fontSize: "14px",
								display: "flex",
								flexDirection: "row",
								alignItems: "center",
								padding: "20px 0 0 20px",
							}}
						>
							<img src={imgGustavo} style={{ borderRadius: "100%" }}></img>
							<div style={{ padding: "0 0 0 10px", fontWeight: "bolder" }}>
								Gustavo Korsgaard
							</div>
						</td>
						<td style={{ width: "165px", heigth: "56px", fontSize: "14px" }}>
							Recursos humanos
						</td>
						<td style={{ width: "263px", heigth: "72px", fontSize: "14px" }}>
							correo@gmail.com
						</td>
						<td style={{ width: "178px", heigth: "56px", fontSize: "14px" }}>
							Activo
						</td>
						<td style={{ width: "118px", heigth: "56px", fontSize: "14px" }}>
							<i class="fa fa-pencil-square-o" aria-hidden="true"></i>
						</td>
					</tr>
					<tr style={{ background: "#FFFFFF" }}>
						<td
							style={{
								padding: "27px 16px 27px 16px",
								borderTop: "1px solid #e8eaf0",
							}}
						>
							<input
								type="checkbox"
								style={{
									border: "#607D8B",
									width: "60px",
									heigth: "56px",
								}}
							></input>
						</td>
						<td
							style={{
								width: "303px",
								heigth: "56px",
								fontSize: "14px",
								display: "flex",
								flexDirection: "row",
								alignItems: "center",
								padding: "20px 0 0 20px",
							}}
						>
							<img src={imgMaria} style={{ borderRadius: "100%" }}></img>
							<div style={{ padding: "0 0 0 10px", fontWeight: "bolder" }}>
								Maria Dias
							</div>
						</td>
						<td style={{ width: "165px", heigth: "56px", fontSize: "14px" }}>
							Recursos humanos
						</td>
						<td style={{ width: "263px", heigth: "72px", fontSize: "14px" }}>
							correo@gmail.com
						</td>
						<td style={{ width: "178px", heigth: "56px", fontSize: "14px" }}>
							Activo
						</td>
						<td style={{ width: "118px", heigth: "56px", fontSize: "14px" }}>
							<i class="fa fa-pencil-square-o" aria-hidden="true"></i>
						</td>
					</tr>

					<tr style={{ background: "#FFFFFF" }}>
						<td
							style={{
								padding: "27px 16px 27px 16px",
								borderTop: "1px solid #e8eaf0",
							}}
						>
							<input
								type="checkbox"
								style={{
									border: "#607D8B",
									width: "60px",
									heigth: "56px",
								}}
							></input>
						</td>
						<td
							style={{
								width: "303px",
								heigth: "56px",
								fontSize: "14px",
								display: "flex",
								flexDirection: "row",
								alignItems: "center",
								padding: "20px 0 0 20px",
							}}
						>
							<img src={imgMaren} style={{ borderRadius: "100%" }}></img>
							<div style={{ padding: "0 0 0 10px", fontWeight: "bolder" }}>
								Maren Stanton
							</div>
						</td>
						<td style={{ width: "165px", heigth: "56px", fontSize: "14px" }}>
							Recursos humanos
						</td>
						<td style={{ width: "263px", heigth: "72px", fontSize: "14px" }}>
							correo@gmail.com
						</td>
						<td style={{ width: "178px", heigth: "56px", fontSize: "14px" }}>
							Activo
						</td>
						<td style={{ width: "118px", heigth: "56px", fontSize: "14px" }}>
							<i class="fa fa-pencil-square-o" aria-hidden="true"></i>
						</td>
					</tr>

					<tr style={{ background: "#FFFFFF" }}>
						<td
							style={{
								padding: "27px 16px 27px 16px",
								borderTop: "1px solid #e8eaf0",
							}}
						>
							<input
								type="checkbox"
								style={{
									border: "#607D8B",
									width: "60px",
									heigth: "56px",
								}}
							></input>
						</td>
						<td
							style={{
								width: "303px",
								heigth: "56px",
								fontSize: "14px",
								display: "flex",
								flexDirection: "row",
								alignItems: "center",
								padding: "20px 0 0 20px",
							}}
						>
							<img src={imgPaityn} style={{ borderRadius: "100%" }}></img>
							<div style={{ padding: "0 0 0 10px", fontWeight: "bolder" }}>
								Paityn Ekstrom
							</div>
						</td>
						<td style={{ width: "165px", heigth: "56px", fontSize: "14px" }}>
							Recursos humanos
						</td>
						<td style={{ width: "263px", heigth: "72px", fontSize: "14px" }}>
							correo@gmail.com
						</td>
						<td style={{ width: "178px", heigth: "56px", fontSize: "14px" }}>
							Activo
						</td>
						<td style={{ width: "118px", heigth: "56px", fontSize: "14px" }}>
							<i class="fa fa-pencil-square-o" aria-hidden="true"></i>
						</td>
					</tr>

					<tr style={{ background: "#FFFFFF" }}>
						<td
							style={{
								padding: "27px 16px 27px 16px",
								borderTop: "1px solid #e8eaf0",
							}}
						>
							<input
								type="checkbox"
								style={{
									border: "#607D8B",
									width: "60px",
									heigth: "56px",
								}}
							></input>
						</td>
						<td
							style={{
								width: "303px",
								heigth: "56px",
								fontSize: "14px",
								display: "flex",
								flexDirection: "row",
								alignItems: "center",
								padding: "20px 0 0 20px",
							}}
						>
							<img src={imgKierra} style={{ borderRadius: "100%" }}></img>
							<div style={{ padding: "0 0 0 10px", fontWeight: "bolder" }}>
								Kierra Bergson
							</div>
						</td>
						<td style={{ width: "165px", heigth: "56px", fontSize: "14px" }}>
							Recursos humanos
						</td>
						<td style={{ width: "263px", heigth: "72px", fontSize: "14px" }}>
							correo@gmail.com
						</td>
						<td style={{ width: "178px", heigth: "56px", fontSize: "14px" }}>
							Activo
						</td>
						<td style={{ width: "118px", heigth: "56px", fontSize: "14px" }}>
							<i class="fa fa-pencil-square-o" aria-hidden="true"></i>
						</td>
					</tr>

					<tr style={{ background: "#FFFFFF" }}>
						<td
							style={{
								padding: "27px 16px 27px 16px",
								borderTop: "1px solid #e8eaf0",
							}}
						>
							<input
								type="checkbox"
								style={{
									border: "#607D8B",
									width: "60px",
									heigth: "56px",
								}}
							></input>
						</td>
						<td
							style={{
								width: "303px",
								heigth: "56px",
								fontSize: "14px",
								display: "flex",
								flexDirection: "row",
								alignItems: "center",
								padding: "20px 0 0 20px",
							}}
						>
							<img src={imgTalan} style={{ borderRadius: "100%" }}></img>
							<div style={{ padding: "0 0 0 10px", fontWeight: "bolder" }}>
								Talan Rosser
							</div>
						</td>
						<td style={{ width: "165px", heigth: "56px", fontSize: "14px" }}>
							Recursos humanos
						</td>
						<td style={{ width: "263px", heigth: "72px", fontSize: "14px" }}>
							correo@gmail.com
						</td>
						<td style={{ width: "178px", heigth: "56px", fontSize: "14px" }}>
							Activo
						</td>
						<td style={{ width: "118px", heigth: "56px", fontSize: "14px" }}>
							<i class="fa fa-pencil-square-o" aria-hidden="true"></i>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default TablaAdmins;
