import React from 'react'

const Chat = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 w-96">
        
        <div className="text-lg font-semibold mb-4">Chat z użytkownikiem</div>

       
        <div className="chat-box">
            <div className="my-2 flex items-center">
                <div className="bg-blue-500 text-white rounded-lg p-2 mr-2">
                    Cześć!
                </div>
                <div className="text-gray-600">12:30</div>
            </div>
            <div className="my-2 flex items-center justify-end">
                <div className="text-gray-600">12:35</div>
                <div className="bg-green-500 text-white rounded-lg p-2 ml-2">
                    Witaj!
                </div>
            </div>
            <div className="my-2 flex items-center">
                <div className="bg-blue-500 text-white rounded-lg p-2 mr-2">
                    Cześć!
                </div>
                <div className="text-gray-600">12:30</div>
            </div>
            <div className="my-2 flex items-center justify-end">
                <div className="text-gray-600">12:35</div>
                <div className="bg-green-500 text-white rounded-lg p-2 ml-2">
                    Witaj!
                </div>
            </div>

            
        </div>

        
        <div className="mt-4 flex">
            <input type="text" placeholder="Wpisz wiadomość" className="flex-1 border rounded-l-lg p-2"/>
            <button className="bg-blue-500 text-white rounded-r-lg px-4 py-2">Wyślij</button>
        </div>
    </div>
  )
}

export default Chat
