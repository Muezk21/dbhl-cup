typescriptreact
'use client';

import React from 'react';

  return (
function TeamRegistrationPage() {
    <div>
      <h1>Team Registration</h1>
      <form>
        <div>
          <label htmlFor="teamName">Team Name:</label>
          <input type="text" id="teamName" name="teamName" />
        </div>
        <div>
          <label htmlFor="contactName">Contact Person Name:</label>
          <input type="text" id="contactName" name="contactName" />
        </div>
        <div>
          <label htmlFor="contactEmail">Contact Person Email:</label>
          <input type="email" id="contactEmail" name="contactEmail" />
        </div>
        <button type="submit">Register Team</button>
      </form>
    </div>
  );
}

export default TeamRegistrationPage;