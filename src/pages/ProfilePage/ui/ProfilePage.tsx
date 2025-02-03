import { ProfileCard } from '@/entities/Profile';

import { useProfilePage } from '../model/use-profile-page';
import { useProfilePageHandlers } from '../model/use-profile-page-handlers';

export function ProfilePage() {
  const profilePage = useProfilePage();
  const profilePageHandlers = useProfilePageHandlers();

  return (
    <ProfileCard
      data={profilePage.data}
      error={profilePage.error}
      validateErros={profilePage.validateProfileErros}
      isLoading={profilePage.isLoading}
      readonly={profilePage.readonly}
      onEdit={profilePageHandlers.onEdit}
      onCancelEdit={profilePageHandlers.onCancelEdit}
      onSubmitForm={profilePageHandlers.onSubmitForm}
    />
  );
}
