import React from 'react';
import { Plus, X } from "lucide-react"

interface HeaderProps {
  showForm: boolean;
  setShowForm: (show: boolean) => void;
  currentPage: 'guestbook' | 'setlist';
  setCurrentPage: (page: 'guestbook' | 'setlist') => void;
}

export const Header: React.FC<HeaderProps> = ({
  showForm,
  setShowForm,
  currentPage,
  setCurrentPage
}) => {
  return (
    <header className="bg-emerald-50 shadow-lg opacity-75 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center">
                <button 
                className={`animated-border-button px-4 py-2 text-sm font-medium transition-colors ${currentPage === 'guestbook' ? 'active' : 'text-gray-600'}`}
                onClick={() => setCurrentPage('guestbook')}
                >
                방명록
                </button>
                <button 
                className={`animated-border-button px-4 py-2 text-sm font-medium transition-colors ${currentPage === 'setlist' ? 'active' : 'text-gray-600'}`}
                onClick={() => setCurrentPage('setlist')}
                >
                셋리스트
                </button>
            </div>
            {currentPage === 'guestbook' && <button
                onClick={() => setShowForm(!showForm)}
                className="bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-full flex items-center space-x-2 transition-colors duration-200 shadow-md"
            >
                {showForm ? <X className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                <span className='font-medium'>
                {showForm ? '취소' : '방명록 쓰기'}
                </span>
            </button>}
        </div>
    </header>
  )
}