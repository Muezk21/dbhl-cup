typescriptreact
const SchedulePage = () => {
  const scheduleData = [
    { id: 1, date: '2024-08-10', time: '10:00 AM', teams: 'Team A vs Team B', location: 'Rink 1' },
    { id: 2, date: '2024-08-10', time: '11:00 AM', teams: 'Team C vs Team D', location: 'Rink 2' },
    { id: 3, date: '2024-08-10', time: '12:00 PM', teams: 'Team E vs Team F', location: 'Rink 1' },
    // More schedule data...
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Tournament Schedule</h1>
      {scheduleData.length > 0 ? (
        <ul>
          {scheduleData.map((game) => (
            <li key={game.id} className="mb-2 p-3 border rounded">
              <p><strong>Date:</strong> {game.date}</p>
              <p><strong>Time:</strong> {game.time}</p>
              <p><strong>Teams:</strong> {game.teams}</p>
              <p><strong>Location:</strong> {game.location}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Schedule coming soon!</p>
      )}
    </div>
  );
};

export default SchedulePage;