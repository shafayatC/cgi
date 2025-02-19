import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Modal, Space } from 'antd';
import { useEffect } from 'react';
import { useState } from 'react';

const ModalModel = ({children}) => {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const hideModal = () => {
    setOpen(false);
  };
  useEffect(()=>{
    showModal()
},[])
  return (
    <>
      {/* <Button type="primary" onClick={showModal}>
        Modal
      </Button> */}
      <Modal
       className='z-50'
        // title="Modal"
        open={open}
        // onOk={hideModal}
        onCancel={hideModal}
        // okText="确认"
        // cancelText="取消"
        centered='style.top'
      >
        <div style={{height: '500px', width:'400px'}}>
        {children}

        </div>
      </Modal>
    </>
  );
};

export default ModalModel; 