import React from 'react'
import { Link} from 'react-router-dom'
import { UserOutlined, PhoneOutlined } from '@ant-design/icons';
import { Input, Button, Typography} from 'antd';

const { Title } = Typography;
const onChange = (e) => {
  console.log('Change:', e.target.value);
};

const Appointment = () => {
  return (
    <div>    
      {/* header */}
      <div className="">
        <img src="ing/bg-svg.png" alt="" />
        <img src="ing/bloody_rm-bg.png" alt="" className='w-44 right-1 absolute top-20'/>
        <h2 className='text-5xl font-bold text-blue700 text-center drop-shadow-lg'>Bloody</h2>
      </div>

      <div className='pt-14 text-center'>
          <Title level={5} className='sarabun-extralight'>กรุณากรอกข้อมูลเพื่อยืนยันบัญชีผู้ใช้งาน</Title>
      </div>

      <div className='p-7 flex flex-col space-y-7'>
        <Input showCount maxLength={13} onChange={onChange} size="large" placeholder="เลขประจำตัวประชาชน 13 หลัก" prefix={<UserOutlined />}/>
        <Input showCount maxLength={10} onChange={onChange} size="large" placeholder="หมายเลขโทรศัพท์" prefix={<PhoneOutlined/>}/>
        <Link to={"/Appointment/Appointment2"}><Button className='bt-blue'>ต่อไป</Button></Link>
      </div>

    </div>
  )
}

export default Appointment