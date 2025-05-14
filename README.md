# rolldown-vite-optimize-deps-define

https://github.com/vitejs/rolldown-vite/issues/169

## Steps

1. Run `npm run dev:vite` in the command line
2. Open `http://localhost:3000/` in your browser
3. You will see the message `Vite is running`, and there are no errors in the browser console
4. Run `npm run dev:rolldown-vite`
5. Open `http://localhost:3001/` in your browser
6. You will not see the message `Vite is running`, and there will be an error in the browser console: `Uncaught ReferenceError: global is not defined`

## Expected result

When running `npm run dev:rolldown-vite`, the message `Vite is running` should be displayed without any errors in the browser console.
