import { useState } from "react";
import "./App.css";
function App() {
	const [userInfo, setUserInfo] =
		useState({
			name: "",
			email: "",
			password: "",
		});

	const [errors, setErrors] = useState({
		name: "",
		email: "",
		password: "",
	});
	const regex = /^[ა-ჰ]+$/;
	const handleSubmit = (
		event: React.FormEvent<HTMLFormElement>
	) => {
		event.preventDefault();

		if (userInfo.name === "") {
			setErrors({
				...errors,
				name: "Name is required",
			});
			return;
		}
		if (!regex.test(userInfo.name)) {
			setErrors({
				...errors,
				name: "Name must be in Georgian",
			});
			return;
		}

		if (userInfo.name.length < 3) {
			setErrors({
				...errors,
				name: "Name must be at least 3 characters",
			});
			return;
		}

		setUserInfo({
			name: "",
			email: "",
			password: "",
		});
		setErrors({
			name: "",
			email: "",
			password: "",
		});
	};

	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setUserInfo({
			...userInfo,
			[event.target.name]:
				event.target.value,
		});
		setErrors({
			...errors,
			[event.target.name]: "",
		});
	};
	return (
		<>
			<form
				style={{
					display: "flex",
					flexDirection: "column",
				}}
				onSubmit={handleSubmit}
			>
				<label htmlFor="name">
					Name:
				</label>
				<input
					type="text"
					id="name"
					name="name"
					value={userInfo.name}
					onChange={handleChange}
				></input>
				{errors.name && (
					<p style={{ color: "red" }}>
						{errors.name}
					</p>
				)}
				<label htmlFor="email">
					Email:
				</label>
				<input
					type="text"
					id="email"
					name="email"
					value={userInfo.email}
					onChange={handleChange}
				></input>
				<label htmlFor="password">
					Password:
				</label>
				<input
					type="password"
					id="password"
					name="password"
					value={userInfo.password}
					onChange={handleChange}
				></input>
				<button type="submit">
					Submit
				</button>
			</form>
		</>
	);
}
export default App;
