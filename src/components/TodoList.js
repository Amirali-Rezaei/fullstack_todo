import React from "react";
import "../styles/todos.scss";
import Todo from "./Todo";

const TodoList = () => {
	return (
		<section className="todos">
			<header className="todo-header">
				<div>
					<p>تعداد کارها</p>
					<span>10</span>
				</div>
				<div>
					<p className="textPurple">تمام شده</p>
					<span>1 از 10</span>
				</div>
			</header>
			<div className="list">
				<Todo />
			</div>
		</section>
	);
};

export default TodoList;
