import React from 'react';

function Notification({ message, type, onClose }) {
  if (!message) return null;

  return (
    <div className="gird fixed top-5 right-5 w-30 bg-white shadow-lg rounded-lg p-4 border border-gray-200">
      <div className="flex items-center justify-between">
        {/* Hien thi dau tich */}
        {type == 'success' && (
          <span className="text-green-600 font-medium">
            {' '}
            {message}
            <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>
              ✅
            </button>
          </span>
        )}
      </div>
      {type == 'error' && (
        <span className="text-red-600 font-medium">
          {message}{' '}
          <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>
            ❌
          </button>
        </span>
      )}
    </div>
  );
}

export default Notification;
