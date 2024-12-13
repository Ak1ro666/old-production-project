import { LoginSchema } from '@/features/AuthByUsername';

export const getPassword = (state: LoginSchema) => state.password;
