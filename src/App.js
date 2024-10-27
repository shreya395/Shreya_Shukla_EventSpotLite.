// src/App.js
import React, { useState, useEffect } from "react";
import EventList from "./components/EventList";
import EventModal from "./components/EventModal";
import mockEvents from "./mockEvents";
import "./App.css";

const App = () => {
  const [events] = useState(mockEvents);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // Simulated loading
  }, []);

  const filteredEvents = events.filter(
    (event) =>
      event.name.toLowerCase().includes(search.toLowerCase()) ||
      event.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    
    <div className="App">
      <nav className="navbar">
        <h1 className="app-title"><i>EventSpot Lite</i></h1>
        <input
          type="text"
          placeholder="Search events by name or location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-bar"
        />
      </nav>
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <EventList events={filteredEvents} onEventClick={setSelectedEvent} />
      )}
      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </div>
  );
};

export default App;
