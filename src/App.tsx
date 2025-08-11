import { useState } from 'react';
import { Plus, X, User, MessageSquare } from 'lucide-react';
import './App.css';

export default function GuestBook() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      author: '최동건',
      content: '정말 멋진 공연입니다!! 루미너스 4기 지원해야겠지?',
      date: '2024-08-06'
    },
    {
      id: 2,
      author: '김지우',
      content: '공연 너무 재밌어요. 자주 들릴게요!',
      date: '2024-08-05'
    },
    {
      id: 3,
      author: '전성령',
      content: '지각해서 OB 축하공연을 놓쳤네요. 다음에 올게요 ㅠㅠ',
      date: '2024-08-05'
    },
  ]);
  
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    author: '',
    content: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.author.trim() && formData.content.trim()) {
      const newMessage = {
        id: Date.now(),
        author: formData.author.trim(),
        content: formData.content.trim(),
        date: new Date().toISOString().split('T')[0]
      };
      setMessages([newMessage, ...messages]);
      setFormData({ author: '', content: '' });
      setShowForm(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-white flex justify-center">
      <div className="min-h-screen w-full max-w-md bg-gradient-to-br from-blue-50 to-indigo-100 main-background">
        {/* Header */}
        <header className="bg-white shadow-lg opacity-75 sticky top-0 z-50">
          <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <MessageSquare className="h-5 w-5 text-indigo-600" />
              <h1 className="text-xl font-bold text-gray-800">방명록</h1>
            </div>
            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full flex items-center space-x-2 transition-colors duration-200 shadow-md"
            >
              {showForm ? <X className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
              <span className='font-medium'>
                {showForm ? '취소' : '방명록 쓰기'}
              </span>
            </button>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 py-6">
          {/* Writing Form */}
          {showForm && (
            <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-gray-100">
              <div className="flex items-center space-x-2 mb-4">
                <User className="h-5 w-5 text-indigo-600" />
                <h2 className="text-lg font-semibold text-gray-800">방명록 작성하기</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    작성자명
                  </label>
                  <input
                    type="text"
                    name="author"
                    value={formData.author}
                    onChange={handleInputChange}
                    placeholder="이름을 입력해주세요"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    방명록 내용
                  </label>
                  <textarea
                    name="content"
                    value={formData.content}
                    onChange={handleInputChange}
                    placeholder="여러분의 소중한 메시지를 남겨주세요"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200 resize-none"
                  />
                </div>
                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors duration-200"
                  >
                    취소
                  </button>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors duration-200 shadow-md"
                  >
                    등록하기
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Messages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className="transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="liquid-glass">
                  <div className="liquid-glass--bend"></div>
                  <div className="liquid-glass--face"></div>
                  <div className="liquid-glass--edge"></div>
                  <div className="liquid-glass__content">
                    <div className="liquid-glass__menus flex items-center mb-3">
                      <div className="flex items-center justify-between space-x-2">
                        <span className="font-semibold text-gray-800">{message.author}</span>
                        <span className="text-xs text-gray-400">{message.date}</span>
                      </div>
                    </div>
                    <p className="text-gray-900 leading-relaxed">{message.content}</p>
                  </div>
                </div>
                <svg style={{ display: 'none' }} xmlns="http://www.w3.org/2000/svg">
                  <filter id="glass-blur" x="0" y="0" width="100%" height="100%" filterUnits="objectBoundingBox">
                    <feTurbulence type="fractalNoise" baseFrequency="0.003 0.007" numOctaves="1" result="turbulence" />
                    <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="200" xChannelSelector="R" yChannelSelector="G" />
                  </filter>
                </svg>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {messages.length === 0 && (
            <div className="text-center py-16">
              <MessageSquare className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-500 mb-2">아직 방명록이 없습니다</h3>
              <p className="text-gray-400">첫 번째 방명록을 남겨보세요!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}