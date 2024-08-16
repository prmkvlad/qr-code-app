import { QRCodeSVG } from "qrcode.react";
import { GENERATE_DATA } from "../../constants";
import s from "./generateHistory.module.css";

export const GenerateHistory = () => {
	const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
	return (
		<div className={s.container}>
			{data.map((text) => (
				<p className={s.result} key={text}>
					<QRCodeSVG value={text} size={130} />
					{text}
				</p>
			))}
		</div>
	);
};