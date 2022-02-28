import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import NotesServices from "../services/NotesServices";

const AddNote = () => {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [category, setCategory] = useState("programming");

	const history = useHistory();

	const saveNote = (e) => {
		e.preventDefault();
		const note = { title, body, category };
		NotesServices.create(note)
			.then((response) => {
				history.push("/");
				console.log("notes added", response.data);
			})
			.catch((error) => {
				console.log("something", error);
			});
	};
	return (
		<div className="create">
			<form>
				<div className="form-group">
					<label htmlFor="title">
						Note title: <sup>*</sup>
					</label>
					<input
						type="text"
						className="form-control"
						id="title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>

				<div className="form-group">
					<label htmlFor="body">
						Note Description: <sup>*</sup>
					</label>
					<textarea
						id="body"
						className="form-control"
						value={body}
						onChange={(e) => setBody(e.target.value)}></textarea>
				</div>

				<div className="form-group">
					<label htmlFor="category">Note category:</label>

					<select
						id="category"
						className="form-control"
						value={category}
						onChange={(e) => setCategory(e.target.value)}>
						<option value={"programming"}>Programming</option>
						<option value="vacation">Vacation</option>
						<option value="meeting">Meeting</option>
						<option value="blogging">Blogging</option>
					</select>
				</div>

				<div className="text-center">
					<button onClick={(e) => saveNote(e)}>Add note</button>
				</div>
			</form>
		</div>
	);
};

export default AddNote;
