import './style/design-system.scss';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false;

export {
  Form,
  Col,
  Row,
  Container,
  Navbar as RBNavbar,
  Nav as RBNav,
  NavDropdown as RBNavDropdown,
  Dropdown as RBDropdown,
  FormControl as RBFormControl,
  Tab,
  Collapse,
  Breadcrumb as RBBreadcrumb,
} from 'react-bootstrap';

export * from './components';

// export hooks
export { default as useDerivedState } from './hooks/useDerivedState';
