// src/components/EventModal.js
import React, { useEffect, useState } from "react";
import "./EventModal.css";

const EventModal = ({ event, onClose }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);
  }, [event]);

  const handleClose = () => {
    setIsActive(false);
    setTimeout(onClose, 300);
  };

  if (!event) return null;

  return (
    <div className={`modal-overlay ${isActive ? "active" : ""}`} onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={handleClose}>X</button>
        <h2>{event.name}</h2>
        <p>{event.date} - {event.location}</p>
        <p>{event.description}</p>
        <img src={event.image} alt={event.name} className="event-image"/>
      </div>
    </div>
  );
};

export default EventModal;
