import { NavLink } from "react-router-dom";

export default function Contact() {
    const handleForm = (formData)=> {
        const data = formData.entries();
        const obj = Object.fromEntries(data);
        console.log(obj);
    }
  return (
    <div>
      <h1>Contact Page</h1>
      <NavLink to="/">Go to Home</NavLink>

      <form action={handleForm}>
        <input type="text" placeholder="name" name="name" autoComplete="true" /> <br />
        <input type="number" placeholder="number" name="number" autoComplete="true" /> <br />
        <textarea name="query" placeholder="query" autoComplete="true"></textarea> <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
