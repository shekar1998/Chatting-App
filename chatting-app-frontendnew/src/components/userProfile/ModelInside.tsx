import { withTheme } from '@material-ui/core';
import { Drawer, Button } from 'antd';
import React from 'react';
import './userProfile.css';

class ModalInside extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div className='site-drawer-render-in-current-wrapper'>
        <div className="button-modal">
          <Button type='primary' onClick={this.showDrawer}>
            Open
          </Button>
        </div>
        <Drawer
        className="drawer-modal"
          title='Basic Drawer'
          placement='right'
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
          getContainer={false}
          style={{ position: 'absolute' }}
        >
          <p>Some contents...</p>
        </Drawer>
      </div>
    );
  }
}

export default ModalInside;
