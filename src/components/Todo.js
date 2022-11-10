import React from "react";
import "../styles/todo.scss";
import { TbTrash } from "react-icons/tb";

const Todo = () => {
	return (
		<div className="todo">
			<button className="checkContainer">
				<div />
			</button>
			<p>
				مداد رنگی ها مشغول بودند به جز مداد سفید، هیچکس به او کار
				نمیداد، همه میگفتند : تو به هیچ دردی نمیخوری، یک شب که مداد رنگی
				ها تو سیاهی شب گم شده بودند، مداد سفید تا صبح ماه کشید مهتاب
				کشید و انقدر ستاره کشید که کوچک و کوچکتر شد صبح توی جعبه مداد
				رنگی جای خالی او با هیچ رنگی پر نشد، به یاد هم باشیم شاید فردا
				ما هم در کنار هم نباشیم…
			</p>
			<button className="deleteButton">
				<TbTrash size={20} />
			</button>
		</div>
	);
};

export default Todo;
