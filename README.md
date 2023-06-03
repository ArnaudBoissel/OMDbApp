# OMDb Mobile Application

## Introduction

OMDb Mobile Application is a mobile app built with Ionic and Angular, leveraging the Open Movie Database (OMDb) API. The application allows users to search for movies and TV series, view detailed information about each movie or series, and sort and filter results.

## Features

1. **Search Functionality:** Users can search for movies and series from our vast collection sourced from the OMDb API.
2. **Detailed Information:** Once a user selects a movie or series, they can view detailed information such as the genre, plot, director, actors, release date, runtime, ratings, and more.
3. **Sort and Filter:** Users have the option to sort and filter results to find exactly what they're looking for.

## Technical Details

### API

The application uses the OMDb API for fetching data. Users can search by movie or series title, and can fetch detailed data by IMDB ID. For more details on the API and its usage, refer to the [OMDb API Documentation](https://www.omdbapi.com/).

### Navigation

The application uses Angular routing for navigation. We have a tab-based navigation system with tabs for Home, Movies, and Series. Each movie or series detail page is a child route of the respective Movies or Series page.

### User Interface

The user interface is built using Ionic. We have used Ionic components like ion-card, ion-buttons, and ion-back-button for creating a user-friendly interface.

## Installation and Running the App

Please follow these steps to install and run the app:

1. Clone the repository from [GitHub](https://github.com/ArnaudBoissel?tab=repositories).
2. Navigate to the project directory.
3. Install the dependencies by running `npm install`.
4. Start the app by running `ionic serve`.

## Troubleshooting

If you encounter any issues while running the app, please check the console logs for any error messages. The most common issues are usually related to API connectivity or routing.
