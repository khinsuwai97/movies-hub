import React, { FC } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import useRegisterModal from '@/hooks/useRegisterModal';

interface NavbarItemsProps {
  title: string;
  href: string;
  auth?: boolean;
}

const NavbarItems: FC<NavbarItemsProps> = ({ title, href, auth }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const { onOpen } = useRegisterModal();

  const handleNavigation = () => {
    if (auth && !session?.user) {
      onOpen();
    } else if (href) {
      router.push(href);
    }
  };

  return (
    <li className="pb-1 hover:underline" onClick={handleNavigation}>
      {title}
    </li>
  );
};

export default NavbarItems;
