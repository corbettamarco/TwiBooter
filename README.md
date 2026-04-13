This project runs on Vite with React and TypeScript.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Starts the Vite development server.

### `npm start`

Alias for `npm run dev`.

### `npm run build`

Builds the app for production into the `dist` folder.

### `npm test`

Runs the Vitest test runner.

### `npm run preview`

Serves the production build locally for verification.

## Environment Variables

Rename any CRA-style environment variables from `REACT_APP_*` to `VITE_*`.

This project expects:

- `VITE_API_KEY`: backend endpoint used by the clip search request.

Create a local `.env` file if needed:

```bash
VITE_API_KEY=https://your-api-endpoint
```

Assets that must keep their file names should stay in `public/` and be referenced
with root-relative paths such as `/favicon.png`.

## Notes

The previous Create React App service worker bootstrapping was removed as part
of the Vite migration. If you need PWA support later, add it explicitly with a
Vite PWA plugin rather than restoring the old CRA file.
