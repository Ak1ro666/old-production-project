import { ProfileCard } from '@/entities/Profile';

import { useProfilePage } from '../model/use-profile-page';
import { useProfilePageHandlers } from '../model/use-profile-page-handlers';

function ProfilePage() {
  const profilePage = useProfilePage();
  const profilePatgeHandlers = useProfilePageHandlers();

  return (
    <ProfileCard
      data={profilePage.formData}
      error={profilePage.error}
      validateErros={profilePage.validateProfileErros}
      isLoading={profilePage.isLoading}
      readonly={profilePage.readonly}
      onChangeFirstname={profilePatgeHandlers.onChangeFirstname}
      onChangeLastname={profilePatgeHandlers.onChangeLastname}
      onChangeAge={profilePatgeHandlers.onChangeAge}
      onChangeCity={profilePatgeHandlers.onChangeCity}
      onChangeUsername={profilePatgeHandlers.onChangeUsername}
      onChangeAvatar={profilePatgeHandlers.onChangeAvatar}
      onChangeCurrency={profilePatgeHandlers.onChangeCurrency}
      onChangeCountry={profilePatgeHandlers.onChangeCountry}
      onEdit={profilePatgeHandlers.onEdit}
      onCancelEdit={profilePatgeHandlers.onCancelEdit}
      onUpdate={profilePatgeHandlers.onUpdate}
    />
  );
}

export default ProfilePage;
