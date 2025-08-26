# DBHL Cup Next.js Project Blueprint

## Project Name: DBHL Cup
## Description

A Next.js application using the App Router to manage an annual ball hockey tournament. Features include displaying tournament details, team registration, game schedules, and potentially player statistics.
The primary color theme for the website will be red, black, and white.

The main page background will feature a provided image. The global CSS file needs to be fixed to ensure correct styling.
## Technologies
The user provided the specific parsing error for globals.css, and I will fix it by moving the @import rule to the top of the file.

*   **Framework:** Next.js 14+ (App Router)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS
*   **Images:** Next/image
*   **Database:** Firebase (Firestore)
*   **Authentication:** Firebase Authentication
*   **Data Mutations:** Server Actions
*   **Form Handling:** React Hook Form (Optional, for client-side validation/UX)
*   **Deployment:** Vercel or similar

## Project Structure

**Project Overview:**
A Next.js application for a sports club, featuring information about the club, sponsors, and potentially team details and events.

```
/dbhl-cup
├── app/
│   ├── (tournament)/
│   │   ├── page.tsx          # Home page
│   │   ├── stats/
│   │   │   ├── page.tsx      # Player and team statistics
│   │   ├── schedule/
│   │   │   ├── page.tsx      # Game schedule
│   │   │   └── [gameId]/
│   │   │       └── page.tsx  # Individual game details
│   │   ├── rules/
│   │   │   └── page.tsx      # Rules and Regulations
│   │   ├── past-tournaments/
│   │   │   ├── page.tsx      # Overview of past tournaments
│   │   │   ├── 2023/
│   │   │   │   └── page.tsx  # Details for the 2023 tournament
│   │   │   └── 2024/
│   │   │       └── page.tsx  # Details for the 2024 tournament
│   │   ├── photos/
│   │   │   └── page.tsx      # Photo gallery
│   │   ├── sponsors/
│   │   │   └── page.tsx      # Sponsor information
│   │   ├── contact/
│   │   │   └── page.tsx      # Contact information
│   │   └── register/
│   │       └── page.tsx      # Team registration
│   ├── api/
│   │   ├── teams/
│   │   │   └── route.ts      # API route for team data
│   │   └── games/
│   │       └── route.ts      # API route for game data
│   ├── layout.tsx            # Root layout
│   ├── error.tsx             # Error boundary
│   ├── loading.tsx           # Loading state
│   └── globals.css           # Global styles
├── components/
│   ├── ui/                   # Reusable UI components (buttons, cards, etc.)
│   ├── TournamentInfo.tsx    # Component to display tournament details
│   ├── ScheduleTable.tsx     # Component to display game schedule
│   ├── TeamList.tsx          # Component to display list of teams
│   ├── TeamRegistrationForm.tsx # Client component for the form
│   └── ...
├── lib/
│   ├── firebase.ts           # Firebase initialization and configuration
│   ├── actions.ts            # Server Actions for data mutations
│   │   ├── definitions.ts        # TypeScript type definitions
│   ├── data.ts               # Server-side data fetching functions
│   └── utils.ts              # Utility functions
├── public/
│   └── ...                   # Static assets
├── styles/                   # Optional: additional style files
├── types/                    # TypeScript types and interfaces
│   └── index.d.ts
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```
## Key Components & Concepts

*   **Server Components:**
    *   Used for fetching data from Firebase (e.g., tournament details, team list, schedule data).
    *   Examples: `app/(tournament)/page.tsx`, `app/(tournament)/schedule/page.tsx`, `app/(tournament)/teams/page.tsx`, components like `TournamentInfo.tsx`, `ScheduleTable.tsx`, `TeamList.tsx`.
    *   Directly interact with server-side data fetching functions in `/lib/data.ts`.
*   **Client Components:**`
    *   Used for interactive elements, forms, and components requiring browser APIs (e.g., state management for form inputs, animations).
    *   Example: `app/(tournament)/register/page.tsx` (containing `TeamRegistrationForm.tsx`), potentially components for filtering or sorting data on the client-side.
    *   Marked with `"use client"` directive.
*   **Server Actions:**
    *   Used for data mutations (creating, updating, deleting data).
    *   Examples: Team registration submission, updating game scores (if admin functionality is added later).
    *   Defined in `/lib/actions.ts`.
    *   Called directly from client components or server components (though common for forms in client components).
*   **Firebase Integration:**
    *   **Firestore:** Primary database for storing tournament data (tournaments, teams, players, games). Data fetching functions in `lib/data.ts` will query Firestore.
    *   **Authentication:** Manage user accounts (e.g., administrators, team captains). Firebase Authentication SDK will be used. Authentication state can be managed using Context API or similar within client components if needed, or checked on the server for protected routes/actions.
    *   **Firebase MCP (Management & Control Plane):** The Firebase console (console.firebase.google.com) is the MCP. Setup involves:
        1.  Creating a new Firebase project.
        2.  Adding a web app to the project.
        3.  Copying the Firebase configuration object.  Store this securely (e.g., environment variables).
        4.  Initializing Firebase in `lib/firebase.ts` using this config.
        5.  Enabling Firestore database and setting up initial collections (e.g., `tournaments`, `teams`, `games`).
        6.  Enabling Firebase Authentication and configuring desired sign-in methods.
        7.  Setting up Firebase security rules for Firestore and Authentication to control data access and user permissions.

## Data Flow (Examples)

*   **Displaying Schedule:** Server Component (`app/(tournament)/schedule/page.tsx`) calls `lib/data.ts` function to fetch game data from Firestore. Data is passed down to `ScheduleTable.tsx` (potentially a Server Component or Client Component depending on interactivity).
*   **Team Registration:** Client Component (`TeamRegistrationForm.tsx` in `/app/(tournament)/register/page.tsx`) uses React Hook Form to manage form state and validation. On submission, it calls a Server Action (`/lib/actions.ts`) which writes the new team data to Firestore. The Server Action can then trigger a revalidation of relevant data if needed.

## Rules and Regulations Content

### DBHL Cup
* 3 on 3
* 06’-12’
* 6 Teams

### Rules & Regulations

#### Regulations

Helmets with cages, gloves, running shoes are required. Shins pads are recommended.

#### On Floor Rules

1. Offsides. (floating blue line)
2. No Icing.
3. All penalties will result in a penalty shot by the player who drew the penalty.
4. Goalie smothers result in defensive neutral zone faceoffs with zone gained.

#### Penalties

* High sticking
* Hooking
* Holding
* Tripping
* Delay of game
* Unsportsmanlike conduct

#### Round Robin Game Format

* Two 8 minute halves
* Run timed
* Tie games at the end of regulation will result in a tie

#### Playoff game format

* Stop timed
* Ties will result in 5 minute overtime followed by shootout

#### Tournament Format

3 round robin games
1st and 2nd place receive a bye to semi-finals
Quarters
- Matchup A: 3rd vs 6th
- Matchup B: 4th vs 5th

Semi-Finals
1st Place vs Matchup A winner
2nd Place vs Matchup B winner

Finals
TBD vs. TBD

## Initial `app` Directory File Structure & Purpose

*   `/app/page.tsx`: The main landing page for the website. Will likely provide an overview of the current tournament or act as a central hub. Server Component.
*   `/app/stats/page.tsx`: Displays player and team statistics for the current tournament. Server Component.
*   `app/(tournament)/schedule/page.tsx`: Lists all games in the tournament schedule. This will be a Server Component fetching game data. It might include filtering/sorting functionality handled by client components.
*   `app/(tournament)/schedule/[gameId]/page.tsx`: Displays details for a specific game. A Server Component fetching data for the specific game ID.
*   `/app/rules/page.tsx`: Displays the rules and regulations for the tournament. Server Component.
*   `/app/past-tournaments/page.tsx`: An index page for past tournaments. Server Component.
*   `/app/past-tournaments/2023/page.tsx`: Details specific to the 2023 tournament. Server Component.
*   `/app/past-tournaments/2024/page.tsx`: Details specific to the 2024 tournament. Server Component.
*   `/app/photos/page.tsx`: Displays photos from the tournament. Server Component (fetching image data/links).
*   `/app/sponsors/page.tsx`: Displays information about tournament sponsors. Server Component.
*   `/app/contact/page.tsx`: Provides contact information. Server Component (perhaps rendering a client form).
*   `app/(tournament)/register/page.tsx`: Contains the form for team registration. This page will likely be a Server Component rendering a Client Component (`TeamRegistrationForm.tsx`) to handle the interactive form.
*   `app/api/teams/route.ts`: Provides a simple API endpoint for fetching team data (GET) and potentially creating new teams (POST) – although Server Actions are preferred for mutations within the app. This might be useful for external integrations later.
*   `app/api/games/route.ts`: Provides a simple API endpoint for fetching game data (GET).
*   `/app/layout.tsx`: Root layout for the application, including shared UI like the navigation bar and footer.
*   `/app/globals.css`: Global CSS file for applying consistent styles and the color theme.

## Next Steps

1.  Set up a new Next.js project with TypeScript and Tailwind CSS.
2.  Update global styles (`/app/globals.css`) to incorporate the red, black, and white color theme.
3.  Implement the basic structure and content for each of the new pages (`/app/stats/page.tsx`, `/app/rules/page.tsx`, `/app/past-tournaments/page.tsx`, `/app/past-tournaments/2023/page.tsx`, `/app/past-tournaments/2024/page.tsx`, `/app/photos/page.tsx`, `/app/sponsors/page.tsx`, `/app/contact/page.tsx`).
4.  Add a navigation component to `/app/layout.tsx`.
5.  Initialize Firebase and configure the SDK.
6.  Define Firestore data models and security rules.
7.  Implement data fetching functions in `/lib/data.ts` for pages requiring dynamic data.
8.  Create Server Actions in `/lib/actions.ts` for team registration.
6.  Build the necessary Server and Client Components.
10. Implement routing using the App Router.
11. Deploy to Vercel.