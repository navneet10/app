import { useState } from "react";

function AddUser() {
    const [first, setName] = useState("");
    const [last, setLast] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/user", { 
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ first, last, email, password }),
        });
		 console.log(response);
        if (response.ok) {
            alert("User added successfully!");
            setName("");
            setLast("");
            setEmail("");
            setPassword("");
        } else {
            alert("Failed to add user");
        }
    };

    return (
        <div>
            <h2>Add User</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={first} onChange={(e) => setName(e.target.value)} required />
                <input type="text" placeholder="Name" value={last} onChange={(e) => setLast(e.target.value)} required />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Add User</button>
            </form>
        </div>
    );
}

export default AddUser;
