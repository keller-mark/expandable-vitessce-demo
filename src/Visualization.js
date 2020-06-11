import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Vitessce } from 'vitessce';
import 'vitessce/dist/es/production/static/css/index.css';

const ExpandableDiv = styled("div")`
    top: ${(props) => (props.$isExpanded ? '0' : 'auto')};
    position: ${(props) => (props.$isExpanded ? 'fixed' : 'relative')};
    height: ${(props) => (props.$isExpanded ? '100vh' : 'auto')};
    width: ${(props) => (props.$isExpanded ? '100%' : '80%')};

    .vitessce-container {
        display: block;
        height: ${(props) => (props.$isExpanded ? '100vh' : 'auto')};
        width: 100%;
    }
`

export default function Visualization(props) {
  const { vitData } = props;

  const [isExpanded, setIsExpanded] = useState(false);

  const setIsExpandedAndResize = (d) => {
    setIsExpanded(d);
    setTimeout(() => window.dispatchEvent(new Event('resize')), 100);
  }

  useEffect(() => {
    function onKeydown(event) {
      if (event.key === 'Escape') {
        setIsExpandedAndResize(false);
      }
    }
    window.addEventListener('keydown', onKeydown);
    return () => {
      window.removeEventListener('keydown', onKeydown);
    }
  }, []);

  function onExpand() {
    setIsExpandedAndResize(true);
  }

  return (
    <div>
        Portal UI&nbsp;
        <button onClick={onExpand}>Expand</button>
        (esc to collapse)
        <ExpandableDiv $isExpanded={isExpanded}>
          <Vitessce
            height={isExpanded ? null : 500}
            config={vitData}
            theme="light"
          />
        </ExpandableDiv>
     </div>
  );
}