import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { User } from 'lucide-react';
import { AuthDialog } from './AuthDialog';
import { useNavigate } from 'react-router-dom';
import logo from '@/assets/logo.png';

interface HeaderProps {
  user?: {
    name: string;
    email: string;
    avatar?: string;
  } | null;
  onLogout?: () => void;
}

export const Header = ({ user, onLogout }: HeaderProps) => {
  const [showAuth, setShowAuth] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (userData: { name: string; email: string; avatar?: string }) => {
    // This is passed up to App.tsx which handles the actual login state
    setShowAuth(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="IndianJobs" className="h-10 w-10" />
          <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            IndianJobs
          </h1>
        </div>
        
        {user ? (
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="h-8 w-8 rounded-full border-2 border-primary"
                />
              ) : (
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                  <User className="h-4 w-4 text-primary-foreground" />
                </div>
              )}
              <span className="text-sm font-medium">{user.name}</span>
            </div>
            <Button variant="outline" size="sm" onClick={onLogout}>
              Logout
            </Button>
          </div>
        ) : (
          <Button onClick={() => setShowAuth(true)} className="gap-2">
            <User className="h-4 w-4" />
            Login
          </Button>
        )}
      </div>
      
      <AuthDialog 
        open={showAuth} 
        onOpenChange={setShowAuth}
        onLogin={handleLogin}
      />
    </header>
  );
};