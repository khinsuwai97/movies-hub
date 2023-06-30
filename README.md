## Moives Hub App

- Search and filter your favorite movies and series
- keep upadated with trending movies and series
- add your favorite to watchlist but you need to sign in or create an account to use watchlist
- watch the trailer of each movies and series on Youtube
- check detail of casts on each movie and series
- read the overview of each movie and series
- fully responsvie

## Project Specifications

- on Home page, that is for Trending movies and series. I showed total 20 on each page.That will change daily according to TMDB api.
- On Each Moive card you can see rating,title,release Date and type. Bookmark icon is for watchlist.To add your favorite movies and series to watchlist, you have to create an account and sign in.If you don't want to create an account, please use Google Account.So I can know which user is using this website for each individual watchlist.
- click each card for movie and series detail. You can check moive and series overview, cast and play trailer. But you cannot play trailer of every movies and series.You can also add that movies and series to watchlist as well.please click bookmark icon.
- on Movies and Series page, you can choose the genre you like in categories.If you want to go back to all generes. Please choose all in categories.Some of the old pages won't work becasue of api error. I show user friendly error for that problem.
- for search icons, you can search anything. But movies are default and if you want to search sereies, click series.
- on Watchlist page, if you already sign in, you can see your favorite watchlists, also delete each and clear all.
- You can still use Trending page,Movies page,Series page and Search. Watchlist is only protected with authentication.

## Tech Stacks

- Zustand (I use this only for Register Modal and Login Modal, I need that state some of the pages When user does not sign in)
- Next Theme (for light and dark mode)
- Next Authentication (Register and sign in)
- Swr of Vercel (for data fetching and mutation)
- MUI (pagination)
- React-alice-carousel (casts slider)
- Framer-motion (only for pages transition)
- Mongodb (for database)
- prisma (for schema)
- CSS,Tailwind CSS
- TypeScript,React Hooks
