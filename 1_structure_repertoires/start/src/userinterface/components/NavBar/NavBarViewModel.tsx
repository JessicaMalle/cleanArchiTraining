import { useNavigate } from 'react-router-dom';

export function NavBarViewModel() {
  const navigate = useNavigate();

  return { navigate };
}
