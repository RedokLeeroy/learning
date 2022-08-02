import { useFetchEventById } from 'hooks/useFetchEventById';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { NotFoundView } from 'views/NotFoundView';

export const SubEventView = () => {
  const location = useLocation();
  const event = useFetchEventById();
  return (
    <>
      {event ? (
        <>
          <img src={event.images[0].url} alt={event.name} />
          <h2>{event.name}</h2>
          <Link state={location.state} to="details">
            to details
          </Link>
        </>
      ) : (
        <NotFoundView />
      )}
    </>
  );
};
