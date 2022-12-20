import { useState } from 'react';

const MyPopupModal = () => {
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => setShowPopup((prevShowPopup) => !prevShowPopup);
  return (
    <div className='card center overflow-hidden relative'>
      <button
        className='text-2xl font-bold px-4 py-2 text-white text-center border-2 border-blue-500 shadow-lg rounded-lg bg-blue-400 hover:bg-blue-500'
        onClick={togglePopup}
      >
        Pop!
      </button>
      {showPopup && (
        <div className='absolute top-0 left-0 h-full w-full bg-black/50 center' onClick={togglePopup}>
          <div
            className='bg-white px-8 py-6 w-4/5 h-3/5 text-lg rounded-lg shadow-lg flex flex-col'
            onClick={(e) => e.stopPropagation()}
          >
            <div className='flex justify-between align-center mb-4'>
              <h1 className='font-bold text-2xl'>Modal</h1>
              <button className='text-red-500 text-2xl font-bold p-1' onClick={togglePopup}>
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
