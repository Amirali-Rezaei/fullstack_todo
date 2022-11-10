import "../styles/header.scss";
import { FaClipboardList } from "react-icons/fa";
import { MdPostAdd } from "react-icons/md";

const Header = () => {
	return (
		<header className="header">
			<div className="logo">
				<h1>
					لیست کارها
					<span>
						<FaClipboardList />
					</span>
				</h1>
			</div>
			<form action="#">
				<input
					type="text"
					name="title"
					id="newTodoTitle"
					placeholder="عنوان کار جدید رو بنویس!"
				/>
				<button type="submit">
					اضافه کن
					<span>
						<MdPostAdd size={20} />
					</span>
				</button>
			</form>
		</header>
	);
};

export default Header;
