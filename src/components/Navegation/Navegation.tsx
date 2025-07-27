import { ES } from 'country-flag-icons/react/3x2';
import { BiBarChartAlt2 } from 'react-icons/bi';
import { IoSettingsSharp } from 'react-icons/io5';
import { BiHelpCircle } from 'react-icons/bi';
import { AppRoutes } from '../../models/routes.models';
import './Navegation.css';
import { useNavigate } from 'react-router-dom';

export const Navegation = () => {
  const navigate = useNavigate();

  return (
    <nav className='navegation'>
      <ul className='navegation-child'>
        <li className='navegation-child-item'>
          <ES title='España' className='flag'/>
          <span>ES</span>
        </li>
        <li className='navegation-child-item'>
          <BiBarChartAlt2 size={20} />
        </li>
      </ul>
      <ul className='navegation-child'>
        <li className='navegation-child-item' onClick={() => navigate(AppRoutes.settings)}>
          <IoSettingsSharp size={20} />
        </li>
        <li className='navegation-child-item'>
          <BiHelpCircle size={20} />
        </li>
      </ul>
    </nav>
  )
}