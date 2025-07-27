import { useNavigate } from 'react-router-dom'
import { AppRoutes } from '../../models';
import './HeaderSettings.css'

export const HeaderSettings = () => {
  const navigate = useNavigate();

  return (
    <div className="header-settings">
      <div className='header-settings-child'>
        <h1 className='header-settings-title'>Ajustes</h1>
      </div>
      <h1 className='close' onClick={() => navigate(AppRoutes.game)}>X</h1>
    </div>
  )
}