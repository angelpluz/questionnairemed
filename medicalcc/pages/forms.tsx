import { useState, useEffect } from 'react';

export default function FormPage() {
  // สถานะเพื่อเช็คว่าฟอร์มได้ถูก mount แล้ว
  const [isMounted, setIsMounted] = useState(false);

  // useEffect สำหรับตั้งค่าว่า mount เรียบร้อยแล้ว
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('/api/form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Data saved successfully!');
    } else {
      alert('Error saving data!');
    }
  };

  // ถ้า component ยังไม่ mount ให้แสดง null หรือ Skeleton UI
  if (!isMounted) {
    return null;
  }

  return (
    <div>
      <h1>แบบสอบถาม</h1>
      <form onSubmit={handleSubmit}>
        {/* ชื่อและอีเมล */}
        <div>
          <label>ชื่อ:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>อีเมล:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>ความคิดเห็น:</label>
          <textarea
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* คำถาม 1 */}
        <div>
          <h3>ข้อ 1: คุณชอบผลไม้ชนิดไหนมากที่สุด?</h3>
          <div>
            <label><input type="radio" name="question1" value="apple" onChange={handleChange} /> แอปเปิ้ล</label>
          </div>
          <div>
            <label><input type="radio" name="question1" value="banana" onChange={handleChange} /> กล้วย</label>
          </div>
          <div>
            <label><input type="radio" name="question1" value="orange" onChange={handleChange} /> ส้ม</label>
          </div>
          <div>
            <label><input type="radio" name="question1" value="grape" onChange={handleChange} /> องุ่น</label>
          </div>
          <div>
            <label><input type="radio" name="question1" value="mango" onChange={handleChange} /> มะม่วง</label>
          </div>
        </div>

        {/* คำถาม 2 */}
        <div>
          <h3>ข้อ 2: คุณชอบเครื่องดื่มชนิดไหน?</h3>
          <div>
            <label><input type="radio" name="question2" value="coffee" onChange={handleChange} /> กาแฟ</label>
          </div>
          <div>
            <label><input type="radio" name="question2" value="tea" onChange={handleChange} /> ชา</label>
          </div>
          <div>
            <label><input type="radio" name="question2" value="juice" onChange={handleChange} /> น้ำผลไม้</label>
          </div>
          <div>
            <label><input type="radio" name="question2" value="soda" onChange={handleChange} /> น้ำอัดลม</label>
          </div>
          <div>
            <label><input type="radio" name="question2" value="water" onChange={handleChange} /> น้ำเปล่า</label>
          </div>
        </div>

        {/* คำถาม 3 */}
        <div>
          <h3>ข้อ 3: คุณชอบสีอะไร?</h3>
          <div>
            <label><input type="radio" name="question3" value="red" onChange={handleChange} /> แดง</label>
          </div>
          <div>
            <label><input type="radio" name="question3" value="blue" onChange={handleChange} /> น้ำเงิน</label>
          </div>
          <div>
            <label><input type="radio" name="question3" value="green" onChange={handleChange} /> เขียว</label>
          </div>
          <div>
            <label><input type="radio" name="question3" value="yellow" onChange={handleChange} /> เหลือง</label>
          </div>
          <div>
            <label><input type="radio" name="question3" value="black" onChange={handleChange} /> ดำ</label>
          </div>
        </div>

        {/* คำถาม 4 */}
        <div>
          <h3>ข้อ 4: คุณชอบกีฬาชนิดไหน?</h3>
          <div>
            <label><input type="radio" name="question4" value="football" onChange={handleChange} /> ฟุตบอล</label>
          </div>
          <div>
            <label><input type="radio" name="question4" value="basketball" onChange={handleChange} /> บาสเกตบอล</label>
          </div>
          <div>
            <label><input type="radio" name="question4" value="tennis" onChange={handleChange} /> เทนนิส</label>
          </div>
          <div>
            <label><input type="radio" name="question4" value="swimming" onChange={handleChange} /> ว่ายน้ำ</label>
          </div>
          <div>
            <label><input type="radio" name="question4" value="running" onChange={handleChange} /> วิ่ง</label>
          </div>
        </div>

        {/* คำถาม 5 */}
        <div>
          <h3>ข้อ 5: คุณชอบอาหารแบบไหน?</h3>
          <div>
            <label><input type="radio" name="question5" value="thai" onChange={handleChange} /> อาหารไทย</label>
          </div>
          <div>
            <label><input type="radio" name="question5" value="japanese" onChange={handleChange} /> อาหารญี่ปุ่น</label>
          </div>
          <div>
            <label><input type="radio" name="question5" value="western" onChange={handleChange} /> อาหารตะวันตก</label>
          </div>
          <div>
            <label><input type="radio" name="question5" value="chinese" onChange={handleChange} /> อาหารจีน</label>
          </div>
          <div>
            <label><input type="radio" name="question5" value="indian" onChange={handleChange} /> อาหารอินเดีย</label>
          </div>
        </div>

        <button type="submit">ส่งแบบสอบถาม</button>
      </form>
    </div>
  );
}
