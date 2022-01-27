import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NotesServices from "../services/NotesServices";

const NotesList = () => {
	const [notes, setNotes] = useState([]);

	useEffect(() => {
		NotesServices.getAll()
			.then((Response) => {
				console.log("printing response", Response.data);
				setNotes(Response.data);
			})
			.catch((error) => {
				console.log("something went wrong", Error);
			});
	}, []);

	return (
		<div className="main-content">
			<h4>List of notes</h4>
			<div className="notes-lis mt-4">
				{notes.length > 0 ? (
					notes.map((notes) => (
						<div key={notes.id} className="notes-preview mt-3">
							<Link to="#">
								<h5 className="primary-color text-capitalize">{notes.title}</h5>
								<p>{notes.body}</p>
							</Link>
						</div>
					))
				) : (
					<div>No Notes available</div>
				)}
			</div>
		</div>
	);
};

export default NotesList;
