import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="bg-white shadow p-4">
      <div className="container mx-auto flex gap-4">
        <Link to="/" className="font-bold">Home</Link>
        <Link to="/about" className="font-bold">About</Link>
        <Link to="/diploma" className="font-bold">Diploma project</Link>
        <Link to="/projects" className="font-bold">Projects</Link>
      </div>
    </nav>
  );
}
