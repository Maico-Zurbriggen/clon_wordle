import { ES } from 'country-flag-icons/react/3x2';
import { BiBarChartAlt2 } from 'react-icons/bi';   // BoxIcons
import { IoSettingsSharp } from 'react-icons/io5'; // Ionicons
import { BiHelpCircle } from 'react-icons/bi';     // BoxIcons
import './Navegation.css';

export const Navegation = () => {
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
        <li className='navegation-child-item'>
          <IoSettingsSharp size={20} />
        </li>
        <li className='navegation-child-item'>
          <BiHelpCircle size={20} />
        </li>
      </ul>
    </nav>
  )
}