# AK Electrical Services

## Run the project
1. Extract the ZIP.
2. Open the project folder in VS Code.
3. Open Terminal in that folder.
4. Run `npm install`
5. Run `npm run dev`
6. Open the local URL shown by Vite (usually http://localhost:5173).

## Pages
- `/` Home
- `/contact` Contact form (saved in browser IndexedDB)
- `/admin` Admin dashboard (edit, status update, delete contacts)

## Images
The demo uses remote Unsplash images. Replace image URLs in the component files with your own images if needed.

## Important
Contact submissions are stored locally in the current browser using IndexedDB. This is a frontend demo, not a shared production database. For a real business website, connect a secure backend and authentication for the admin page.