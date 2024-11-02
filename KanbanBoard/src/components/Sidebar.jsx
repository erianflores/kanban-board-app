import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div id='sidebar-container'>
      <Link to='/' className='sidebar-link'>Home</Link>
      <Link to='/about-page' className='sidebar-link'>About</Link>
    </div>
  );
}