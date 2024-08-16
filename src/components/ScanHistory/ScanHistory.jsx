import { QRCodeSVG } from "qrcode.react";
import { SCAN_DATA } from "../../constants";
import s from "./scanHistory.module.css";

export const ScanHistory = () => {
	const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
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