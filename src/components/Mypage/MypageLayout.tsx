import React, {useState} from 'react';
import styled from '@emotion/styled';
import Menu from './Menu';
import Content from './Content';

const MypageLayout: React.FC = () => {
    const [selectedComponent, setSelectedComponent] = useState(1);
  
    const handleMenuClick = (componentNumber: number) => {
      setSelectedComponent(componentNumber);
    };
  
    return (
      <>
        <div className='row' style={{display: 'flex', flexWrap: 'wrap'}}>
          <div className='col-lg-3'>
            <Menu handleMenuClick={handleMenuClick} />
          </div>
          <div className='col-lg-9'>
            <Content selectedComponent={selectedComponent} />
          </div>
        </div>
      </>
    );
  };
  
  export default MypageLayout;
