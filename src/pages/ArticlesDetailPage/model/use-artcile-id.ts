import { useParams } from 'react-router-dom';

export function useArtcileId() {
  const { id } = useParams<{ id: string }>();

  return id!;
}
