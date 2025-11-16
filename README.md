# Movie Review

A modern movie search and review web application built with React and Vite, featuring a responsive design with Tailwind CSS.

## Technologies Used

- React 19
- Vite 7
- Tailwind CSS 4
- React Icons
- Lodash
- Axios for API calls
- TMDB APIs for data

## Project Structure

```
MovieReview/
├── public/
│   ├── Images/
│   │   ├── logo.png
├── src/
│   ├── Components/
│   │   ├── FormComponents/
│   │   │   ├── SelectField.jsx
│   │   ├── MovieComponents/
│   │   │   ├── CrewCard.jsx
│   │   │   ├── MovieCard.jsx
│   │   │   ├── MovieFilters.jsx
│   │   │   ├── MovieList.jsx
│   │   ├── CommonImageViewer.jsx
│   │   ├── CustomToast.jsx
│   │   ├── EmptyMessage.jsx
│   │   ├── ErrorMessage.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Loading.jsx
│   │   └── Pagination.jsx
│   │   └── SearchBar.jsx
│   │   └── StarRating.jsx
│   ├── Context/
│   │   ├── MovieContext.jsx
│   ├── Hooks/
│   │   ├── useApiCall.jsx
│   ├── Pages/
│   │   ├── Home.jsx
│   │   ├── MovieDetails.jsx
│   │   ├── PageNotFound.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── netlify.toml
├── vite.config.js
├── eslint.config.js
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/LeoAlexThomas/MovieReview.git
   cd MovieReview
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Development

To start the development server:

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173` by default.

### Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

To preview the production build:

```bash
npm run preview
# or
yarn preview
```

## Features

- Modern React components using functional components and hooks
- Responsive design with Tailwind CSS
- Movie Search by name, Release Year and Genre.
- Movies will be listed in pagination manner.
- Movie Detailed info on Movie info page.
- User can give rating from 1 - 5 star at Movie Detailed page
