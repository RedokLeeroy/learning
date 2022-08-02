import { useFetchEventById } from '../hooks/useFetchEventById';
import { useLocation, useNavigate } from 'react-router-dom';

export const EventDetailsView = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const event = useFetchEventById();
  return (
    <>
      {event && (
        <>
          <button
            type="button"
            onClick={() => navigate(location?.state?.from ?? '/')}
          >
            Go back
          </button>
          <img width="400" src={event.images[0].url} alt={event.name} />
          <h2>{event.name}</h2>
          <p> genres: {event.classifications[0].genre.name}</p>
          <p>subGenre: {event.classifications[0].subGenre.name}</p>
        </>
      )}
    </>
  );
};
