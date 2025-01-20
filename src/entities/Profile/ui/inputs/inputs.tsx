import { Input } from '@/shared/ui/Input';

import { Profile } from '../../domain/types';
import { CurrencySelect, Currency } from '@/entities/Currency';
import { CountrySelect, Country } from '@/entities/Country';

export function Inputs({
  onChangeFirstname,
  onChangeLastname,
  onChangeAge,
  onChangeCity,
  onChangeUsername,
  onChangeAvatar,
  onChangeCurrency,
  onChangeCountry,
  readonly,
  data,
  placeholderFirstname,
  placeholderLastname,
  placeholderAge,
  placeholderCity,
  placeholderUsername,
  placeholderAvatar,
}: {
  onChangeFirstname?: (value: string) => void;
  onChangeLastname?: (value: string) => void;
  onChangeAge?: (value: string) => void;
  onChangeCity?: (value: string) => void;
  onChangeUsername?: (value: string) => void;
  onChangeAvatar?: (value: string) => void;
  onChangeCurrency?: (value: Currency) => void;
  onChangeCountry?: (value: Country) => void;
  placeholderFirstname?: string;
  placeholderLastname?: string;
  placeholderAge?: string;
  placeholderCity?: string;
  placeholderUsername?: string;
  placeholderAvatar?: string;
  readonly?: boolean;
  data?: Profile;
}) {
  return (
    <>
      <Input
        disabled={readonly}
        onChange={onChangeFirstname}
        placeholder={placeholderFirstname}
        readOnly={readonly}
        value={data?.first}
      />
      <Input
        disabled={readonly}
        onChange={onChangeLastname}
        placeholder={placeholderLastname}
        readOnly={readonly}
        value={data?.lastname}
      />
      <Input
        disabled={readonly}
        onChange={onChangeAge}
        placeholder={placeholderAge}
        readOnly={readonly}
        value={data?.age}
      />
      <Input
        disabled={readonly}
        onChange={onChangeCity}
        placeholder={placeholderCity}
        readOnly={readonly}
        value={data?.city}
      />
      <Input
        disabled={readonly}
        onChange={onChangeUsername}
        placeholder={placeholderUsername}
        readOnly={readonly}
        value={data?.username}
      />
      <Input
        disabled={readonly}
        onChange={onChangeAvatar}
        placeholder={placeholderAvatar}
        readOnly={readonly}
        value={data?.avatar}
      />
      <CurrencySelect
        disabled={readonly}
        readOnly={readonly}
        onChange={onChangeCurrency}
        value={data?.currency}
      />
      <CountrySelect
        disabled={readonly}
        readOnly={readonly}
        onChange={onChangeCountry}
        value={data?.country}
      />
    </>
  );
}
