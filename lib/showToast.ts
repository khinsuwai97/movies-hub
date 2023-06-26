import { toast } from 'react-hot-toast';

export const successTaost = (title: string | undefined) => {
  toast.success(`${title} was added to your watchlist.`, {
    style: {
      background: '#0b7285',
      color: '#fff',
    },
    iconTheme: {
      primary: '#fff',
      secondary: '#0b7285',
    },
  });
};

export const errorToast = (title: string | undefined) => {
  toast.error(`${title} is already in your watchlist.`, {
    style: {
      background: 'rgb(201, 61, 61)',
      color: '#fff',
    },
    iconTheme: {
      primary: 'rgb(201, 61, 61)',
      secondary: '#fff',
    },
  });
};
