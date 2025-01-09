import { getUserAuthData, userActions } from '@/entities/User';
import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export function useNavbar() {
  const [isAuthModal, setIsAuthModal] = useState<boolean>(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    setIsAuthModal(false);
  };

  const handleOpenModal = () => {
    setIsAuthModal(true);
  };

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  return {
    isAuthModal,
    handleCloseModal,
    handleOpenModal,
    authData,
    onLogout,
  } as const;
}
