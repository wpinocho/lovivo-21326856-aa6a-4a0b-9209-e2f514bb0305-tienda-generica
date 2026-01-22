/**
 * EDITABLE UI COMPONENT - MobileMenu (Apple Style)
 * Menú móvil inspirado en el diseño de Apple.com
 */

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface MenuItem {
  label: string
  href: string
}

const menuItems: MenuItem[] = [
  { label: 'Tienda', href: '/' },
  { label: 'Smartphones', href: '/' },
  { label: 'Tablets', href: '/' },
  { label: 'Laptops', href: '/' },
  { label: 'Smartwatches', href: '/' },
  { label: 'Audio', href: '/' },
  { label: 'Accesorios', href: '/' },
  { label: 'Soporte', href: '/' },
]

export const MobileMenu = () => {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon"
          className="md:hidden"
          aria-label="Menú"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      
      <SheetContent 
        side="left" 
        className="w-full sm:w-[400px] p-0 bg-background/98 backdrop-blur-xl border-r"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <Link to="/" onClick={() => setOpen(false)}>
            <img 
              src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/temp_1769103658142_7585c0e0/1769103658142-lmxlb1jiad.png"
              alt="Logo"
              className="h-8 w-auto object-contain" 
            />
          </Link>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setOpen(false)}
            aria-label="Cerrar"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Menu Items */}
        <nav className="flex flex-col py-6">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "px-6 py-4 text-2xl font-semibold text-foreground",
                "hover:bg-muted/50 transition-colors duration-200",
                "border-b border-muted/30 last:border-0"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}