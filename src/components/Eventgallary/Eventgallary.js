import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const EventGallary = ({ events }) => {
  const location = useLocation();
  return (
    <ul>
      {events.map(event => (
        <li key={event.id}>
          <Link state={{ from: location.pathname }} to={event.id}>
            {' '}
            {event.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
