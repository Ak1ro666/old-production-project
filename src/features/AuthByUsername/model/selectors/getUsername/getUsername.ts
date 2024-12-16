import { LoginSchema } from '@/features/AuthByUsername';

export const getUsername = (state: LoginSchema) => state?.username;
