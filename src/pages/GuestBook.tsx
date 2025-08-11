import { User, MessageSquare } from 'lucide-react';
import { LiquidGlass } from '../components/LiquidGlass';

interface Message {
  id: number;
  created_at: string;
  author: string;
  content: string;
}

interface FormData {
  author: string;
  content: string;
}

interface GuestBookProps {
  showForm: boolean;
  setShowForm: (show: boolean) => void;
  formData: FormData;
  handleSubmit: (e: React.FormEvent) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  messages: Message[];
}

export default function GuestBook({
  showForm,
  setShowForm,
  formData,
  handleSubmit,
  handleInputChange,
  messages
}: GuestBookProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Writing Form */}
      {showForm && (
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-gray-100">
          <div className="flex items-center space-x-2 mb-4">
            <User className="h-5 w-5 text-emerald-600" />
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
                className="px-6 py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors duration-200 shadow-md"
              >
                등록하기
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Messages Grid */}
      <div className="grid grid-cols-1 gap-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className="transition-all duration-300 transform hover:-translate-y-1"
          >
            <LiquidGlass>
              <div className="liquid-glass__menus flex justify-between mb-3">
                <div className="flex w-full items-center justify-between">
                  <span className="font-semibold text-gray-800">{message.author}</span>
                  <span className="text-xs text-gray-600">{message.created_at.split('T')[0]}</span>
                </div>
              </div>
              <p className="text-gray-900 leading-relaxed">{message.content}</p>
            </LiquidGlass>
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
  );
}
