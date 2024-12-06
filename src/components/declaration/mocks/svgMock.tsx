import React from 'react';

const SvgMock: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return React.createElement('svg', props);
};

SvgMock.displayName = 'SvgMock';

export default SvgMock;
export { SvgMock as ReactComponent };