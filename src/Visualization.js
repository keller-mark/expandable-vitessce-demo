import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Vitessce } from 'vitessce';
import 'vitessce/dist/es/production/static/css/index.css';

const vitessceHeight = 500;

const ExpandableDiv = styled("div")`
    top: ${(props) => (props.$isExpanded ? '0' : 'auto')};
    position: ${(props) => (props.$isExpanded ? 'fixed' : 'relative')};
    height: ${(props) => (props.$isExpanded ? '100vh' : 'auto')};
    width: ${(props) => (props.$isExpanded ? '100%' : '80%')};

    .vitessce-container {
        display: block;
        height: ${(props) => (props.$isExpanded ? '100vh' : `${vitessceHeight}px`)};
        width: 100%;
        overflow: hidden;
    }
`

export default function Visualization(props) {
  const { vitData } = props;

  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    function onKeydown(event) {
      if (event.key === 'Escape') {
        setIsExpanded(false);
      }
    }
    window.addEventListener('keydown', onKeydown);
    return () => {
      window.removeEventListener('keydown', onKeydown);
    }
  }, []);

  return (
    <div>
        Portal UI&nbsp;
        <button onClick={() => setIsExpanded(true)}>Expand</button>
        (esc to collapse)
        <ExpandableDiv $isExpanded={isExpanded}>
          <Vitessce
            height={isExpanded ? null : vitessceHeight}
            config={{...vitData}}
            theme="light"
          />
        </ExpandableDiv>
     </div>
  );
}