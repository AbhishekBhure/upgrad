import {createPortal} from "react-dom";

const Portal = ({children, domNode}) => createPortal(children, domNode);

export default Portal;
