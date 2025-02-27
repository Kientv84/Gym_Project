import { useState } from 'react';
import Notification from '../../toast/Notification';

function Home() {
  const [notification, setNotification] = useState({
    message: '',
    type: 'success',
  });

  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification({ message: '', type }), 3000);
  };

  return (
    <div>
      <button onClick={() => showNotification('Thành công!', 'success')}>Show Success</button>
      <button onClick={() => showNotification('Lỗi xảy ra!', 'error')}>Show Error</button>

      <Notification
        message={notification.message}
        type={notification.type}
        onClose={() => setNotification({ message: '', type: '' })}
      />
    </div>
  );
}

export default Home;
