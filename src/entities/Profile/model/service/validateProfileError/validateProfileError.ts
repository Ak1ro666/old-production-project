import { Profile, ValidateProfileError } from '../../../domain/types';

export function validateProfileError(profile?: Profile) {
  const errors: ValidateProfileError[] = [];

  if (!profile) {
    errors.push(ValidateProfileError.SERVER_ERROR);

    return errors;
  }

  if (!profile?.first || !profile.lastname) {
    errors.push(ValidateProfileError.INCORRECT_USER_DATA);
  }

  if (!profile?.age) {
    errors.push(ValidateProfileError.INCORRECT_AGE);
  }

  if (!profile?.country) {
    errors.push(ValidateProfileError.INCORRECT_COUNTRY);
  }

  return errors;
}
