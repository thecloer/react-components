import { useState } from 'react';

const MyPopupModal = () => {
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => setShowPopup((prevShowPopup) => !prevShowPopup);
  return (
    <div className='card center relative overflow-hidden'>
      <button
        className='rounded-lg border-2 border-blue-500 bg-blue-400 px-4 py-2 text-center text-2xl font-bold text-white shadow-lg hover:bg-blue-500'
        onClick={togglePopup}
      >
        Pop!
      </button>
      {showPopup && (
        <div className='center absolute top-0 left-0 h-full w-full bg-black/50' onClick={togglePopup}>
          <div
            className='flex h-3/5 w-4/5 flex-col rounded-lg bg-white px-8 py-6 text-lg shadow-lg'
            onClick={(e) => e.stopPropagation()}
          >
            <div className='align-center mb-4 flex justify-between'>
              <h1 className='text-2xl font-bold'>Modal</h1>
              <button className='p-1 text-2xl font-bold text-red-500' onClick={togglePopup}>
                &times;
              </button>
            </div>

            <p className='grow overflow-y-scroll'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyPopupModal;
