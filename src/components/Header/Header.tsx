import { useNavigate } from 'react-router-dom'
import { AppRoutes } from '../../models';
import './Header.css'

export const Header = ({ title }: { title: string }) => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className='header-child'>
        <h1 className='header-title'>{title}</h1>
      </div>
      <h1 className='close' onClick={() => navigate(AppRoutes.game)}>X</h1>
    </div>
  )
}