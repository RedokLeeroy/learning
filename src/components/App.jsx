import { HomeView } from 'views/HomeView';
import { Layout } from './Layout/Layout';
import { Routes, Route } from 'react-router';
import { EventsView } from 'views/EventsView';
import { SubEventView } from './subEventView/subEventView';
import { EventDetailsView } from 'views/EventDetailsView';
import { NotFoundView } from 'views/NotFoundView';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route path="/events" element={<EventsView />}>
          <Route path=":eventsId" element={<SubEventView />} />
        </Route>
      </Route>
      <Route path='events/:eventsId/details' element={<EventDetailsView />}></Route>
      <Route path='*' element={<NotFoundView />} />
    </Routes>
  );
};
