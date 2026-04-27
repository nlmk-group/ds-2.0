import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface PortalProps {
  children: ReactNode;
  node: Element | DocumentFragment;
}

const Portal: React.FC<PortalProps> = ({ children, node }) => {
  return node ? ReactDOM.createPortal(children, node) : null;
};

export default Portal;
