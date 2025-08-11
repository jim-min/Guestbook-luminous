import { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import GuestBook from './pages/GuestBook';
import SetList from './pages/SetList';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'guestbook' | 'setlist'>('guestbook');
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
        <Header showForm={showForm} setShowForm={setShowForm} setCurrentPage={setCurrentPage} currentPage={currentPage} />
        {currentPage === 'guestbook' ? (
          <GuestBook 
            showForm={showForm} 
            setShowForm={setShowForm} 
            formData={formData} 
            handleSubmit={handleSubmit} 
            handleInputChange={handleInputChange} 
            messages={messages} 
          />
        ) : (
          <SetList />
        )}
      </div>
    </div>
  );
}
