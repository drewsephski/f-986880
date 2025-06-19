import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import { Menu, X, CircleDot, LayoutDashboard, DollarSign, Sun, Moon, PlayCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Switch } from '@/components/ui/switch';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@/context/ThemeContext';

const Header = () => {
  const [activePage, setActivePage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();

  const handleNavClick = (page: string, isExternal: boolean = false) => (e: React.MouseEvent) => {
    e.preventDefault();
    setActivePage(page);
    setMobileMenuOpen(false);

    if (isExternal) {
      navigate(`/${page === 'home' ? '' : page}`); // Navigate to root for 'home', otherwise to '/page'
    } else {
      const element = document.getElementById(page);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark-mode' ? 'light-mode' : 'dark-mode');
  };
  return (
    <div className="sticky top-0 z-50 pt-8 px-4">
      <header className="w-full max-w-7xl mx-auto py-3 px-6 md:px-8 flex items-center justify-between rounded-2xl backdrop-blur-[14px] backdrop-saturate-[100%] bg-[#f1] border border-opacity-20">
        <div className="p-3">
          <Logo />
        </div>
        
        {/* Mobile menu button */}
        <button className="md:hidden p-3 rounded-2xl text-muted-foreground hover:text-foreground" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2">
          <div className="rounded-full px-1 py-1 backdrop-blur-md bg-background/80 border border-border shadow-lg">
            <ToggleGroup type="single" value={activePage} onValueChange={value => {
              if (value) {
                setActivePage(value);
                // Assuming all desktop navigation items are external links
                navigate(`/${value === 'home' ? '' : value}`);
                setMobileMenuOpen(false); // Close mobile menu if it was open
              }
            }}>
              <ToggleGroupItem value="home" className={cn("px-4 py-2 rounded-full transition-colors relative", activePage === 'home' ? 'text-accent-foreground bg-accent' : 'text-muted-foreground hover:text-foreground hover:bg-muted')}>
                Home
              </ToggleGroupItem>
              <ToggleGroupItem value="solutions" className={cn("px-4 py-2 rounded-full transition-colors relative", activePage === 'solutions' ? 'text-accent-foreground bg-accent' : 'text-muted-foreground hover:text-foreground hover:bg-muted')}>
                <CircleDot size={16} className="inline-block mr-1.5" /> Solutions
              </ToggleGroupItem>
              <ToggleGroupItem value="platform" className={cn("px-4 py-2 rounded-full transition-colors relative", activePage === 'platform' ? 'text-accent-foreground bg-accent' : 'text-muted-foreground hover:text-foreground hover:bg-muted')}>
                <LayoutDashboard size={16} className="inline-block mr-1.5" /> Platform
              </ToggleGroupItem>
              <ToggleGroupItem value="plans" className={cn("px-4 py-2 rounded-full transition-colors relative", activePage === 'plans' ? 'text-accent-foreground bg-accent' : 'text-muted-foreground hover:text-foreground hover:bg-muted')}>
                <DollarSign size={16} className="inline-block mr-1.5" /> Plans
              </ToggleGroupItem>
              <ToggleGroupItem value="demo" className={cn("px-4 py-2 rounded-full transition-colors relative", activePage === 'demo' ? 'text-accent-foreground bg-accent' : 'text-muted-foreground hover:text-foreground hover:bg-muted')}>
                <PlayCircle size={16} className="inline-block mr-1.5" /> Demo
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </nav>
        
        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-4 right-4 bg-background/95 backdrop-blur-md py-4 px-6 border border-border rounded-2xl shadow-lg z-50">
            <div className="flex flex-col gap-4">
              <a href="/" className={`px-3 py-2 text-sm rounded-md transition-colors ${activePage === 'home' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted'}`} onClick={handleNavClick('home', true)}>
                Home
              </a>
              <a href="/solutions" className={`px-3 py-2 text-sm rounded-md transition-colors ${activePage === 'solutions' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted'}`} onClick={handleNavClick('solutions', true)}>
                <CircleDot size={16} className="inline-block mr-1.5" /> Solutions
              </a>
              <a href="/platform" className={`px-3 py-2 text-sm rounded-md transition-colors ${activePage === 'platform' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted'}`} onClick={handleNavClick('platform', true)}>
                <LayoutDashboard size={16} className="inline-block mr-1.5" /> Platform
              </a>
              <a href="/plans" className={`px-3 py-2 text-sm rounded-md transition-colors ${activePage === 'plans' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted'}`} onClick={handleNavClick('plans', true)}>
                <DollarSign size={16} className="inline-block mr-1.5" /> Plans
              </a>
              <a href="/demo" className={`px-3 py-2 text-sm rounded-md transition-colors ${activePage === 'demo' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted'}`} onClick={handleNavClick('demo', true)}>
                <PlayCircle size={16} className="inline-block mr-1.5" /> Demo
              </a>
              {/* Add theme toggle for mobile */}
              <div className="flex items-center justify-between px-3 py-2">
                <span className="text-sm text-muted-foreground">Theme</span>
                <div className="flex items-center gap-2">
                  <Moon size={16} className={`${theme === 'dark-mode' ? 'text-primary' : 'text-muted-foreground'}`} />
                  <Switch checked={theme === 'dark-mode'} onCheckedChange={toggleTheme} className="data-[state=checked]:bg-primary" />
                  <Sun size={16} className={`${theme === 'light-mode' ? 'text-primary' : 'text-muted-foreground'}`} />
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="hidden md:flex items-center gap-4">
          {/* Theme toggle for desktop */}
          <div className="flex items-center gap-2 rounded-full px-3 py-2">
            <Moon size={18} className={`${theme === 'dark-mode' ? 'text-primary' : 'text-muted-foreground'}`} />
            <Switch checked={theme === 'dark-mode'} onCheckedChange={toggleTheme} className="data-[state=checked]:bg-primary" />
            <Sun size={18} className={`${theme === 'light-mode' ? 'text-primary' : 'text-muted-foreground'}`} />
          </div>
          <div className="rounded-2xl">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground hover:bg-muted">Log in</Button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;