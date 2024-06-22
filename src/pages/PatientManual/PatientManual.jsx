import React from 'react'
import { Button, Typography} from 'antd';
import { Link } from 'react-router-dom';

const { Text} = Typography;
const PatientManual = () => {
  return (
    <div>
      <div className='p-10 text-center sarabun-extralight '>
          <h1 >Cis CCRT Cervix</h1>
      </div>

      {/* รูปคิวอาร์ */}
      <div className="p-20 pt-1">
        <img src="ing/qr.png" alt=""/>
      </div>

      <div className='p-20 pt-1 text-center flex flex-col space-y-10'>
        <Button className='bt-blue '>ดาวน์โหลดข้อมูล</Button>
        <Link to={'/Contacts'}><Text>ติดต่อโรงพยาบาล</Text></Link>
      </div>

    </div>
  )
}

export default PatientManual