import { ReactNode } from 'react'
import { PageTemplate } from './PageTemplate'
import { BrandLogoLeft } from '@/components/BrandLogoLeft'
import { SocialLinks } from '@/components/SocialLinks'
import { FloatingCart } from '@/components/FloatingCart'
import { ProfileMenu } from '@/components/ProfileMenu'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'
import { useCartUISafe } from '@/components/CartProvider'
import { useCart } from '@/contexts/CartContext'
import { useCollections } from '@/hooks/useCollections'
import { Input } from '@/components/ui/input'
import { ScrollLink } from '@/components/ScrollLink'

/**
 * EDITABLE TEMPLATE - EcommerceTemplate
 * 
 * Template específico para páginas de ecommerce con header, footer y cart.
 * El agente IA puede modificar completamente el diseño, colores, layout.
 */

interface EcommerceTemplateProps {
  children: ReactNode
  pageTitle?: string
  showCart?: boolean
  className?: string
  headerClassName?: string
  footerClassName?: string
  layout?: 'default' | 'full-width' | 'centered'
}

export const EcommerceTemplate = ({
  children,
  pageTitle,
  showCart = true,
  className,
  headerClassName,
  footerClassName,
  layout = 'default'
}: EcommerceTemplateProps) => {
  const cartUI = useCartUISafe()
  const openCart = cartUI?.openCart ?? (() => {})
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()
  const { hasCollections, loading: loadingCollections } = useCollections()

  const header = (
    <div className={`py-3 ${headerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <BrandLogoLeft />

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8 text-sm">
              <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">
                Tienda
              </Link>
              <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">
                Smartphones
              </Link>
              <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">
                Tablets
              </Link>
              <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">
                Laptops
              </Link>
              <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">
                Smartwatches
              </Link>
              <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">
                Audio
              </Link>
              <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">
                Accesorios
              </Link>
              <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">
                Soporte
              </Link>
            </nav>
          </div>

          {/* Profile & Cart */}
          <div className="flex items-center space-x-2">
            <ProfileMenu />
            
            {showCart && (
              <Button
                variant="ghost"
                size="icon"
                onClick={openCart}
                className="relative"
                aria-label="Ver carrito"
              >
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems > 99 ? '99+' : totalItems}
                  </span>
                )}
              </Button>
            )}
          </div>
        </div>

        {/* Page Title */}
        {pageTitle && (
          <div className="mt-6">
            <h1 className="text-3xl font-bold text-foreground">
              {pageTitle}
            </h1>
          </div>
        )}
      </div>
    </div>
  )

  const footer = (
    <div className={`bg-muted/30 text-foreground py-12 border-t ${footerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">
          {/* Column 1 */}
          <div>
            <h3 className="font-semibold mb-3">Tienda</h3>
            <div className="space-y-2 text-muted-foreground">
              <Link to="/" className="block hover:text-foreground transition-colors">
                Smartphones
              </Link>
              <Link to="/" className="block hover:text-foreground transition-colors">
                Tablets
              </Link>
              <Link to="/" className="block hover:text-foreground transition-colors">
                Laptops
              </Link>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-semibold mb-3">Cuenta</h3>
            <div className="space-y-2 text-muted-foreground">
              <Link to="/perfil" className="block hover:text-foreground transition-colors">
                Mi cuenta
              </Link>
              <Link to="/ordenes" className="block hover:text-foreground transition-colors">
                Mis pedidos
              </Link>
            </div>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-semibold mb-3">Acerca de</h3>
            <div className="space-y-2 text-muted-foreground">
              <Link to="/blog" className="block hover:text-foreground transition-colors">
                Blog
              </Link>
              <Link to="/" className="block hover:text-foreground transition-colors">
                Prensa
              </Link>
            </div>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-semibold mb-3">Soporte</h3>
            <div className="space-y-2 text-muted-foreground">
              <Link to="/" className="block hover:text-foreground transition-colors">
                Ayuda
              </Link>
              <Link to="/" className="block hover:text-foreground transition-colors">
                Contacto
              </Link>
            </div>
          </div>

          {/* Column 5 - Social */}
          <div>
            <h3 className="font-semibold mb-3">Síguenos</h3>
            <SocialLinks />
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-xs text-muted-foreground">
          <p>&copy; 2025 Tu Tienda. Todos los derechos reservados.</p>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <PageTemplate 
        header={header}
        footer={footer}
        className={className}
        layout={layout}
      >
        {children}
      </PageTemplate>
      
      {showCart && <FloatingCart />}
    </>
  )
}