import React from 'react';
import { playClickSound } from '../utils/audio';
import './EventList.css';

const EventList = ({ events, onEventClick }) => {
  const handleClick = (event) => {
    playClickSound();
    onEventClick(event);
  };

  return (
    <div className="event-list">
      {events.map((event) => (
        <div key={event.id} className="event-card" onClick={() => handleClick(event)}>
          <img src={event.image} alt={event.name} className="event-photo" />
          <h2 className="event-name">{event.name}</h2>
          <p className="event-details">{event.date}</p>
          <p className="event-location">{event.location}</p> {/* New paragraph for city name */}
        </div>
      ))}
    </div>
  );
};

export default EventList;
