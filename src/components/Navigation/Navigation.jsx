import { Link } from "react-router-dom";
import s from './navigation.module.css';

export const Navigation = () => {
	return (
		<nav className={s.container}>
			<Link className={s.link} to="/generate">Generate QR Code</Link>
			<Link className={s.link} to="/scan">Scan QR Code</Link>
			<Link className={s.link} to="/generateHistory">Generate History</Link>
			<Link className={s.link} to="/scanHistory">Scan History</Link>
		</nav>
	);
};