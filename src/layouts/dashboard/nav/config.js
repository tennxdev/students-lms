// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',

  },
  {
    title: 'student',
    path: '/dashboard/student',

  },
  {
    title: 'courses',
    path: '/dashboard/courses',

  },
  {
    title: 'attendence',
    path: '/dashboard/attendence',
  },
];

export default navConfig;
