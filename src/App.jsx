import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:3000/deploy/mailer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
    });

    if (response.ok) {
      console.log('Success:', await response.json());
      setName("");
    setEmail("");
    } else {
      console.log('Error:', response.status);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <form className="grid gap-4 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto" onSubmit={handleSubmit}>
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Username" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <button className="btn btn-primary" type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default App