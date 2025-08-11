import { useState, useEffect } from 'react';
import './App.css';
import { Header } from './components/Header';
import GuestBook from './pages/GuestBook';
import SetList from './pages/SetList';
import { supabase } from './supabaseClient';

// Message 타입을 정의합니다.
export interface Message {
  id: number;
  author: string;
  content: string;
  created_at: string;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<'guestbook' | 'setlist'>('guestbook');
  const [messages, setMessages] = useState<Message[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    author: '',
    content: ''
  });

  // 컴포넌트가 마운트될 때 Supabase에서 메시지를 가져옵니다.
  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    const { data: messages, error } = await supabase
      .from('messages')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching messages:', error);
    } else if (messages) {
      setMessages(messages);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.author.trim() && formData.content.trim()) {
      const { data, error } = await supabase
        .from('messages')
        .insert([{ author: formData.author.trim(), content: formData.content.trim() }])
        .select();

      if (error) {
        console.error('Error inserting message:', error);
      } else if (data) {
        // UI에 즉시 새로운 메시지를 추가 (Optimistic UI Update)
        setMessages([data[0], ...messages]);
        setFormData({ author: '', content: '' });
        setShowForm(false);
      }
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