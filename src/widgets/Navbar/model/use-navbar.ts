import { getUserAuthData, userActions } from '@/entities/User';
import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export function useNavbar() {
  const [isAuthModal, setIsAuthModal] = useState<boolean>(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCloseModal = () => {
    setIsAuthModal(false);
  };

  const handleOpenModal = () => {
    setIsAuthModal(true);
  };

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
    navigate('/');
  }, [dispatch, navigate]);

  return {
    isAuthModal,
    handleCloseModal,
    handleOpenModal,
    authData,
    onLogout,
  } as const;
}
