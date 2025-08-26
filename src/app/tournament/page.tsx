const TournamentInfoPage = () => { // This is a server component
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">DBHL Cup Tournament Information</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">About the Tournament</h2>
        <p className="text-gray-700">
          {/* Placeholder for a brief description of the tournament */}
          Welcome to the annual DBHL Cup ball hockey tournament! Get ready for exciting games,
          fierce competition, and a great community atmosphere.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Key Details</h2>
        <ul className="list-disc list-inside text-gray-700">
          {/* Placeholder for key tournament details */}
          <li>Dates: [Tournament Dates]</li>
          <li>Location: [Tournament Location]</li>
          <li>Registration Deadline: [Registration Deadline]</li>
          <li>Entry Fee: [Entry Fee]</li>
          <li>Contact: [Contact Information]</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Rules and Regulations</h2>
        <p className="text-gray-700">
          {/* Placeholder for a link to or summary of tournament rules */}
          Please refer to the official tournament rules for detailed information on gameplay,
          eligibility, and conduct. [Link to Rules]
        </p>
      </section>

      {/* Add more sections as needed for schedules, registered teams, etc. */}
    </div>
  );
};

export default TournamentInfoPage;